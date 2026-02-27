import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agencies, agenciesBySlug, normalizeAgencySlug } from '../data/agencies'
import img7 from '../assets/images/7.webp'
import img8 from '../assets/images/8.jpg'
import img10 from '../assets/images/10.jpeg'
import img2 from '../assets/images/2.png'
import imgRapatriement from '../assets/images/Rapatriement.jpeg'

const cityThemes = {
  agadir: {
    eyebrow: 'Agence Atlantique',
    pitch: 'Équipe senior basée à Agadir pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Rapatriement national et international', 'Accompagnement 24h/24, 7j/7', 'Suivi de dossier dédié'],
    tones: ['#0f4c81', '#1f9db6', '#d8f3ff'],
    images: [imgRapatriement, img10, img8],
    mood: 'Flux océanique et accompagnement fluide',
  },
  casablanca: {
    eyebrow: 'Agence Metropole',
    pitch: 'Équipe senior basée à Casablanca pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Prise en charge express en zone urbaine', 'Coordination avec hôpitaux et cliniques', 'Assistance familles locales et expatriées'],
    tones: ['#2f3854', '#4a7ab7', '#edf3ff'],
    images: [img10, img2, img7],
    mood: 'Rythme urbain, exécution rapide',
  },
  fes: {
    eyebrow: 'Agence Patrimoine',
    pitch: 'Équipe senior basée à Fès pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Préparation du dossier funéraire', 'Transport mortuaire sécurisé', 'Accompagnement discret des familles'],
    tones: ['#31512b', '#7ba65b', '#f0fae8'],
    images: [img8, imgRapatriement, img2],
    mood: 'Élégance sobre et traditions préservées',
  },
  laayoune: {
    eyebrow: 'Agence Saharienne',
    pitch: 'Équipe senior basée à Laâyoune pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Gestion des formalités locales', 'Coordination aéroportuaire et terrestre', 'Assistance continue jour et nuit'],
    tones: ['#6a451c', '#d49a4f', '#fff4de'],
    images: [img7, img10, imgRapatriement],
    mood: 'Logistique étendue, précision terrain',
  },
  marrakech: {
    eyebrow: 'Agence Gueliz',
    pitch: 'Équipe senior basée à Marrakech pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Interlocuteur unique de la famille', 'Prise en charge cérémonie complète', 'Support administratif intégral'],
    tones: ['#6a1f25', '#d44a4e', '#ffeef0'],
    images: [img2, img8, img7],
    mood: 'Présence humaine et coordination complète',
  },
  meknes: {
    eyebrow: 'Agence Centre',
    pitch: 'Équipe senior basée à Meknès pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Intervention rapide en centre-ville', 'Transport local et inter-villes', 'Soutien aux familles en deuil'],
    tones: ['#2c3261', '#5f76d8', '#eef1ff'],
    images: [imgRapatriement, img2, img10],
    mood: 'Disponibilité immédiate et maîtrise locale',
  },
  nador: {
    eyebrow: 'Agence Oriental Nord',
    pitch: 'Équipe senior basée à Nador pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Support décès et inhumation', 'Coordination administrative régionale', 'Disponibilité permanente'],
    tones: ['#214f57', '#45a7b7', '#e8fcff'],
    images: [img8, img7, imgRapatriement],
    mood: 'Service de proximite sur toute la zone nord-est',
  },
  ouarzazate: {
    eyebrow: 'Agence Draa-Tafilalet',
    pitch: 'Équipe senior basée à Ouarzazate pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Organisation logistique longue distance', 'Transport adapté à chaque destination', 'Suivi humain et transparent'],
    tones: ['#5a3825', '#b8794b', '#fff0e6'],
    images: [img10, img8, img2],
    mood: 'Grandes distances, même exigence',
  },
  oujda: {
    eyebrow: 'Agence Oriental Est',
    pitch: 'Équipe senior basée à Oujda pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Prise en charge administrative complète', 'Accompagnement des proches à chaque étape', 'Intervention rapide en ville et périphérie'],
    tones: ['#1f4f48', '#35a48f', '#e8fff8'],
    images: [img7, imgRapatriement, img10],
    mood: 'Réactif, organisé, accessible',
  },
  rabat: {
    eyebrow: 'Agence Capitale',
    pitch: 'Équipe senior basée à Rabat pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Assistance décès 24h/24', 'Gestion de cérémonie sur mesure', 'Relation continue avec la famille'],
    tones: ['#143b63', '#3492c7', '#e9f5ff'],
    images: [img2, img7, img8],
    mood: 'Standard élevé et exécution rigoureuse',
  },
  tanger: {
    eyebrow: 'Agence Detroit',
    pitch: 'Équipe senior basée à tanger pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Coordination portuaire et aéroportuaire', 'Prise en charge rapide des urgences', 'Équipe disponible en continu'],
    tones: ['#283655', '#5b85d8', '#f0f4ff'],
    images: [imgRapatriement, img8, img2],
    mood: 'Connexion nationale et internationale',
  },
  tetouan: {
    eyebrow: 'Agence Rif Méditerranée',
    pitch: 'Équipe senior basée à Tetouan pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Accompagnement des formalités officielles', 'Transport et inhumation organisés', 'Suivi 7j/7'],
    tones: ['#24435a', '#3f8cb8', '#e9f7ff'],
    images: [img10, img7, imgRapatriement],
    mood: 'Accompagnement détaillé et rassurant',
  },
}

const unifiedMainServices = [
  'Organisation complète des obsèques  (musulmanes et non musulmanes)',
  'Rapatriement national et international',
  'Transport mortuaire et logistique funéraire',
  'Assistance administrative et formalités officielles',
  'Coordination avec hôpitaux, consulats et assurances',
  'Marbrerie, plaques funéraires et personnalisation',
  'Fleurs, entretien et fleurissement des sépultures',
  'Disponibilité immédiate 24h/24 et 7j/7',
]

const unifiedAssistanceText =
  "PFM assure une prise en charge complète et coordonnée : déclaration, formalités, transport, cérémonie, inhumation et suivi de la famille. Nos équipes interviennent avec la même exigence de qualité dans toutes les villes."

function normalizeTel(phone) {
  return `+${String(phone || '').replace(/[^\d]/g, '')}`
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.8 11.8 0 0 0 3.71.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.47a1 1 0 0 1 1 1 11.8 11.8 0 0 0 .59 3.71 1 1 0 0 1-.24 1Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 5h16a2 2 0 0 1 2 2v.2l-10 6.25L2 7.2V7a2 2 0 0 1 2-2Zm18 4.55V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.55l9.47 5.92a1 1 0 0 0 1.06 0Z" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a7 7 0 0 1 7 7c0 4.9-5.3 10.88-6.2 11.86a1 1 0 0 1-1.6 0C10.3 19.88 5 13.9 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6a2.5 2.5 0 0 0 0 5.5Z" />
    </svg>
  )
}

