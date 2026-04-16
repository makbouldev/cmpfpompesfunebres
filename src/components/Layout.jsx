import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import brandLogo from '../assets/images/logo-clean.png'
import { agenciesBySlug, normalizeAgencySlug } from '../data/agencies'
import { citySeoBySlug, citySeoDefaults } from '../data/citySeo'
import { getCanonicalPath as getSharedCanonicalPath, getPageSeo as getSharedPageSeo, getPageStructuredData, SITE_URL as SHARED_SITE_URL } from '../lib/seo.js'

const DEFAULT_SEO = {
  title: 'Universal PF | Pompes funèbres au Maroc',
  description:
    'Universal PF accompagne les familles 24h/24 et 7j/7 : organisation des obsèques, rapatriement, marbrerie, fleurs et assistance complète au Maroc.',
}

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://pompesfunebresmaroc.com').replace(/\/+$/, '')

const CANONICAL_PATHS = {
  '/pompes-funebres/musulmanes': '/service/pompes-funebres-musulmanes',
  '/pompes-funebres/non-musulmanes': '/service/pompes-funebres-non-musulmanes',
  '/produits/fleurs': '/service/fleurs',
  '/produits/nettoyage-fleurissement': '/service/nettoyage-fleurissement',
  '/service/marbrerie-musulmane': '/produits/marbrerie-musulmane',
  '/service/marbrerie-non-musulmane': '/produits/marbrerie-non-musulmane',
  '/service/services-entreprises': '/services-entreprises',
}

const SEO_BY_PATH = {
  '/': {
    title: 'Universal PF | Pompes funèbres au Maroc',
    description:
      'Pompes funèbres 24h/24 et 7j/7 : assistance immédiate, rapatriement, marbrerie, fleurs et accompagnement complet des familles.',
  },
  '/qui-sommes-nous': {
    title: 'Qui sommes-nous | Universal PF',
    description:
      'Découvrez Universal PF : équipe funéraire professionnelle, organisation rigoureuse et accompagnement humain des familles partout au Maroc.',
  },
  '/assistance': {
    title: 'Assistance immédiate 24/7 | Universal PF',
    description:
      "Assistance décès 24h/24 et 7j/7 avec intervention rapide, coordination administrative et suivi continu par l'équipe Universal PF.",
  },
  '/faq': {
    title: 'FAQ | Universal PF',
    description:
      'Réponses aux questions fréquentes : démarches, délais, rapatriement, tarifs et organisation des obsèques avec Universal PF.',
  },
  '/contact': {
    title: 'Contact | Universal PF',
    description:
      'Contactez Universal PF pour une assistance immédiate, un devis ou des informations sur nos services funéraires au Maroc.',
  },
}

const toTitleCase = (value) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const slugToLabel = (slug) => toTitleCase(String(slug || '').replace(/-/g, ' '))

const getPageSeo = (pathname) => {
  const cleanPath = String(pathname || '/').split('?')[0]
  const canonicalPath = CANONICAL_PATHS[cleanPath] || cleanPath

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
        `Pompes funèbres ${cityLabel} : assistance 24h/24, obsèques, rapatriement et accompagnement humain au Maroc.`,
    }
  }

  if (canonicalPath.startsWith('/service/') || canonicalPath.startsWith('/produits/')) {
    const serviceSlug = canonicalPath.split('/').filter(Boolean).pop()
    const serviceLabel = slugToLabel(serviceSlug)
    return {
      title: `${serviceLabel} | Universal PF`,
      description: `${serviceLabel} avec Universal PF : accompagnement professionnel, coordination complète et disponibilité 24h/24.`,
    }
  }

  return DEFAULT_SEO
}

const setMetaTag = (selector, attrs, content) => {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value))
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const groupedLinks = [
  {
    label: 'Nos services',
    items: [
      { to: '/service/services-entreprises', label: 'Services aux Entreprises', featured: true },
      { to: '/service/pompes-funebres-non-musulmanes', label: 'Pompes Funébres Non Musulmanes' },
      { to: '/service/pompes-funebres-musulmanes', label: 'Pompes Funébres Musulmanes' },
      { to: '/service/fleurs', label: 'Fleurs' },
      { to: '/service/nettoyage-fleurissement', label: 'Nettoyage et Fleurissement' },
      { to: '/service/marbrerie-non-musulmane', label: 'Marbrerie Non Musulmane' },
      { to: '/service/marbrerie-musulmane', label: 'Marbrerie Musulmane' },
    ],
  },
  {
    label: 'Nos agences',
    items: [
      { to: '/villes/agadir', label: 'Pompes funèbres Agadir' },
      { to: '/villes/casablanca', label: 'Pompes funèbres Casablanca' },
      { to: '/villes/dakhla', label: 'Pompes funèbres Dakhla' },
      { to: '/villes/fes', label: 'Pompes funèbres Fes' },
      { to: '/villes/laayoune', label: 'Pompes funèbres Laayoune' },
      { to: '/villes/marrakech', label: 'Pompes funèbres Marrakech' },
      { to: '/villes/meknes', label: 'Pompes funèbres Meknès' },
      { to: '/villes/nador', label: 'Pompes funèbres Nador' },
      { to: '/villes/ouarzazate', label: 'Pompes funèbres Ouarzazate' },
      { to: '/villes/oujda', label: 'Pompes funèbres Oujda' },
      { to: '/villes/rabat', label: 'Pompes funèbres Rabat' },
      { to: '/villes/tanger', label: 'Pompes funèbres Tanger' },
      { to: '/villes/tetouan', label: 'Pompes funèbres Tetouan' },
    ],
  },
]

