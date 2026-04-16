import fs from 'node:fs/promises'
import path from 'node:path'

import { getCanonicalPath, getPageSeo, getPageStructuredData, SITE_URL } from '../src/lib/seo.js'
import { citySeoBySlug } from '../src/data/citySeo.js'
import { agenciesBySlug, normalizeAgencySlug } from '../src/data/agencies.js'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml')

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const toAscii = (value) =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x00-\x7F]/g, '')

const extractRoutesFromSitemap = async () => {
  const sitemap = await fs.readFile(sitemapPath, 'utf8')
  const matches = [...sitemap.matchAll(/<loc>https:\/\/(?:www\.)?pompesfunebresmaroc\.com([^<]*)<\/loc>/g)]
  return matches.map((match) => getCanonicalPath(match[1] || '/'))
}

const buildPreRenderHtml = (routePath) => {
  const seo = getPageSeo(routePath)

  if (routePath.startsWith('/villes/')) {
    const citySlug = routePath.replace('/villes/', '').trim()
    const normalized = normalizeAgencySlug(citySlug)
    const agency = agenciesBySlug[normalized]
    const cityCopy = citySeoBySlug[normalized]

    const h1 = escapeHtml(cityCopy?.h1 || seo.title)
    const intro = escapeHtml(cityCopy?.intro || seo.description)
    const description = escapeHtml(cityCopy?.description || seo.description)

    const serviceLinks = (cityCopy?.serviceLinkKeys || ['assistance', 'musulmanes', 'fleurs', 'nettoyage'])
      .map((key) => {
        switch (key) {
          case 'assistance':
            return { href: '/assistance', label: 'Assistance funeraire immediate' }
          case 'musulmanes':
            return { href: '/service/pompes-funebres-musulmanes', label: 'Pompes funebres musulmanes' }
          case 'nonMusulmanes':
            return { href: '/service/pompes-funebres-non-musulmanes', label: 'Pompes funebres non musulmanes' }
          case 'fleurs':
            return { href: '/service/fleurs', label: 'Fleurs et hommages funeraires' }
          case 'nettoyage':
            return { href: '/service/nettoyage-fleurissement', label: 'Nettoyage et fleurissement' }
          case 'marbrerieMusulmane':
            return { href: '/produits/marbrerie-musulmane', label: 'Marbrerie musulmane' }
          case 'marbrerieNonMusulmane':
            return { href: '/produits/marbrerie-non-musulmane', label: 'Marbrerie non musulmane' }
          default:
            return null
        }
      })
      .filter(Boolean)

    return `
      <main class="prerender">
        <h1>${h1}</h1>
        <p>${intro}</p>
        <p>${description}</p>
        ${agency?.address ? `<p><strong>Adresse:</strong> ${escapeHtml(toAscii(agency.address))}</p>` : ''}
        <h2>Services lies</h2>
        <ul>
          ${serviceLinks.map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`).join('')}
        </ul>
      </main>
    `.trim()
  }

  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)
  return `
    <main class="prerender">
      <h1>${title}</h1>
      <p>${description}</p>
    </main>
  `.trim()
}

const updateIndexHtml = (html, routePath) => {
  const seo = getPageSeo(routePath)
  const canonicalUrl = `${SITE_URL}${routePath}`
  const schema = getPageStructuredData(routePath)
  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)
  const preRenderHtml = buildPreRenderHtml(routePath)
  const safeSchemaJson = schema ? JSON.stringify(schema).replaceAll('<', '\\u003c') : ''
  const schemaScript = schema
    ? `\n    <script id="site-schema" type="application/ld+json">${safeSchemaJson}</script>`
    : ''
  const noscript = `\n    <noscript>\n      <h1>${title}</h1>\n      <p>${description}</p>\n    </noscript>`

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?content=".*?"[\s\S]*?\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${canonicalUrl}"`)
    .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${title}"`)
    .replace(
      /<meta\s+property="og:description"[\s\S]*?content=".*?"[\s\S]*?\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${canonicalUrl}"`)
    .replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${SITE_URL}/logo-clean.png"`)
    .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${title}"`)
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?content=".*?"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(/<meta name="twitter:image" content=".*?"/, `<meta name="twitter:image" content="${SITE_URL}/logo-clean.png"`)
    .replace(
      /<div id="root"><\/div>/,
      `<div id="root">${preRenderHtml}</div>`,
    )
    .replace(/<script id="site-schema" type="application\/ld\+json">.*?<\/script>\s*/s, '')
    .replace(/<noscript>[\s\S]*?<\/noscript>/, noscript)
    .replace('</head>', `${schemaScript}\n  </head>`)
}

const writeRouteHtml = async (routePath, html) => {
  if (routePath === '/') return
  const routeDir = path.join(distDir, routePath.replace(/^\/+/, ''))
  await fs.mkdir(routeDir, { recursive: true })
  await fs.writeFile(path.join(routeDir, 'index.html'), html, 'utf8')
}

const main = async () => {
  const distIndexPath = path.join(distDir, 'index.html')
  const baseHtml = await fs.readFile(distIndexPath, 'utf8')
  const routes = await extractRoutesFromSitemap()

  const homeHtml = updateIndexHtml(baseHtml, '/')
  await fs.writeFile(distIndexPath, homeHtml, 'utf8')

  for (const routePath of routes) {
    const routeHtml = updateIndexHtml(baseHtml, routePath)
    await writeRouteHtml(routePath, routeHtml)
  }

  console.log(`Generated static SEO HTML for ${routes.length} routes.`)
}

main().catch((error) => {
  console.error('Static route generation failed.')
  console.error(error)
  process.exitCode = 1
})