function CityAgencyPage() {
  const { slug } = useParams()
  const normalizedSlug = useMemo(() => normalizeAgencySlug(slug), [slug])
  const agency = useMemo(() => {
    const exactAgency = agenciesBySlug[normalizedSlug]
    if (exactAgency) return exactAgency

    return (
      agencies.find((item) => normalizeAgencySlug(item.slug) === normalizedSlug) ||
      agencies.find((item) => normalizeAgencySlug(item.label) === normalizedSlug)
    )
  }, [normalizedSlug])
  const theme = cityThemes[normalizedSlug]
  const [heroImage, collageA] = theme?.images || [imgRapatriement, img10, img8]
  const sameRegionAgencies = useMemo(
    () => agencies.filter((item) => item.region === agency?.region && item.slug !== agency?.slug),
    [agency],
  )

  if (!agency) {
    return (
      <section className="section city-agency-page">
        <div className="container">
          <div className="city-not-found">
            <h1>Agence non trouvée</h1>
            <p>La page demandée n'existe pas encore. Vous pouvez revenir à l'accueil ou choisir une ville.</p>
            <div className="city-not-found-actions">
              <Link className="btn btn-primary" to="/">
                Retour à l'accueil
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Contacter PFM
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const leadPhone = agency.phones[0] || agency.mobile
  const mapsQuery =
    agency.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agency.address)}`
  const embeddedMap = `https://www.google.com/maps?q=${agency.lat},${agency.lng}&z=14&output=embed`
  const cssVars = {
    '--city-primary': theme?.tones?.[0] || '#1b4e7f',
    '--city-secondary': theme?.tones?.[1] || '#6f3e8f',
    '--city-soft': theme?.tones?.[2] || '#edf3fb',
  }

  return (
    <section className="section city-agency-page" style={cssVars}>
      <div className="container city-agency-shell">
        <div className="city-agency-hero">
          <div className="city-hero-copy">
            <h1>
              Agence {agency.code} - {agency.label}
            </h1>
            <p className="city-hero-intro">
              {theme?.pitch ||
                `Notre agence intervient rapidement à ${agency.label} avec une prise en charge complète des obsèques.`}
            </p>
            <p className="city-mood">{theme?.mood || 'Service humain et maîtrise des formalités'}</p>
            <div className="city-hero-actions">
              <a className="btn btn-primary" href={`tel:${normalizeTel(leadPhone)}`}>
                Appeler l'agence
              </a>
              <a className="btn btn-secondary" href={mapsQuery} target="_blank" rel="noreferrer">
                Ouvrir la carte
              </a>
            </div>
            <div className="city-metrics">
              <article>
                <strong>{agency.region}</strong>
                <span>Région couverte</span>
              </article>
              <article>
                <strong>24h/24</strong>
                <span>Assistance urgente</span>
              </article>
            </div>
          </div>

          <div className="city-hero-media">
            <figure className="city-hero-main">
              <img src={heroImage} alt={`Agence ${agency.label} - visuel principal`} />
            </figure>
          </div>
        </div>

        <div className="city-agency-content">
          <div className="city-main-grid">
            <article className="city-card">
              <h3>Coordonnées de l'agence</h3>
              <p>{agency.address}</p>
              <ul className="city-phone-list">
                {agency.phones.map((phone) => (
                  <li key={phone}>
                    <a className="city-contact-link" href={`tel:${normalizeTel(phone)}`}>
                      <span className="city-contact-icon">
                        <PhoneIcon />
                      </span>
                      <span>{phone}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a className="city-contact-link" href={`tel:${normalizeTel(agency.mobile)}`}>
                    <span className="city-contact-icon">
                      <PhoneIcon />
                    </span>
                    <span>{agency.mobile}</span>
                  </a>
                </li>
                <li>
                  <a className="city-contact-link" href={`mailto:${agency.email}`}>
                    <span className="city-contact-icon">
                      <MailIcon />
                    </span>
                    <span>{agency.email}</span>
                  </a>
                </li>
              </ul>
            </article>

            <article className="city-card">
              <h3>Prestations principales</h3>
              <ul className="city-highlight-list">
                {unifiedMainServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="city-card city-banner-card">
              <div>
                <h3>Assistance complète et coordonnée</h3>
                <p>{unifiedAssistanceText}</p>
              </div>
              <img src={collageA} alt={`Equipe assistance ${agency.label}`} />
            </article>

            <article className="city-card">
              <h3>Localisation précise</h3>
              <iframe
                className="city-map-frame"
                src={embeddedMap}
                title={`Carte de l'agence ${agency.label}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>

          <aside className="city-side-panel">
            <h3>Infos rapides</h3>
            <p>
              <strong>Ville:</strong> {agency.label}
            </p>
            <p>
              <strong>Région:</strong> {agency.region}
            </p>
            <a className="city-contact-link" href={`tel:${normalizeTel(leadPhone)}`}>
              <span className="city-contact-icon">
                <PhoneIcon />
              </span>
              <span>Ligne principale</span>
            </a>
            <a className="city-contact-link" href={`tel:${normalizeTel(agency.mobile)}`}>
              <span className="city-contact-icon">
                <PhoneIcon />
              </span>
              <span>Mobile urgence</span>
            </a>
            <a className="city-contact-link" href={`mailto:${agency.email}`}>
              <span className="city-contact-icon">
                <MailIcon />
              </span>
              <span>E-mail agence</span>
            </a>
            <a href={mapsQuery} target="_blank" rel="noreferrer">
              <span className="city-contact-icon">
                <MapIcon />
              </span>
              <span>Itinéraire</span>
            </a>

            {sameRegionAgencies.length > 0 && (
              <div className="city-nearby">
                <h4>Agences de la même région</h4>
                <ul>
                  {sameRegionAgencies.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/villes/${item.slug}`}>Agence {item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CityAgencyPage