function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [openGroupKey, setOpenGroupKey] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const headerRef = useRef(null)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const pathname = getSharedCanonicalPath(location.pathname)
    const seo = getSharedPageSeo(pathname)
    const canonicalUrl = `${SHARED_SITE_URL}${pathname}`

    document.title = seo.title
    setMetaTag('meta[name="description"]', { name: 'description' }, seo.description)
    setMetaTag('meta[property="og:title"]', { property: 'og:title' }, seo.title)
    setMetaTag('meta[property="og:description"]', { property: 'og:description' }, seo.description)
    setMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl)
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title)
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    const existingSchema = document.getElementById('site-schema')
    if (existingSchema) existingSchema.remove()

    const schemas = getPageStructuredData(pathname)
    if (schemas?.length) {
      const script = document.createElement('script')
      script.id = 'site-schema'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schemas)
      document.head.appendChild(script)
    }
  }, [location.pathname])

  const closeMenu = () => {
    setIsNavOpen(false)
    setOpenGroupKey('')
  }

  const toggleGroup = (groupKey) => {
    setOpenGroupKey((current) => (current === groupKey ? '' : groupKey))
  }

  useEffect(() => {
    setIsNavOpen(false)
    setOpenGroupKey('')
  }, [location.pathname, location.hash])

  useEffect(() => {
    const setHeaderOffset = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0
      document.documentElement.style.setProperty('--header-offset', `${headerHeight}px`)
    }

    setHeaderOffset()
    window.addEventListener('resize', setHeaderOffset)
    return () => window.removeEventListener('resize', setHeaderOffset)
  }, [isNavOpen])

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!openGroupKey) return undefined

    const handlePointerDown = (event) => {
      if (!(event.target instanceof HTMLElement)) return
      if (event.target.closest('.nav-group')) return
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenGroupKey('')
        return
      }
      setOpenGroupKey('')
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [openGroupKey])

  useEffect(() => {
    const revealSelectors = [
      'main .reveal-on-scroll',
      'main .section > .container',
      'main .card',
      'main .price-card',
      'main .info-panel',
      'main .faq-item',
      'main .home-service-card',
      'main .home-guide-content',
      'main .home-agencies-display',
      'main .home-testimonials-grid',
      'main .city-card',
      'main .plaques-card',
      'main .plaques-side-panel',
      'main .mf-banner',
      'main .mf-rich-wrap',
      '.site-footer .footer-card',
    ]

    const uniqueTargets = new Set()
    revealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((target) => {
        if (!target.classList.contains('reveal-skip')) {
          uniqueTargets.add(target)
        }
      })
    })

    const revealTargets = Array.from(uniqueTargets)

    revealTargets.forEach((target, index) => {
      target.classList.remove('reveal-visible')
      target.classList.add('reveal-ready')
      target.style.setProperty('--reveal-delay', `${(index % 6) * 45}ms`)
    })

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('reveal-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    )

    revealTargets.forEach((target) => observer.observe(target))
    const safetyTimer = window.setTimeout(() => {
      // Safari/Android can sometimes fail to fire intersection callbacks; never leave pages hidden.
      revealTargets.forEach((target) => target.classList.add('reveal-visible'))
    }, 2200)

    return () => {
      window.clearTimeout(safetyTimer)
      observer.disconnect()
    }
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 260)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const blockImageContextMenu = (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('img')) {
        event.preventDefault()
      }
    }

    const blockImageDrag = (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('img')) {
        event.preventDefault()
      }
    }

    const blockShortcuts = (event) => {
      const key = String(event.key || '').toLowerCase()
      if ((event.ctrlKey || event.metaKey) && (key === 's' || key === 'u')) {
        event.preventDefault()
      }
    }

    document.addEventListener('contextmenu', blockImageContextMenu, true)
    document.addEventListener('dragstart', blockImageDrag, true)
    document.addEventListener('keydown', blockShortcuts, true)

    return () => {
      document.removeEventListener('contextmenu', blockImageContextMenu, true)
      document.removeEventListener('dragstart', blockImageDrag, true)
      document.removeEventListener('keydown', blockShortcuts, true)
    }
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header" ref={headerRef}>
        <div className="container">
          <div className="top-header-bar">
            <div className="top-brand">
              <Link to="/" className="brand-home-link" onClick={closeMenu}>

                <div className="brand-logo">
                  <img src={brandLogo} alt="Universal PF" className="brand-logo-img" />
                </div>
              </Link>
            </div>

            <div className="top-contact">
              <a href="tel:+212522491437">
                <span className="phone-inline-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
                  </svg>
                </span>
                +212 522491437
              </a>
              <a href="tel:+212666826724">
                <span className="phone-inline-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
                  </svg>
                </span>
                +212 666-826724
              </a>
            </div>

            <div className="top-social">
              <a href="https://www.facebook.com/CMPF.officiel?mibextid=ZbWKwL" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="social-icon-link">
                <span className="social-icon social-facebook" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1Z" />
                  </svg>
                </span>
              </a>
              <a href="https://www.instagram.com/cmpf.ma_ambulance_depannage/?igsh=MWh1NmZsbXZ1dHVsOQ#" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="social-icon-link">
                <span className="social-icon social-instagram" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm8.2 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8Zm-4 2.7A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm4.9-2.3a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                  </svg>
                </span>
              </a>
              <a href="https://www.linkedin.com/company/cmpfcmpf" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="social-icon-link">
                <span className="social-icon social-linkedin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M6.2 8.6A1.8 1.8 0 1 1 6.2 5a1.8 1.8 0 0 1 0 3.6ZM4.7 9.9h3v9.4h-3V9.9Zm5 0h2.8v1.3h.1a3.1 3.1 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7v5h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5h-3V9.9Z" />
                  </svg>
                </span>
              </a>
              <a href="https://wa.me/212666826724" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="social-icon-link">
                <span className="social-icon social-whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 3.3a8.7 8.7 0 0 0-7.5 13l-1 4 4.1-1a8.7 8.7 0 1 0 4.4-16Zm0 15.8a7.1 7.1 0 0 1-3.6-1l-.3-.2-2.5.6.7-2.4-.2-.4a7.1 7.1 0 1 1 5.9 3.4Zm3.9-5.3-.5-.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.6-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.4.1-.5l.3-.4.2-.3c.1-.1.1-.3 0-.4l-.7-1.8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.6 2.5 1 2.5.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
                  </svg>
                </span>
              </a>
            </div>

            <button
              type="button"
              className={isNavOpen ? 'mobile-menu-btn is-open' : 'mobile-menu-btn'}
              aria-expanded={isNavOpen}
              aria-controls="main-navigation"
              aria-label={isNavOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => {
                setIsNavOpen((current) => {
                  const next = !current
                  if (!next) {
                    setOpenGroupKey('')
                  }
                  return next
                })
              }}
            >
              <span className="mobile-menu-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="main-nav-wrap">
          <div className="container">
            <nav
              id="main-navigation"
              ref={navRef}
              className={isNavOpen ? 'main-nav is-open' : 'main-nav'}
              aria-label="Navigation principale"
            >
              
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
                onClick={closeMenu}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/qui-sommes-nous"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
                onClick={closeMenu}
              >
                Qui sommes-nous
              </NavLink>
              <NavLink
                to="/assistance"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
                onClick={closeMenu}
              >
                Assistance immédiate
              </NavLink>

              

              {groupedLinks.map((group) => (
                <div
                  className={[
                    'nav-group',
                    openGroupKey === group.label ? 'is-open' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={group.label}
                >
                  <button
                    type="button"
                    className="nav-link nav-group-trigger"
                    aria-expanded={openGroupKey === group.label}
                    onClick={() => toggleGroup(group.label)}
                  >
                    {group.label} <span className="nav-caret" aria-hidden="true" />
                  </button>
                  <div className="dropdown-menu">
                    {group.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={item.featured ? 'dropdown-item is-featured' : 'dropdown-item'}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link nav-link-contact nav-link-contact-active'
                    : 'nav-link nav-link-contact'
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <div className="site-floating-actions" aria-label="Actions rapides">
        <button
          type="button"
          className={showScrollTop ? 'floating-action floating-action-top is-visible' : 'floating-action floating-action-top'}
          aria-label="Retour en haut"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12 5.6 5.8 11.8l1.4 1.4 3.8-3.8V19h2V9.4l3.8 3.8 1.4-1.4L12 5.6Z" />
          </svg>
        </button>
        <a
          href="https://wa.me/212666826724"
          className="floating-action floating-action-whatsapp"
          aria-label="WhatsApp"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12 3.3a8.7 8.7 0 0 0-7.5 13l-1 4 4.1-1a8.7 8.7 0 1 0 4.4-16Zm0 15.8a7.1 7.1 0 0 1-3.6-1l-.3-.2-2.5.6.7-2.4-.2-.4a7.1 7.1 0 1 1 5.9 3.4Zm3.9-5.3-.5-.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.6-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.4.1-.5l.3-.4.2-.3c.1-.1.1-.3 0-.4l-.7-1.8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.6 2.5 1 2.5.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
          </svg>
        </a>
        <a
          href="tel:+212522491616"
          className="floating-action floating-action-call"
          aria-label="Appel"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
          </svg>
        </a>
        <a
          href="tel:+212522491437"
          className="floating-action floating-action-fixed"
          aria-label="Telephone fixe"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M4.2 7.6h15.6v2H4.2z" />
            <path d="M6 5.6h12v1.4H6zM6 17h12v1.4H6z" />
            <path d="M8.2 9.6h7.6l1.3 3.8V17H7v-3.6l1.2-3.8Zm2.1 1.5a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm3.4 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm-3.4 2.3a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm3.4 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z" />
            <path d="M6 6.3c.6-1.3 2.2-2.1 6-2.1s5.4.8 6 2.1h-1.8c-.4-.5-1.4-.9-4.2-.9-2.8 0-3.8.4-4.2.9H6Z" />
          </svg>
        </a>
      </div>

      <footer className="site-footer">
        <div className="container footer-creative">
          <div className="footer-topline">
            <div className="footer-topline-brand">
              <img src={brandLogo} alt="Universal PF" />
              <p>Service funéraire professionnel, humain et disponible 24h/24 et 7j/7.</p>
            </div>
            <div className="footer-topline-actions">
              <a href="tel:+212522491616">Appel immediat</a>
              <a href="https://wa.me/212666826724" target="_blank" rel="noreferrer noopener">WhatsApp</a>
            </div>
          </div>

          <div className="footer-main-grid">
            <div className="footer-card footer-card-brand">
              <h4>A propos</h4>
              <p>
                Universal PF accompagne chaque famille avec respect des rites, qualité de service et organisation complète
              </p>
            </div>

            <div className="footer-card">
              <h4>Telephones</h4>
              <a href="tel:+212522491437">+212 5 22 49 14 37</a>
              <a href="tel:+212666826724">+212 6 66 82 67 24</a>
            </div>

            <div className="footer-card">
              <h4>Contact</h4>
              <a href="mailto:universalpfm@gmail.com">universalpfm@gmail.com</a>
              <a href="https://wa.me/212666826724" target="_blank" rel="noreferrer noopener">WhatsApp direct</a>
              <Link to="/contact">Formulaire de contact</Link>
            </div>

            <div className="footer-card">
              <h4>Navigation</h4>
              <Link to="/">Accueil</Link>
              <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-card">
              <h4>Reseaux sociaux</h4>
              <div className="footer-social-icons">
                <a href="https://www.facebook.com/CMPF.officiel?mibextid=ZbWKwL" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="social-icon-link">
                  <span className="social-icon social-facebook" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1Z" />
                    </svg>
                  </span>
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/cmpf.ma_ambulance_depannage/?igsh=MWh1NmZsbXZ1dHVsOQ#" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="social-icon-link">
                  <span className="social-icon social-instagram" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm8.2 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8Zm-4 2.7A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm4.9-2.3a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                    </svg>
                  </span>
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/cmpfcmpf" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="social-icon-link">
                  <span className="social-icon social-linkedin" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path d="M6.2 8.6A1.8 1.8 0 1 1 6.2 5a1.8 1.8 0 0 1 0 3.6ZM4.7 9.9h3v9.4h-3V9.9Zm5 0h2.8v1.3h.1a3.1 3.1 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7v5h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5h-3V9.9Z" />
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
              <a href="https://www.youtube.com/channel/UC92V4I_n53gBfTColHfXBlw" target="_blank" rel="noreferrer noopener">YouTube</a>
              <a href="https://x.com/CMPF1950" target="_blank" rel="noreferrer noopener">X</a>
            </div>
          </div>

          <div className="footer-bottom-note">
            <span>Universal PF </span>
            <span>Respect - Discretion - Disponibilite immédiate</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout




