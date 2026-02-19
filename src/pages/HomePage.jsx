import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import transportMusulmanes from '../assets/1.png'
import transportNonMusulmanes from '../assets/2.png'
import imageFleurs from '../assets/3.png'
import imagePlaques from '../assets/4.png'
import imageMarbrerie from '../assets/5.png'
import imageMarbrerieMusulmane from '../assets/6.png'
import imageEquipeA from '../assets/7.webp'
import imageEquipeB from '../assets/8.jpg'
import imageNettoyage from '../assets/9.webp'
import imageTransportMusulman from '../assets/10.jpeg'
import imageInterieurCorbillard from '../assets/11.jpg'
import imageFlotteCMPF from '../assets/12.jpg'
import imageFleursConvoi from '../assets/13.jpg'
import imageCimetiere from '../assets/14.jpg'
import imageCercueilsEquipe from '../assets/2.png'
import imageTransportCercueil from '../assets/18.jpg'
import imagePreparationEquipe from '../assets/1.png'
import { agencies } from '../data/agencies'

const heroSlides = [
  {
    titleTop: 'Nos services',
    titleMain: 'Pompes Funèbres Musulmanes Avec Accompagnement Complet',
    description:
      'Prise en charge complete des rites musulmans avec accompagnement humain et discret.',
    cta: 'Service Musulman',
    to: '/pompes-funebres/musulmanes',
    image: transportMusulmanes,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Pompes Funèbres non Musulmanes Pour Toutes Les Familles',
    description:
      'Organisation de ceremonies civiles et religieuses avec un interlocuteur unique.',
    cta: 'Service non musulman',
    to: '/pompes-funebres/non-musulmanes',
    image: transportNonMusulmanes,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Fleurs Funeraires Et Compositions Personnalisees',
    description:
      'Compositions florales, gerbes et couronnes adaptees a toutes les ceremonies.',
    cta: 'Voir Fleurs',
    to: '/produits/fleurs',
    image: imageFleurs,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Plaques Funeraires Elegantes Et Personnalisees',
    description:
      'Plaques funeraires personnalisees avec differents styles, couleurs et finitions.',
    cta: 'Voir Plaques',
    to: '/produits/plaques',
    image: imagePlaques,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Marbrerie Musulmanes Avec Finitions Sur Mesure',
    description:
      'Realisation de monuments funeraires musulmans dans le respect des normes et des rites.',
    cta: 'Marbrerie musulmane',
    to: '/produits/marbrerie-musulmane',
    image: imageMarbrerieMusulmane,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Marbrerie non Musulmanes Pour Ceremonies Civiles',
    description:
      'Solutions de marbrerie sur mesure pour ceremonies non musulmanes et civiles.',
    cta: 'Marbrerie non musulmane',
    to: '/produits/marbrerie-non-musulmane',
    image: imageMarbrerie,
  },
]

const servicesHighlights = [
  {
    title: 'Urgence 24h/24 en moins de quelques minutes',
    text: "Des le premier appel, un conseiller declenche immediatement l'intervention et la prise en charge.",
    image: imageFlotteCMPF,
    to: '/assistance',
  },
  {
    title: 'Respect total des rites et des volontes',
    text: 'Organisation musulmane et non musulmane avec un protocole clair, discret et conforme.',
    image: imageTransportMusulman,
    to: '/pompes-funebres/musulmanes',
  },
  {
    title: 'Transparence des tarifs sans surprise',
    text: 'Devis detaille, explications simples et accompagnement budgetaire adapte a chaque famille.',
    image: imageEquipeB,
    to: '/contact',
  },
  {
    title: 'Un seul interlocuteur de A a Z',
    text: 'Administratif, transport, ceremonie et coordination complete avec un suivi humain permanent.',
    image: imageEquipeA,
    to: '/produits/cercueils-musulmans',
  },
]

const servicesOverview = [
  {
    icon: 'pulse',
    title: 'Organisation complete des obseques',
    text: "Prise en charge administrative, coordination des intervenants et suivi detaille de chaque etape.",
  },
  {
    icon: 'timer',
    title: 'Ceremonies musulmanes et non musulmanes',
    text: 'Preparation et execution dans le respect des rites, des valeurs familiales et des obligations legales.',
  },
  {
    icon: 'shield',
    title: 'Catalogue funeraire personnalise',
    text: 'Cercueils, fleurs, plaques et marbrerie avec des solutions adaptees a votre budget.',
  },
  {
    icon: 'team',
    title: 'Assistance immediate 24h/24',
    text: 'Un conseiller disponible a tout moment pour orienter la famille et lancer les procedures sans delai.',
  },
]

const careProcessSteps = [
  {
    title: '1. Appel et orientation immediate',
    text: "Un conseiller CMPF repond tout de suite, evalue l'urgence et declenche la prise en charge 24h/24.",
  },
  {
    title: '2. Dossier et coordination administrative',
    text: 'Nous rassemblons les pieces, gerons les formalites et coordonnons assurance, consulat et administrations.',
  },
  {
    title: '3. Transport, rituels et ceremonie',
    text: 'Organisation du transport, cercueil adapte et preparation complete de la ceremonie.',
  },
  {
    title: '4. Inhumation et suivi famille',
    text: 'Presence sur le terrain jusqu a l inhumation, puis suivi post-obseques avec un interlocuteur unique.',
  },
]

const repatriementPillars = [
  {
    title: 'Equipe de coordination disponible 24h/24',
    text: 'Back-office CMPF mobilise en continu pour traiter les dossiers urgents et coordonner chaque intervention.',
    image: imageEquipeA,
  },
  {
    title: 'Suivi administratif en temps reel',
    text: 'Gestion des pieces, echanges avec consulat, assurance et autorites pour accelerer la prise en charge.',
    image: imageEquipeB,
  },
  {
    title: 'Nettoyage et fleurissement des sepultures',
    text: 'Service dedie pour maintenir les sepultures propres, dignes et soignees avec bilan photo avant/apres.',
    image: imageNettoyage,
  },
]

const homeMetrics = [
  { value: '24/7', label: 'Disponibilite continue', icon: 'clock', target: 24, suffix: '/7' },
  { value: '12', label: 'Agences au Maroc', icon: 'pin', target: 12, suffix: '' },
  { value: '75ans+', label: "Annees d'experience", icon: 'calendar', target: 75, suffix: 'ans+' },
  { value: '300+', label: 'Transferts de depouilles', icon: 'transport', target: 300, suffix: '+' },
]

const clientReviews = [
  {
    name: 'Famille B.',
    city: 'Casablanca',
    text: "Service tres professionnel, equipe respectueuse et disponible a tout moment. Tout a ete bien organise.",
    avatar: 'https://i.pravatar.cc/160?img=32',
  },
  {
    name: 'M. Rahimi',
    city: 'Rabat',
    text: "Intervention rapide et accompagnement humain. Les demarches ont ete simplifiees du debut a la fin.",
    avatar: 'https://i.pravatar.cc/160?img=12',
  },
  {
    name: 'Mme Ait Ali',
    city: 'Marrakech',
    text: "Un grand merci a CMPF Assistance pour la qualite du suivi et le respect complet de nos volontes.",
    avatar: 'https://i.pravatar.cc/160?img=47',
  },
  {
    name: 'Famille K.',
    city: 'Agadir',
    text: "Accueil tres humain, assistance rapide et equipe serieuse. Nous avons ete bien accompagnes.",
    avatar: 'https://i.pravatar.cc/160?img=21',
  },
  {
    name: 'M. Idrissi',
    city: 'Tanger',
    text: "Un service de qualite, tres bien organise et transparent. Merci pour votre professionnalisme.",
    avatar: 'https://i.pravatar.cc/160?img=59',
  },
  {
    name: 'Mme Zahra',
    city: 'Fes',
    text: "CMPF a gere toutes les formalites avec clarte et respect. Equipe tres disponible.",
    avatar: 'https://i.pravatar.cc/160?img=5',
  },
]

const homeFaqItems = [
  {
    question: 'Quel est le delai pour organiser les obseques ?',
    answer:
      'Generalement entre 24h et 6 jours selon les obligations legales, administratives et familiales.',
  },
  {
    question: 'Pouvez-vous intervenir immediatement en cas d urgence ?',
    answer:
      'Oui, nos equipes sont disponibles 24h/24 et 7j/7 pour lancer la prise en charge des le premier appel.',
  },
  {
    question: 'Organisez-vous les obseques musulmanes et non musulmanes ?',
    answer:
      'Oui, nous accompagnons les familles pour les rites musulmans et non musulmans dans le respect des volontes.',
  },
  {
    question: 'Prenez-vous en charge les formalites administratives ?',
    answer:
      'Oui, nous gerons les declarations, autorisations et documents necessaires avec un suivi clair.',
  },
  {
    question: 'Proposez-vous des cercueils, plaques, fleurs et marbrerie ?',
    answer:
      'Oui, notre catalogue inclut cercueils, fleurs, plaques et marbrerie avec plusieurs options de personnalisation.',
  },
  {
    question: 'Intervenez-vous dans toutes les villes du Maroc ?',
    answer:
      'Nous couvrons les principales villes du Maroc via notre reseau d agences et de coordination locale.',
  },
  {
    question: 'Peut-on vous contacter par WhatsApp ?',
    answer: 'Oui, vous pouvez nous joindre rapidement par WhatsApp pour une orientation immediate.',
  },
  {
    question: 'Comment obtenir un devis rapide ?',
    answer:
      'Contactez CMPF par telephone, WhatsApp ou formulaire: nous vous envoyons un devis clair et detaille rapidement.',
  },
]

const homeGuideTabs = [
  {
    key: 'coordination',
    label: 'Coordination 24/7',
    title: 'Une cellule active 24h/24 pour piloter chaque intervention',
    intro:
      "Des le premier appel, notre equipe de coordination organise les priorites, active les intervenants et suit chaque etape en temps reel.",
    points: [
      'Dispatch immediat des equipes selon urgence et localisation.',
      'Suivi en continu des dossiers administratifs et operationnels.',
      'Communication claire avec la famille a chaque phase.',
    ],
    to: '/assistance',
    cta: 'Voir la coordination',
    image: imageEquipeA,
  },
  {
    key: 'transport',
    label: 'Transport geolocalise',
    title: 'Transport securise avec suivi GPS et tracabilite',
    intro:
      "Nos moyens logistiques permettent d'assurer les transferts avec precision, ponctualite et respect total de la dignite.",
    points: [
      'Suivi geolocalise des trajets pour une meilleure coordination.',
      'Transport local, national et international selon le besoin.',
      'Preparation logistique complete avant ceremonie et inhumation.',
    ],
    to: '/pompes-funebres/musulmanes',
    cta: 'Voir le transport',
    image: imageTransportCercueil,
  },
  {
    key: 'assurance',
    label: 'Assurance et dossiers',
    title: 'Gestion assurance, assistance et consulat sans blocage',
    intro:
      "Nos conseillers prennent en charge les echanges techniques et documentaires pour accelerer la prise en charge globale.",
    points: [
      'Coordination avec assurance, assistance et institutions partenaires.',
      'Verification des pieces et suivi des autorisations necessaires.',
      'Interface unique entre famille, administration et operateurs terrain.',
    ],
    to: '/contact',
    cta: 'Voir la prise en charge',
    image: imageEquipeB,
  },
]

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [animatedMetrics, setAnimatedMetrics] = useState(() => homeMetrics.map(() => 0))
  const [selectedAgencySlug, setSelectedAgencySlug] = useState(agencies[0].slug)
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState(false)
  const [openHomeFaqIndex, setOpenHomeFaqIndex] = useState(0)
  const [reviewsStartIndex, setReviewsStartIndex] = useState(0)
  const [activeGuideTab, setActiveGuideTab] = useState(homeGuideTabs[0].key)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const duration = 1400
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOut = 1 - (1 - progress) ** 3

      setAnimatedMetrics(homeMetrics.map((metric) => Math.round(metric.target * easeOut)))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    const rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const formatMetricValue = (metric, index) => {
    const count = animatedMetrics[index] ?? 0
    return `${count}${metric.suffix ?? ''}`
  }

  const currentSlide = heroSlides[activeSlide]
  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }
  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  }
  const REVIEWS_VISIBLE = 3
  const reviewsMaxStart = Math.max(0, clientReviews.length - REVIEWS_VISIBLE)
  const visibleReviews = clientReviews.slice(reviewsStartIndex, reviewsStartIndex + REVIEWS_VISIBLE)
  const selectedAgency =
    agencies.find((city) => city.slug === selectedAgencySlug) ?? agencies[0]
  const activeGuide = homeGuideTabs.find((tab) => tab.key === activeGuideTab) ?? homeGuideTabs[0]
  const selectedAgencyMainPhone = selectedAgency.phones[0] ?? '+212 5 22 49 16 16'
  const selectedAgencyPhoneHref = `tel:${selectedAgencyMainPhone.replace(/\s+/g, '')}`
  const selectedAgencyMobileDigits = selectedAgency.mobile.replace(/\D/g, '')
  const selectedAgencyWhatsappNumber = selectedAgencyMobileDigits.startsWith('0')
    ? `212${selectedAgencyMobileDigits.slice(1)}`
    : selectedAgencyMobileDigits
  const selectedAgencyWhatsappHref = `https://wa.me/${selectedAgencyWhatsappNumber}?text=${encodeURIComponent(
    `Bonjour CMPF, je souhaite une assistance a ${selectedAgency.label}.`,
  )}`
  const renderServiceIcon = (icon) => {
    if (icon === 'pulse') {
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M3 12h4l2-4 3 8 2-4h7" />
        </svg>
      )
    }
    if (icon === 'timer') {
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <circle cx="12" cy="13" r="7" />
          <path d="M12 13V9m0-5h3M9 4h6" />
        </svg>
      )
    }
    if (icon === 'shield') {
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 4 6 6.3v5c0 3.8 2.4 6.9 6 8.4 3.6-1.5 6-4.6 6-8.4v-5L12 4Z" />
          <path d="m9.5 12.1 1.8 1.8 3.3-3.4" />
        </svg>
      )
    }
    return (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <circle cx="9" cy="10" r="2.2" />
        <circle cx="15.2" cy="10.8" r="1.8" />
        <path d="M5.2 17c0-2.1 1.8-3.7 4-3.7s4 1.6 4 3.7" />
        <path d="M13 17c.2-1.4 1.2-2.6 3-2.6 1.6 0 2.8 1.1 2.8 2.6" />
      </svg>
    )
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div
            key={activeSlide}
            className="hero-banner"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(3, 28, 66, 0.78), rgba(8, 56, 110, 0.34)), url('${currentSlide.image}')`,
            }}
          >
            <div className="hero-banner-content">
              <h1 className="hero-info-title">{currentSlide.titleMain}</h1>
              <p className="hero-info-text">{currentSlide.description}</p>
              <div className="hero-highlight hero-info-badge">
                <span className="hero-highlight-icon">!</span>
                Service d'urgence 24h/24 - Intervention immediate
              </div>

              <div className="hero-actions hero-actions-main hero-info-actions">
                <a href="tel:+212522491616" className="btn hero-btn-call">
                  Appel immediat
                </a>
                <a href="https://wa.me/212661502763" className="btn hero-btn-wa">
                  WhatsApp immediat
                </a>
              </div>
              <div className="hero-actions hero-actions-secondary hero-info-actions">
                <Link to={currentSlide.to} className="btn hero-btn-view">
                  Voir services
                </Link>
              </div>
            </div>

            <div className="hero-slider-controls">
              <div className="hero-nav-buttons">
                <button
                  type="button"
                  className="hero-nav-btn"
                  aria-label="Slide precedente"
                  onClick={goToPrevSlide}
                >
                  &#8249;
                </button>
              </div>
              <div className="hero-dots">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.titleMain}
                    type="button"
                    aria-label={`Afficher ${slide.titleMain}`}
                    className={index === activeSlide ? 'hero-dot hero-dot-active' : 'hero-dot'}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
              <div className="hero-nav-buttons">
                <button
                  type="button"
                  className="hero-nav-btn"
                  aria-label="Slide suivante"
                  onClick={goToNextSlide}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-services-intro-section">
        <div className="container home-services-intro-wrap">
          <div className="home-services-intro-layout">
            <div className="home-services-intro-copy reveal-on-scroll">
              <div className="home-services-intro-head">
                <span>Nos services</span>
                <h2>Un accompagnement funeraire clair, humain et professionnel</h2>
                <p>
                  CMPF Assistance propose une prise en charge complete pour soulager les familles,
                  avec une organisation rapide et une qualite de service constante.
                </p>
                <p>
                  Notre equipe coordonne chaque intervention avec rigueur, discretion et reactivite
                  pour garantir un service fiable a chaque famille.
                </p>
              </div>

              <div className="home-services-intro-cards">
                {servicesOverview.map((item) => (
                  <article key={item.title} className="home-services-intro-card card">
                    <span className="home-services-intro-card-icon">{renderServiceIcon(item.icon)}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="home-services-intro-images reveal-on-scroll">
              <div className="home-services-intro-image home-services-intro-image-main reveal-on-scroll">
                <img src={imagePreparationEquipe} alt="Services funeraires CMPF" />
              </div>
              <div className="home-services-intro-image home-services-intro-image-overlay reveal-on-scroll">
                <img src={imageCercueilsEquipe} alt="Accompagnement des familles" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-process-section">
        <div className="container home-process-wrap reveal-on-scroll">
          <div className="home-process-head">
            <span>Parcours CMPF</span>
            <h2>Une methode claire, rapide et rassurante pour chaque famille</h2>
          </div>
          <div className="home-process-stage">
            <div className="home-process-track" aria-hidden="true" />
            <div className="home-process-grid">
              {careProcessSteps.map((step, index) => {
                const stepNumber = String(index + 1).padStart(2, '0')
                const stepTitle = step.title.replace(/^\d+\.\s*/, '')

                return (
                  <article
                    key={step.title}
                    className="home-process-card card reveal-on-scroll"
                    style={{ '--step-index': index }}
                  >
                    <span className="home-process-step-badge">{stepNumber}</span>
                    <span className="home-process-step-label">Etape {stepNumber}</span>
                    <h3>{stepTitle}</h3>
                    <p>{step.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section home-guide-section">
        <div className="container home-guide-wrap reveal-on-scroll">
          <div className="home-guide-head">
            <h2>
              Les coulisses CMPF: <em>precision, reactivite et controle terrain</em>
            </h2>
            <p>
              Coordination interne, transport geolocalise, gestion assurance et suivi dossier:
              toute la chaine operationnelle est pilotee en continu.
            </p>
          </div>

          <div className="home-guide-tabs" role="tablist" aria-label="Guides funeraires">
            {homeGuideTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeGuide.key === tab.key}
                className={activeGuide.key === tab.key ? 'home-guide-tab is-active' : 'home-guide-tab'}
                onClick={() => setActiveGuideTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="home-guide-content" key={activeGuide.key}>
            <div className="home-guide-image">
              <img src={activeGuide.image} alt={activeGuide.label} />
            </div>
            <div className="home-guide-text">
              <h3>{activeGuide.title}</h3>
              <p>{activeGuide.intro}</p>
              <ul>
                {activeGuide.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link to={activeGuide.to} className="home-guide-btn">
                {activeGuide.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-creative-section">
        <div className="container home-services-wrap">
          <div className="home-creative-grid">
            <div className="home-creative-content reveal-on-scroll">
              <h2>Rapatriement de corps et accompagnement des familles de A a Z</h2>
              <p className="home-creative-lead">
                CMPF prend en charge les etapes sensibles: accueil des familles, liaison avec les
                autorites, traduction documentaire et organisation logistique complete.
              </p>
              <div className="home-creative-cards">
                {repatriementPillars.map((item) => (
                  <article key={item.title} className="home-feature-card reveal-on-scroll">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="home-creative-visual reveal-on-scroll">
              <div className="home-creative-main-image">
                <img src={imageEquipeA} alt="Equipe CMPF en coordination" />
              </div>
              <div className="home-creative-side-image">
                <img src={imageEquipeB} alt="Bureau administratif CMPF" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-services-showcase">
        <div className="container home-services-wrap">
          <h2>Pourquoi choisir CMPF Assistance</h2>
          <p className="home-services-intro">
            Des services essentiels presentes de maniere claire pour aider les familles a choisir rapidement.
          </p>
          <div className="home-services-layout">
            <div className="home-services-visual">
              <div className="home-services-visual-main">
                <img src={imageTransportMusulman} alt="Intervention CMPF" />
              </div>
              <div className="home-services-visual-side">
                <img src={imageFleursConvoi} alt="Services funeraires" />
              </div>
            </div>

            <div className="home-services-grid">
              {servicesHighlights.map((item) => (
                <article key={item.title} className="home-service-card">
                  <span className="home-service-thumb">
                    <img src={item.image} alt={item.title} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.to} className="home-service-link">
                    En savoir plus
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section home-metrics-section">
        <div className="container home-metrics-grid">
          {homeMetrics.map((item, index) => (
            <article key={item.label} className="home-metric-item">
              <span className="home-metric-icon" aria-hidden="true">
                {item.icon === 'clock' && (
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v5l3 2" />
                  </svg>
                )}
                {item.icon === 'pin' && (
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
                    <circle cx="12" cy="11" r="2.3" />
                  </svg>
                )}
                {item.icon === 'team' && (
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <circle cx="9" cy="10" r="2.4" />
                    <circle cx="15.4" cy="10.8" r="2" />
                    <path d="M4.8 17c0-2.1 1.8-3.8 4.2-3.8s4.2 1.7 4.2 3.8" />
                    <path d="M13.1 17c.1-1.5 1.3-2.8 3.2-2.8 1.8 0 3 1.2 3 2.8" />
                  </svg>
                )}
                {item.icon === 'shield' && (
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 3.8 6 6v4.7c0 4 2.4 7.4 6 8.9 3.6-1.5 6-4.9 6-8.9V6l-6-2.2Z" />
                    <path d="m9.3 12.1 1.9 1.9 3.4-3.6" />
                  </svg>
                )}
                {item.icon === 'calendar' && (
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <rect x="4" y="5.8" width="16" height="14" rx="2" />
                    <path d="M8 4v3M16 4v3M4 10h16" />
                  </svg>
                )}
                {item.icon === 'transport' && (
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M3.5 7.5h11v8.5h-11zM14.5 10h3.6l2.4 2.7v3.3h-6z" />
                    <circle cx="7" cy="18" r="1.8" />
                    <circle cx="17.6" cy="18" r="1.8" />
                  </svg>
                )}
              </span>
              <strong>{formatMetricValue(item, index)}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-concept-section">
        <div className="container home-concept-layout">
          <div className="home-concept-text home-concept-text-card">
            <span className="home-concept-eyebrow">Qualite de service</span>
            <h2>Une methode claire pour accompagner chaque famille</h2>
            <p>
              Notre priorite est la qualite de service: ecoute, rapidite d'execution, respect des rites
              et suivi humain a chaque etape.
            </p>
            <p>
              Nous appliquons une organisation rigoureuse pour garantir une prise en charge
              professionnelle, transparente et rassurante.
            </p>
            <div className="home-concept-points">
              <span>Qualite de service controlee</span>
              <span>Equipe experimentee et coordonnee</span>
              <span>Intervention rapide et securisee</span>
            </div>
            <div className="home-concept-actions">
              <Link to="/assistance" className="btn btn-primary">
                Demander une intervention
              </Link>
              <Link to="/contact" className="btn home-trust-btn-secondary">
                Contacter CMPF
              </Link>
            </div>
          </div>

          <div className="home-concept-images">
            <div className="home-concept-image home-concept-image-top">
              <img src={imageCimetiere} alt="Qualite de service CMPF" />
            </div>
            <div className="home-concept-image home-concept-image-bottom">
              <img src={imageNettoyage} alt="Nettoyage et entretien des sepultures" />
            </div>
          </div>
        </div>
      </section>

      <section className="section home-cta-section">
        <div className="container home-cta-wrap reveal-on-scroll">
          <div className="home-cta-media">
            <img src={imageInterieurCorbillard} alt="Equipe CMPF Assistance" />
          </div>
          <div className="home-cta-content">
            <span>Engagement CMPF</span>
            <h2>Qualite de service, dignite et respect total des volontes familiales</h2>
            <p>
              Nous unifions assistance funeraire musulmane et non musulmane, marbrerie, fleurs et
              coordination administrative dans un meme niveau de qualite.
            </p>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn hero-btn-call">
                Demander un conseiller
              </Link>
              <a href="tel:+212522491616" className="btn hero-btn-view">
                Appeler CMPF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="nos-agences" className="section home-agencies-section">
        <div className="container home-agencies-wrap reveal-on-scroll">
          <div className="home-agencies-head">
            <span>Nos agences</span>
            <h2>Nos villes de couverture</h2>
            <p>
              Selectionnez votre ville pour afficher ses informations et localiser l'agence.
            </p>
          </div>

          <div className="home-agencies-buttons">
            {agencies.map((city) => (
              <button
                key={city.slug}
                type="button"
                className={selectedAgency.slug === city.slug ? 'home-agency-btn is-active' : 'home-agency-btn'}
                onClick={() => setSelectedAgencySlug(city.slug)}
              >
                {city.label}
              </button>
            ))}
          </div>

          <div className="home-agencies-display reveal-on-scroll">
            <div className="home-agencies-map reveal-on-scroll">
              <iframe
                key={selectedAgency.slug}
                title={`Carte ${selectedAgency.label}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${selectedAgency.lat},${selectedAgency.lng}&z=11&output=embed`}
              />
            </div>

            <aside className="home-agency-details card">
              <h3>{selectedAgency.code} - {selectedAgency.label}</h3>
              <p>
                <strong>Region:</strong> {selectedAgency.region}
              </p>
              <p>
                <strong>Adresse:</strong> {selectedAgency.address}
              </p>
              <p>
                <strong>Contact:</strong> cmpfcasa@cmpfassistance.ma
              </p>
              <ul>
                {selectedAgency.phones.map((phone) => (
                  <li key={phone}>
                    <strong>Tel:</strong> {phone}
                  </li>
                ))}
                <li>
                  <strong>Mobile:</strong> {selectedAgency.mobile}
                </li>
              </ul>
              <div className="home-agency-details-actions">
                <button type="button" onClick={() => setIsAgencyModalOpen(true)}>
                  Appeler l'agence
                </button>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedAgency.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Localiser
                </a>
                <Link to={`/villes/${selectedAgency.slug}`}>Voir details</Link>
              </div>
            </aside>
          </div>

          {isAgencyModalOpen && (
            <div
              className="agency-modal-backdrop"
              role="dialog"
              aria-modal="true"
              aria-label={`Contact agence ${selectedAgency.label}`}
              onClick={() => setIsAgencyModalOpen(false)}
            >
              <div className="agency-modal" onClick={(event) => event.stopPropagation()}>
                <button
                  type="button"
                  className="agency-modal-close"
                  aria-label="Fermer"
                  onClick={() => setIsAgencyModalOpen(false)}
                >
                  x
                </button>

                <h3>CMPF Agence {selectedAgency.code} - {selectedAgency.label}</h3>
                <p>
                  Notre equipe locale a {selectedAgency.label} est disponible 24h/24 et 7j/7 pour
                  accompagner les familles avec rapidite et discretion.
                </p>

                <ul>
                  {selectedAgency.phones.map((phone) => (
                    <li key={phone}>
                      <strong>Telephone:</strong> {phone}
                    </li>
                  ))}
                  <li>
                    <strong>Email:</strong> cmpfcasa@cmpfassistance.ma
                  </li>
                  <li>
                    <strong>Adresse:</strong> {selectedAgency.address}
                  </li>
                  <li>
                    <strong>Mobile:</strong> {selectedAgency.mobile}
                  </li>
                  <li>
                    <strong>Message:</strong> Bonjour CMPF, je souhaite une assistance a{' '}
                    {selectedAgency.label}.
                  </li>
                </ul>

                <div className="agency-modal-actions">
                  <a href={selectedAgencyWhatsappHref}>WhatsApp</a>
                  <a href={selectedAgencyPhoneHref}>Appeler</a>
                </div>

                <p className="agency-modal-note">
                  Chaque minute compte. CMPF repond avec rapidite, qualite et humanite.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section home-testimonials-section">
        <div className="container home-testimonials-wrap">
          <div className="home-testimonials-head">
            <span>Clients satisfaits</span>
            <h2>Ce que disent les familles accompagnees par CMPF</h2>
            <p>
              Des retours reels sur la qualite de notre accompagnement funeraire.
            </p>
          </div>
          <div className="home-testimonials-nav">
            <button
              type="button"
              className="home-testimonials-nav-btn"
              onClick={() =>
                setReviewsStartIndex((prev) => (prev <= 0 ? reviewsMaxStart : prev - 1))
              }
              aria-label="Avis precedents"
            >
              ‹
            </button>
            <button
              type="button"
              className="home-testimonials-nav-btn"
              onClick={() =>
                setReviewsStartIndex((prev) => (prev >= reviewsMaxStart ? 0 : prev + 1))
              }
              aria-label="Avis suivants"
            >
              ›
            </button>
          </div>
          <div key={reviewsStartIndex} className="home-testimonials-grid">
            {visibleReviews.map((review) => (
              <article key={review.name + review.city} className="home-testimonial-card card">
                <div className="home-testimonial-top" />
                <span className="home-testimonial-avatar" aria-hidden="true">
                  <img src={review.avatar} alt="" />
                </span>
                <strong>{review.name}</strong>
                <span className="home-testimonial-role">Client</span>
                <p>{review.text}</p>
                <div className="home-testimonial-stars" aria-label="Note 5 sur 5">
                  {'\u2605\u2605\u2605\u2605\u2605'}
                </div>
                <span>{review.city}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-faq-section">
        <div className="container home-testimonials-wrap">
          <div className="home-testimonials-head">
            <span>FAQ</span>
            <h2>Questions frequentes</h2>
          </div>
          <div className="faq-list">
            {homeFaqItems.map((item, index) => {
              const isOpen = openHomeFaqIndex === index

              return (
                <article key={item.question} className={isOpen ? 'faq-item is-open' : 'faq-item'}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenHomeFaqIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <h3>{item.question}</h3>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  {isOpen && <p className="faq-answer">{item.answer}</p>}
                </article>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage
