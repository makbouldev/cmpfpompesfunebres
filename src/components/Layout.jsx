import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImage from '../assets/cmpflogo.png'

const groupedLinks = [
  {
    label: 'Nos services',
    items: [
      { to: '/services-entreprises', label: 'Services aux Entreprises', featured: true },
      { to: '/pompes-funebres/musulmanes', label: 'Pompes Fun\u00E8bres Musulmanes' },
      { to: '/pompes-funebres/non-musulmanes', label: 'Pompes Fun\u00E8bres Non Musulmanes' },
      { to: '/produits/fleurs', label: 'Fleurs' },
      { to: '/produits/nettoyage-fleurissement', label: 'Nettoyage et Fleurissement' },
      { to: '/produits/marbrerie-musulmane', label: 'Marbrerie Musulmane' },
      { to: '/produits/marbrerie-non-musulmane', label: 'Marbrerie Non Musulmane' },
    ],
  },
  {
    label: 'Catalogues',
    items: [
      { to: '/produits/fleurs', label: 'Fleurs' },
      { to: '/produits/nettoyage-fleurissement', label: 'Nettoyage et Fleurissement' },
      { to: '/produits/marbrerie-musulmane', label: 'Marbrerie Musulmane' },
      { to: '/produits/marbrerie-non-musulmane', label: 'Marbrerie Non Musulmane' },
    ],
  },
  {
    label: 'Nos agences',
    items: [
      { to: '/villes/agadir', label: 'Agadir' },
      { to: '/villes/casablanca', label: 'Casablanca' },
      { to: '/villes/fes', label: 'Fes' },
      { to: '/villes/laayoune', label: 'Laayoune' },
      { to: '/villes/marrakech', label: 'Marrakech' },
      { to: '/villes/meknes', label: 'Meknes' },
      { to: '/villes/nador', label: 'Nador' },
      { to: '/villes/ouarzazate', label: 'Ouarzazate' },
      { to: '/villes/oujda', label: 'Oujda' },
      { to: '/villes/rabat', label: 'Rabat' },
      { to: '/villes/tanger', label: 'Tanger' },
      { to: '/villes/tetouan', label: 'Tetouan' },
    ],
  },
]

function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [openGroupKey, setOpenGroupKey] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const headerRef = useRef(null)
  const location = useLocation()

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
    const revealTargets = document.querySelectorAll(
      [
        '.section',
        '.section img',
        '.card',
        '.price-card',
        '.info-panel',
        '.faq-item',
        '.home-service-card',
        '.footer-card',
        '.home-guide-content',
        '.home-agencies-display',
        '.home-testimonials-grid',
        '.reveal-on-scroll',
      ].join(', '),
    )

    revealTargets.forEach((target, index) => {
      target.classList.add('reveal-ready')
      target.style.setProperty('--reveal-delay', `${(index % 6) * 45}ms`)
    })

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
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 260)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header" ref={headerRef}>
        <div className="container">
          <div className="top-header-bar">
            <div className="top-brand">
              <Link to="/" className="brand-home-link" onClick={closeMenu}>
                <span className="brand-logo">
                  <img src={logoImage} alt="CMPF Assistance" className="brand-logo-img" />
                </span>
                <div className="brand-block">
                  <span className="brand-name">CMPF Assistance</span>
                  <span className="brand-sub">{'CMPF r\u00E9pond \u00E0 tous vos besoins'}</span>
                </div>
              </Link>
            </div>

            <div className="top-contact">
              <a href="tel:+212522491616">
                <span className="phone-inline-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
                  </svg>
                </span>
                +212 522 49 16 16
              </a>
              <a href="tel:+212522207111">
                <span className="phone-inline-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
                  </svg>
                </span>
                +212 522 20 71 11
              </a>
            </div>

            <div className="top-social">
              <a href="#" aria-label="Facebook" className="social-icon-link">
                <span className="social-icon social-facebook" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.4v8h3.1Z" />
                  </svg>
                </span>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon-link">
                <span className="social-icon social-instagram" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm8.2 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8Zm-4 2.7A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm4.9-2.3a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                  </svg>
                </span>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon-link">
                <span className="social-icon social-linkedin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M6.2 8.6A1.8 1.8 0 1 1 6.2 5a1.8 1.8 0 0 1 0 3.6ZM4.7 9.9h3v9.4h-3V9.9Zm5 0h2.8v1.3h.1a3.1 3.1 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7v5h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5h-3V9.9Z" />
                  </svg>
                </span>
              </a>
              <a href="https://wa.me/212661502763" aria-label="WhatsApp" className="social-icon-link">
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
              onClick={() => setIsNavOpen((value) => !value)}
            >
              <span className="mobile-menu-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="main-nav-wrap">
          <div className="container">
            <nav
              id="main-navigation"
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
                to="/assistance"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
                onClick={closeMenu}
              >
                Assistance immédiate
              </NavLink>

              <NavLink
                to="/qui-sommes-nous"
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
                onClick={closeMenu}
              >
                Qui sommes-nous
              </NavLink>

              {groupedLinks.map((group) => (
                <div
                  className={openGroupKey === group.label ? 'nav-group is-open' : 'nav-group'}
                  key={group.label}
                >
                  <button
                    type="button"
                    className="nav-link nav-group-trigger"
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
          href="https://wa.me/212661502763"
          className="floating-action floating-action-whatsapp"
          aria-label="WhatsApp"
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
      </div>

      <footer className="site-footer">
        <div className="container footer-creative">
          <div className="footer-topline">
            <div className="footer-topline-brand">
              <img src={logoImage} alt="CMPF Assistance" />
              <div>
                <h3>CMPF Assistance</h3>
                <p>Service funeraire professionnel, humain et disponible 24h/24 et 7j/7.</p>
              </div>
            </div>
            <div className="footer-topline-actions">
              <a href="tel:+212522491616">Appel immediat</a>
              <a href="https://wa.me/212661502763">WhatsApp</a>
            </div>
          </div>

          <div className="footer-main-grid">
            <div className="footer-card footer-card-brand">
              <h4>A propos</h4>
              <p>
                CMPF accompagne chaque famille avec respect des rites, qualite de service et organisation
                complete.
              </p>
            </div>

            <div className="footer-card">
              <h4>Telephones</h4>
              <a href="tel:+212522491616">+212 522 49 16 16</a>
              <a href="tel:+212522207111">+212 522 20 71 11</a>
              <a href="tel:+212661502763">+212 661 502 763</a>
            </div>

            <div className="footer-card">
              <h4>Contact</h4>
              <a href="mailto:cmpfcasa@cmpfassistance.ma">cmpfcasa@cmpfassistance.ma</a>
              <a href="https://wa.me/212661502763">WhatsApp direct</a>
              <Link to="/contact">Formulaire de contact</Link>
            </div>

            <div className="footer-card">
              <h4>Navigation</h4>
              <Link to="/">Accueil</Link>
              <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-bottom-note">
            <span>CMPF Assistance</span>
            <span>Respect - Discretion - Disponibilite immediate</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout





