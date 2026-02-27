import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroSlide1 from '../assets/hero/1.png'
import heroSlide2 from '../assets/hero/2.png'
import heroSlide3 from '../assets/hero/3.png'
import heroSlide4 from '../assets/hero/4.png'
import heroSlide5 from '../assets/hero/5.png'
import heroSlide6 from '../assets/hero/6.png'
import imageEquipeA from '../assets/images/7.webp'
import imageEquipeB from '../assets/images/8.jpg'
import imageTransportMusulman from '../assets/images/10.jpeg'
import imageInterieurCorbillard from '../assets/images/11.jpg'
import imageFlottePFM from '../assets/images/20.webp'
import imageFleursConvoi from '../assets/images/13.jpg'
import imageRapatriement from '../assets/images/Rapatriement.jpeg'
import imageTransportCercueil from '../assets/images/18.jpg'
import imagePreparationEquipe from '../assets/images/20.webp'
import { agencies } from '../data/agencies'

const heroSlides = [
  {
    titleTop: 'Nos services',
    titleMain: 'Rapatriement de corps',
    description:
      'Prise en charge complète du rapatriement au Maroc et à l’international, avec coordination administrative et logistique.',
    cta: 'Demander un rapatriement',
    to: '/assistance',
    image: imageRapatriement,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Pompes Funèbres Musulmanes',
    description:
      'Prise en charge complète des rites musulmans avec accompagnement humain et discret.',
    cta: 'Service Musulman',
    to: '/pompes-funebres/musulmanes',
    image: heroSlide1,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Pompes Funèbres non Musulmanes',
    description:
      'Organisation de cérémonies civiles et religieuses avec un interlocuteur unique.',
    cta: 'Service non musulman',
    to: '/pompes-funebres/non-musulmanes',
    image: heroSlide2,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Fleurs Funéraires Et Compositions Personnalisées',
    description:
      'Compositions florales, gerbes et couronnes adaptées à toutes les cérémonies.',
    cta: 'Voir Fleurs',
    to: '/produits/fleurs',
    image: heroSlide4,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Marbrerie Musulmanes',
    description:
      'Réalisation de monuments funéraires musulmans dans le respect des normes et des rites.',
    cta: 'Marbrerie musulmane',
    to: '/produits/marbrerie-musulmane',
    image: heroSlide6,
  },
  {
    titleTop: 'Nos services',
    titleMain: 'Marbrerie non Musulmanes',
    description:
      'Solutions de marbrerie sur mesure pour cérémonies non musulmanes et civiles.',
    cta: 'Marbrerie non musulmane',
    to: '/produits/marbrerie-non-musulmane',
    image: heroSlide3,
  },
]

const servicesHighlights = [
  {
    title: 'Intervention rapide 24h/24',
    text: "Nous répondons vite à votre appel et nous lançons l'intervention sans attendre.",
    image: imageFlottePFM,
    to: '/assistance',
  },
  {
    title: 'Respect des rites et de la famille',
    text: 'Nous organisons les cérémonies avec respect, discrétion et sérieux.',
    image: imageTransportMusulman,
    to: '/pompes-funebres/musulmanes',
  },
  {
    title: 'Prix clairs et devis simple',
    text: 'Vous recevez un devis détaillé, avec des explications faciles à comprendre.',
    image: imageEquipeB,
    to: '/contact',
  },
  {
    title: 'Un seul contact du début à la fin',
    text: "Un conseiller suit votre dossier à chaque étape, jusqu'à la fin.",
    image: imageEquipeA,
    to: '/contact',
  },
]

const servicesOverview = [
  {
    icon: 'pulse',
    title: 'Organisation complète des obsèques ',
    text: "Prise en charge administrative, coordination des intervenants et suivi détaillé de chaque étape.",
  },
  {
    icon: 'timer',
    title: 'Cérémonies musulmanes et non musulmanes',
    text: 'Préparation et exécution dans le respect des rites, des valeurs familiales et des obligations légales.',
  },
  {
    icon: 'shield',
    title: 'Catalogue funéraire personnalisé',
    text: 'Fleurs, marbrerie et services funéraires avec des solutions adaptées à votre budget.',
  },
  {
    icon: 'team',
    title: 'Assistance immédiate 24h/24',
    text: 'Un conseiller disponible à tout moment pour orienter la famille et lancer les procédures sans délai.',
  },
]

const careProcessSteps = [
  {
    title: '1. Appel et orientation immédiate',
    text: "Un conseiller PFM répond tout de suite, évalue l'urgence et déclenche la prise en charge 24h/24.",
  },
  {
    title: '2. Dossier et coordination administrative',
    text: 'Nous rassemblons les pièces, gérons les formalités et coordonnons assurance, consulat et administrations.',
  },
  {
    title: '3. Transport, rituels et cérémonie',
    text: 'Organisation du transport, cercueil  adapté et préparation complète de la cérémonie.',
  },
  {
    title: '4. Inhumation et suivi famille',
    text: "Présence sur le terrain jusqu'à l'inhumation, puis suivi post-obsèques avec un interlocuteur unique.",
  },
]

const repatriementPillars = [
  {
    title: 'Équipe de coordination disponible 24h/24',
    text: 'Back-office PFM mobilisé en continu pour traiter les dossiers urgents et coordonner chaque intervention.',
    image: imageEquipeA,
  },
  {
    title: 'Suivi administratif en temps réel',
    text: 'Gestion des pièces, échanges avec consulat, assurance et autorités pour accélérer la prise en charge.',
    image: imageEquipeB,
  },
  {
    title: 'Transport mortuaire national et international',
    text: 'Organisation du transfert du défunt par voie terrestre ou aérienne, avec préparation complète du dossier de rapatriement.',
    image: imageTransportMusulman,
  },
]

const clientReviews = [
  {
    name: 'Yassine',
    city: 'Casablanca',
    text: 'Service très professionnel, équipe respectueuse et disponible à tout moment. Tout a été bien organisé.',
    avatar: 'https://i.pravatar.cc/160?img=11',
  },
  {
    name: 'Amina',
    city: 'Rabat',
    text: 'Intervention rapide et accompagnement humain. Les démarches ont été simplifiées du début à la fin.',
    avatar: 'https://i.pravatar.cc/160?img=47',
  },
  {
    name: 'Soukaina',
    city: 'Marrakech',
    text: 'Un grand merci à PFM pour la qualité du suivi et le respect complet de nos volontés.',
    avatar: 'https://i.pravatar.cc/160?img=44',
  },
  {
    name: 'Anas',
    city: 'Agadir',
    text: 'Accueil très humain, assistance rapide et équipe sérieuse. Nous avons été bien accompagnés.',
    avatar: 'https://i.pravatar.cc/160?img=14',
  },
  {
    name: 'Hajar',
    city: 'Tanger',
    text: 'Un service de qualité, très bien organisé et transparent. Merci pour votre professionnalisme.',
    avatar: 'https://i.pravatar.cc/160?img=32',
  },
  {
    name: 'Mehdi',
    city: 'Fès',
    text: 'PFM a géré toutes les formalités avec clarté et respect. Équipe très disponible.',
    avatar: 'https://i.pravatar.cc/160?img=8',
  },
]

const homeFaqItems = [
  {
    question: 'Quel est le délai pour organiser les obsèques ?',
    answer:
      'Généralement entre 24h et 6 jours selon les obligations légales, administratives et familiales.',
  },
  {
    question: "Pouvez-vous intervenir immédiatement en cas d'urgence ?",
    answer:
      'Oui, nos équipes sont disponibles 24h/24 et 7j/7 pour lancer la prise en charge dès le premier appel.',
  },
  {
    question: 'Organisez-vous les obsèques musulmanes et non musulmanes ?',
    answer:
      'Oui, nous accompagnons les familles pour les rites musulmans et non musulmans dans le respect des volontés.',
  },
  {
    question: 'Prenez-vous en charge les formalités administratives ?',
    answer:
      'Oui, nous gérons les déclarations, autorisations et documents nécessaires avec un suivi détaillé.',
  },
  {
    question: 'Proposez-vous des fleurs et services de marbrerie ?',
    answer:
      'Oui, notre catalogue inclut fleurs, marbrerie et services funéraires avec plusieurs options de personnalisation.',
  },
  {
    question: 'Intervenez-vous dans toutes les villes du Maroc ?',
    answer:
      "Nous couvrons les principales villes du Maroc via notre réseau d'agences et de coordination locale.",
  },
  {
    question: 'Peut-on vous contacter par WhatsApp ?',
    answer: 'Oui, vous pouvez nous joindre rapidement par WhatsApp pour une orientation immédiate.',
  },
  {
    question: 'Comment obtenir un devis rapide ?',
    answer:
      'Contactez PFM par téléphone, WhatsApp ou formulaire: nous vous envoyons un devis détaillé rapidement.',
  },
]

const homeGuideTabs = [
  {
    key: 'coordination',
    label: 'Coordination 24/7',
    title: 'Une cellule active 24h/24 pour piloter chaque intervention',
    intro:
      'Dès le premier appel, notre équipe de coordination organise les priorités, active les intervenants et suit chaque étape en temps réel.',
    points: [
      'Dispatch immédiat des équipes selon urgence et localisation.',
      'Suivi en continu des dossiers administratifs et opérationnels.',
      'Communication avec la famille à chaque phase.',
    ],
    to: '/contact',
    cta: 'Contact PFM',
    image: imageEquipeA,
  },
  {
    key: 'transport',
    label: 'Transport géolocalisé',
    title: 'Transport sécurisé avec suivi GPS et traçabilité',
    intro:
      "Nos moyens logistiques permettent d'assurer les transferts avec précision, ponctualité et respect total de la dignité.",
    points: [
      'Suivi géolocalisé des trajets pour une meilleure coordination.',
      'Transport local, national et international selon le besoin.',
      'Préparation logistique complète avant cérémonie et inhumation.',
    ],
    to: '/contact',
    cta: 'Contact PFM',
    image: imageTransportCercueil,
  },
  {
    key: 'assurance',
    label: 'Assurance et dossiers',
    title: 'Gestion assurance, assistance et consulat sans blocage',
    intro:
      'Nos conseillers prennent en charge les échanges techniques et documentaires pour accélérer la prise en charge globale.',
    points: [
      'Coordination avec assurance, assistance et institutions partenaires.',
      'Vérification des pièces et suivi des autorisations nécessaires.',
      'Interface unique entre famille, administration et opérateurs terrain.',
    ],
    to: '/contact',
    cta: 'Contact PFM',
    image: imageEquipeB,
  },
]
// ----------
const homeExpertiseTabs = [
  {
    key: 'company',
    label: 'À propos PFM',
    title: 'Une entreprise structurée pour accompagner chaque famille',
    intro:
      "PFM s'appuie sur une organisation structurée, des équipes formées et un pilotage terrain permanent pour garantir un service fiable.",
    points: [
      'Présence nationale avec coordination locale dans les principales villes.',
      'Un seul interlocuteur dédié du premier appel jusqu’à la clôture du dossier.',
      'Standards de qualité appliqués pour chaque intervention.',
    ],
    to: '/qui-sommes-nous',
    cta: 'Découvrir la société',
    image: imageEquipeB,
  },
  {
    key: 'muslim',
    label: 'Pompes Funèbres Musulmanes',
    title: 'Organisation complète des obsèques musulmanes avec respect des rites',
    intro:
      'Nos équipes assurent la prise en charge complète en conformité avec les rites islamiques et les attentes de la famille.',
    points: [
      'Préparation rituelle et accompagnement de la famille avec discrétion.',
      'Coordination administrative, transport et inhumation.',
      "Disponibilité 24h/24 pour les urgences au Maroc et à l'international.",
    ],
    to: '/service/pompes-funebres-musulmanes',
    cta: 'Voir le service musulman',
    image: imageTransportMusulman,
  },
  {
    key: 'non-muslim',
    label: 'Pompes Funèbres non Musulmanes',
    title: 'Cérémonies non musulmanes organisées avec dignité et précision',
    intro:
      'PFM organise les cérémonies civiles et confessionnelles non musulmanes avec une préparation détaillée à chaque étape.',
    points: [
      'Coordination complète de la cérémonie selon les volontés familiales.',
      'Logistique, transport et formalités prises en charge.',
      'Suivi constant avec un conseiller unique et réactif.',
    ],
    to: '/service/pompes-funebres-non-musulmanes',
    cta: 'Voir le service non musulman',
    image: imageInterieurCorbillard,
  },
]

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [selectedAgencySlug, setSelectedAgencySlug] = useState(agencies[0].slug)
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState(false)
  const [openHomeFaqIndex, setOpenHomeFaqIndex] = useState(0)
  const [reviewsStartIndex, setReviewsStartIndex] = useState(0)
  const [activeGuideTab, setActiveGuideTab] = useState(homeGuideTabs[0].key)
  const [activeExpertiseTab, setActiveExpertiseTab] = useState(homeExpertiseTabs[0].key)

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
  const selectedAgencyMapUrl =
    selectedAgency.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedAgency.address)}`
  const selectedAgencyEmbeddedMap = `https://maps.google.com/maps?q=${selectedAgency.lat},${selectedAgency.lng}&z=11&output=embed`
  const activeGuide = homeGuideTabs.find((tab) => tab.key === activeGuideTab) ?? homeGuideTabs[0]
  const activeExpertise =
    homeExpertiseTabs.find((tab) => tab.key === activeExpertiseTab) ?? homeExpertiseTabs[0]
  const selectedAgencyMainPhone = selectedAgency.phones[0] ?? '+212 5 22 49 16 16'
  const selectedAgencyPhoneHref = `tel:${selectedAgencyMainPhone.replace(/\s+/g, '')}`
  const selectedAgencyMobileDigits = selectedAgency.mobile.replace(/\D/g, '')
  const selectedAgencyWhatsappNumber = selectedAgencyMobileDigits.startsWith('0')
    ? `212${selectedAgencyMobileDigits.slice(1)}`
    : selectedAgencyMobileDigits
  const selectedAgencyWhatsappHref = `https://wa.me/${selectedAgencyWhatsappNumber}?text=${encodeURIComponent(
    `Bonjour PFM, je souhaite une assistance à ${selectedAgency.label}.`,
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
              backgroundImage: `url('${currentSlide.image}')`,
            }}
          >
            <div className="hero-banner-content">
              <h1 className="hero-info-title">{currentSlide.titleMain}</h1>
              <p className="hero-info-text">{currentSlide.description}</p>
              <div className="hero-highlight hero-info-badge">
                <span className="hero-highlight-icon">!</span>
                Service d'urgence 24h/24 - Intervention immédiate
              </div>

              <div className="hero-actions hero-actions-main hero-info-actions">
                <a href="tel:+212522491616" className="btn hero-btn-call">
                  <span className="hero-btn-content">
                    <span className="hero-btn-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
                      </svg>
                    </span>
                    <span>Appel immédiat</span>
                  </span>
                </a>
                <a href="https://wa.me/212661502763" className="btn hero-btn-wa">
                  <span className="hero-btn-content">
                    <span className="hero-btn-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M12 3.3a8.7 8.7 0 0 0-7.5 13l-1 4 4.1-1a8.7 8.7 0 1 0 4.4-16Zm0 15.8a7.1 7.1 0 0 1-3.6-1l-.3-.2-2.5.6.7-2.4-.2-.4a7.1 7.1 0 1 1 5.9 3.4Zm3.9-5.3-.5-.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.6-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.4.1-.5l.3-.4.2-.3c.1-.1.1-.3 0-.4l-.7-1.8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.6 2.5 1 2.5.7 3 .7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
                      </svg>
                    </span>
                    <span>WhatsApp immédiat</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="hero-slider-controls">
              <div className="hero-nav-buttons">
                <button
                  type="button"
                  className="hero-nav-btn"
                  aria-label="Slide précédente"
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
                <h2>Un accompagnement funéraire, humain et professionnel</h2>
                <p>
                  PFM propose une prise en charge complète pour soulager les familles, avec une organisation rapide et une qualité de service constante.
                </p>
                <p>
                  Notre équipe coordonne chaque intervention avec rigueur, discrétion et réactivité pour garantir un service fiable à chaque famille.
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
                <img src={imagePreparationEquipe} alt="Services funéraires PFM" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-process-section">
        <div className="container home-process-wrap reveal-on-scroll">
          <div className="home-process-head">
            <span>Parcours PFM</span>
            <h2>Une méthode rapide et rassurante pour chaque famille</h2>
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
                    <span className="home-process-step-label">Étape {stepNumber}</span>
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
              Les coulisses PFM: <em>précision, réactivité et contrôle terrain</em>
            </h2>
            <p>
              Coordination interne, transport géolocalisé, gestion de l’assurance et suivi du dossier :
              toute la chaîne opérationnelle est pilotée en continu.
            </p>
          </div>

          <div className="home-guide-tabs" role="tablist" aria-label="Guides funéraires">
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
              <h2>Rapatriement de corps et accompagnement des familles</h2>
              <p className="home-creative-lead">
                PFM prend en charge exclusivement le rapatriement de corps : formalités consulaires,
                autorisations administratives, coordination aéroportuaire et transfert du défunt vers
                la destination finale dans les meilleurs délais.
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
                <img src={imageEquipeB} alt="Bureau administratif PFM" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-services-showcase">
        <div className="container home-services-wrap">
          <h2>Pourquoi choisir PFM</h2>
          <p className="home-services-intro">
            Des services essentiels présentés de manière claire pour aider les familles à choisir rapidement.
          </p>
          <div className="home-services-layout">
            <div className="home-services-visual">
              <div className="home-services-visual-main">
                <img src={imageFleursConvoi} alt="Services funéraires" />
              </div>
              <div className="home-services-visual-side">
                <img src={imageTransportMusulman} alt="Intervention PFM" />
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

      <section id="nos-agences" className="section home-agencies-section">
        <div className="container home-agencies-wrap reveal-on-scroll">
          <div className="home-agencies-head">
            <span>Nos agences</span>
            <h2>Nos villes de couverture</h2>
            <p>
              Sélectionnez votre ville pour afficher ses informations et localiser l'agence.
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
                src={selectedAgencyEmbeddedMap}
              />
            </div>

            <aside className="home-agency-details card">
              <h3>{selectedAgency.code} - {selectedAgency.label}</h3>
              <p>
                <strong>Région:</strong> {selectedAgency.region}
              </p>
              <p>
                <strong>Adresse:</strong> {selectedAgency.address}
              </p>
              <p>
                <strong>Contact:</strong>{' '}
                <a href={`mailto:${selectedAgency.email}`}>{selectedAgency.email}</a>
              </p>
              <ul>
                {selectedAgency.phones.map((phone) => (
                  <li key={phone}>
                    <strong>Tél:</strong> {phone}
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
                  href={selectedAgencyMapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Localiser
                </a>
                <Link to={`/villes/${selectedAgency.slug}`}>Voir les détails</Link>
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

                <h3>PFM Agence {selectedAgency.code} - {selectedAgency.label}</h3>
                <p>
                  Notre équipe locale à {selectedAgency.label} est disponible 24h/24 et 7j/7 pour
                  accompagner les familles avec rapidité et discrétion.
                </p>

                <ul>
                  {selectedAgency.phones.map((phone) => (
                    <li key={phone}>
                      <strong>Telephone:</strong> {phone}
                    </li>
                  ))}
                  <li>
                    <strong>E-mail:</strong> {selectedAgency.email}
                  </li>
                  <li>
                    <strong>Adresse:</strong> {selectedAgency.address}
                  </li>
                  <li>
                    <strong>Mobile:</strong> {selectedAgency.mobile}
                  </li>

                </ul>

                <div className="agency-modal-actions">
                  <a href={selectedAgencyWhatsappHref}>WhatsApp</a>
                  <a href={selectedAgencyPhoneHref}>Appeler</a>
                </div>

                <p className="agency-modal-note">
                  Chaque minute compte. PFM répond avec rapidité, qualité et humanité.
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
            <h2>Ce que disent les familles accompagnées par PFM</h2>
            <p>
              Des retours réels sur la qualité de notre accompagnement funéraire.
            </p>
          </div>
          <div className="home-testimonials-nav">
            <button
              type="button"
              className="home-testimonials-nav-btn"
              onClick={() =>
                setReviewsStartIndex((prev) => (prev <= 0 ? reviewsMaxStart : prev - 1))
              }
              aria-label="Avis précédents"
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
            <h2>Questions fréquentes</h2>
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


