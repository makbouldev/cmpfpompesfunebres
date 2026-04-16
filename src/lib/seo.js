import { agenciesBySlug, normalizeAgencySlug } from '../data/agencies.js'
import { citySeoBySlug, citySeoDefaults } from '../data/citySeo.js'

export const DEFAULT_SEO = {
  title: 'Universal PF | Pompes funèbres au Maroc',
  description:
    'Universal PF accompagne les familles au Maroc 24h/24 et 7j/7 pour les obsèques, le rapatriement de corps, le transport funéraire et les formalités administratives.',
}

export const SITE_URL = (
  import.meta.env?.VITE_SITE_URL || 'https://www.pompesfunebresmaroc.com'
).replace(/\/+$/, '')

export const CANONICAL_PATHS = {
  '/pompes-funebres/musulmanes': '/service/pompes-funebres-musulmanes',
  '/pompes-funebres/non-musulmanes': '/service/pompes-funebres-non-musulmanes',
  '/produits/fleurs': '/service/fleurs',
  '/produits/nettoyage-fleurissement': '/service/nettoyage-fleurissement',
  '/service/marbrerie-musulmane': '/produits/marbrerie-musulmane',
  '/service/marbrerie-non-musulmane': '/produits/marbrerie-non-musulmane',
  '/service/services-entreprises': '/services-entreprises',
}

export const SEO_BY_PATH = {
  '/': {
    title: 'Pompes funèbres au Maroc | Universal PF',
    description:
      'Pompes funèbres au Maroc avec assistance 24/7, rapatriement de corps, transport funéraire, marbrerie et accompagnement administratif pour les familles.',
  },
  '/qui-sommes-nous': {
    title: 'Qui sommes-nous | Universal PF',
    description:
      "Découvrez Universal PF, entreprise funéraire au Maroc reconnue pour son accompagnement humain, son organisation rigoureuse et son expertise administrative et logistique.",
  },
  '/assistance': {
    title: 'Assistance funéraire immédiate 24/7 | Universal PF',
    description:
      "Assistance funéraire immédiate au Maroc 24h/24 et 7j/7 : prise en charge rapide, coordination administrative, transport funéraire et accompagnement des familles.",
  },
  '/services-entreprises': {
    title: 'Services funéraires pour entreprises et institutions | Universal PF',
    description:
      'Solutions funéraires pour entreprises, assurances et institutions au Maroc : gestion des urgences, rapatriement, coordination multi-sites et interlocuteur unique.',
  },
  '/faq': {
    title: 'FAQ obsèques, rapatriement et assistance funéraire | Universal PF',
    description:
      'Consultez les réponses aux questions fréquentes sur les obsèques, le rapatriement de corps, les délais, les formalités et l’assistance funéraire au Maroc.',
  },
  '/contact': {
    title: 'Contact assistance funéraire Maroc | Universal PF',
    description:
      'Contactez Universal PF pour une assistance funéraire immédiate, un devis ou des informations sur nos services de pompes funèbres au Maroc.',
  },
  '/service/pompes-funebres-musulmanes': {
    title: 'Pompes funèbres musulmanes au Maroc | Universal PF',
    description:
      'Organisation de pompes funèbres musulmanes au Maroc avec respect des rites, transport funéraire, rapatriement et accompagnement complet des familles.',
  },
  '/service/pompes-funebres-non-musulmanes': {
    title: 'Pompes funèbres non musulmanes au Maroc | Universal PF',
    description:
      'Services de pompes funèbres non musulmanes au Maroc : cérémonies, transport funéraire, rapatriement de corps et coordination administrative sur mesure.',
  },
  '/service/fleurs': {
    title: 'Fleurs et hommages funéraires au Maroc | Universal PF',
    description:
      'Commandez des fleurs et compositions funéraires au Maroc avec Universal PF pour accompagner les cérémonies et rendre un hommage digne et soigné.',
  },
  '/service/nettoyage-fleurissement': {
    title: 'Nettoyage et fleurissement de sépultures au Maroc | Universal PF',
    description:
      'Service de nettoyage et fleurissement de tombes au Maroc : entretien des sépultures, désherbage, mise en valeur florale et suivi régulier.',
  },
  '/produits/marbrerie-musulmane': {
    title: 'Marbrerie musulmane au Maroc | Universal PF',
    description:
      'Marbrerie musulmane au Maroc : monuments, gravure, finitions et accompagnement pour des sépultures sobres, durables et respectueuses des rites.',
  },
  '/produits/marbrerie-non-musulmane': {
    title: 'Marbrerie non musulmane au Maroc | Universal PF',
    description:
      'Marbrerie non musulmane au Maroc : monuments funéraires, personnalisation, gravure et conseils pour créer un hommage durable et élégant.',
  },
  '/produits/plaques': {
    title: 'Plaques funéraires au Maroc | Universal PF',
    description:
      'Découvrez notre sélection de plaques funéraires au Maroc avec modèles personnalisables, finitions soignées et accompagnement par Universal PF.',
  },
  '/produits/cercueils-musulmans': {
    title: 'Cercueils musulmans au Maroc | Universal PF',
    description:
      'Catalogue de cercueils musulmans au Maroc avec modèles adaptés aux cérémonies et à la logistique funéraire accompagnée par Universal PF.',
  },
  '/produits/cercueils-non-musulmans': {
    title: 'Cercueils non musulmans au Maroc | Universal PF',
    description:
      'Catalogue de cercueils non musulmans au Maroc avec finitions variées, accompagnement professionnel et coordination funéraire complète.',
  },
}

const PAGE_LABELS = {
  '/': 'Accueil',
  '/qui-sommes-nous': 'Qui sommes-nous',
  '/assistance': 'Assistance immédiate',
  '/services-entreprises': 'Services entreprises',
  '/faq': 'FAQ',
  '/contact': 'Contact',
  '/service/pompes-funebres-musulmanes': 'Pompes funèbres musulmanes',
  '/service/pompes-funebres-non-musulmanes': 'Pompes funèbres non musulmanes',
  '/service/fleurs': 'Fleurs',
  '/service/nettoyage-fleurissement': 'Nettoyage et fleurissement',
  '/produits/marbrerie-musulmane': 'Marbrerie musulmane',
  '/produits/marbrerie-non-musulmane': 'Marbrerie non musulmane',
  '/produits/plaques': 'Plaques funéraires',
  '/produits/cercueils-musulmans': 'Cercueils musulmans',
  '/produits/cercueils-non-musulmans': 'Cercueils non musulmans',
}

const toTitleCase = (value) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const slugToLabel = (slug) => toTitleCase(String(slug || '').replace(/-/g, ' '))

export const getCanonicalPath = (pathname) => {
  const cleanPath = String(pathname || '/').split('?')[0]
  return CANONICAL_PATHS[cleanPath] || cleanPath
}

const getPageLabel = (canonicalPath) => {
  if (PAGE_LABELS[canonicalPath]) return PAGE_LABELS[canonicalPath]

  if (canonicalPath.startsWith('/villes/')) {
    const citySlug = canonicalPath.replace('/villes/', '').trim()
    const normalized = normalizeAgencySlug(citySlug)
    const cityLabel = agenciesBySlug[normalized]?.label || slugToLabel(citySlug)
    return `Pompes funèbres ${cityLabel}`
  }

  return slugToLabel(canonicalPath.split('/').filter(Boolean).pop() || 'Accueil')
}

export const getPageSeo = (pathname) => {
  const canonicalPath = getCanonicalPath(pathname)

  if (SEO_BY_PATH[canonicalPath]) return SEO_BY_PATH[canonicalPath]

  if (canonicalPath.startsWith('/villes/')) {
    const citySlug = canonicalPath.replace('/villes/', '').trim()
    const normalized = normalizeAgencySlug(citySlug)
    const cityLabel = agenciesBySlug[normalized]?.label || slugToLabel(citySlug)
    const citySeo = citySeoBySlug[normalized]

    return {
      title: citySeo?.title || `Pompes funèbres ${cityLabel}${citySeoDefaults.titleSuffix}`,
      description:
        citySeo?.description ||
        `Pompes funèbres ${cityLabel} : assistance 24h/24, obsèques, rapatriement de corps et accompagnement humain au Maroc.`,
    }
  }

  if (canonicalPath.startsWith('/service/') || canonicalPath.startsWith('/produits/')) {
    const serviceSlug = canonicalPath.split('/').filter(Boolean).pop()
    const serviceLabel = slugToLabel(serviceSlug)

    return {
      title: `${serviceLabel} | Universal PF`,
      description: `${serviceLabel} avec Universal PF : accompagnement professionnel, coordination complète et disponibilité 24h/24 au Maroc.`,
    }
  }

  return DEFAULT_SEO
}

const getBreadcrumbList = (canonicalPath) => {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: SITE_URL,
    },
  ]

  if (canonicalPath === '/') return items

  const segments = canonicalPath.split('/').filter(Boolean)

  if (segments[0] === 'villes' && segments[1]) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Agences',
      item: `${SITE_URL}/#nos-agences`,
    })
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: getPageLabel(canonicalPath),
      item: `${SITE_URL}${canonicalPath}`,
    })
    return items
  }

  items.push({
    '@type': 'ListItem',
    position: 2,
    name: getPageLabel(canonicalPath),
    item: `${SITE_URL}${canonicalPath}`,
  })

  return items
}

export const getPageStructuredData = (pathname) => {
  const canonicalPath = getCanonicalPath(pathname)
  const canonicalUrl = `${SITE_URL}${canonicalPath}`
  const seo = getPageSeo(canonicalPath)

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Universal PF',
    url: SITE_URL,
    logo: `${SITE_URL}/logo-clean.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['fr', 'ar'],
        telephone: '+212522491437',
        areaServed: 'MA',
      },
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Universal PF',
    url: SITE_URL,
    inLanguage: 'fr-MA',
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: getBreadcrumbList(canonicalPath),
  }

  if (canonicalPath === '/') {
    return [
      organization,
      website,
      {
        '@context': 'https://schema.org',
        '@type': 'FuneralHome',
        name: 'Universal PF',
        url: SITE_URL,
        logo: `${SITE_URL}/logo-clean.png`,
        telephone: '+212522491437',
        areaServed: 'MA',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'MA',
          addressRegion: 'Casablanca-Settat',
          addressLocality: 'Casablanca',
        },
        serviceArea: {
          '@type': 'Country',
          name: 'Morocco',
        },
      },
    ]
  }

  if (canonicalPath.startsWith('/villes/')) {
    const citySlug = canonicalPath.replace('/villes/', '').trim()
    const normalized = normalizeAgencySlug(citySlug)
    const agency = agenciesBySlug[normalized]
    if (!agency) return [organization, breadcrumb]

    const leadPhone = agency.phones[0] || agency.mobile

    return [
      organization,
      breadcrumb,
      {
        '@context': 'https://schema.org',
        '@type': 'FuneralHome',
        name: `Universal PF - Pompes funèbres ${agency.label}`,
        url: canonicalUrl,
        telephone: leadPhone || undefined,
        areaServed: ['MA', 'Morocco', agency.label, agency.region],
        address: {
          '@type': 'PostalAddress',
          streetAddress: agency.address,
          addressLocality: agency.label,
          addressRegion: agency.region,
          addressCountry: 'MA',
        },
      },
    ]
  }

  if (canonicalPath.startsWith('/service/') || canonicalPath.startsWith('/produits/')) {
    return [
      organization,
      breadcrumb,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: getPageLabel(canonicalPath),
        description: seo.description,
        provider: {
          '@type': 'Organization',
          name: 'Universal PF',
          url: SITE_URL,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Morocco',
        },
        url: canonicalUrl,
      },
    ]
  }

  return [organization, breadcrumb]
}
