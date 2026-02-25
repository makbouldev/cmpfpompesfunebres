import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agencies, agenciesBySlug } from '../data/agencies'
import img7 from '../assets/images/7.webp'
import img8 from '../assets/images/8.jpg'
import img10 from '../assets/images/10.jpeg'
import img2 from '../assets/images/2.png'
import imgRapatriement from '../assets/images/Rapatriement.jpeg'

const cityThemes = {
  agadir: {
    eyebrow: 'Agence Atlantique',
    pitch: 'Intervention rapide sur Agadir et le Grand Sud avec coordination administrative complete.',
    highlights: ['Rapatriement national et international', 'Accompagnement 24h/24, 7j/7', 'Suivi de dossier dedie'],
    tones: ['#0f4c81', '#1f9db6', '#d8f3ff'],
    images: [imgRapatriement, img10, img8],
    mood: 'Flux oceanique et accompagnement fluide',
  },
  casablanca: {
    eyebrow: 'Agence Metropole',
    pitch: 'Equipe senior basee a Casablanca pour les urgences, ceremonies et transferts immediats.',
    highlights: ['Prise en charge express en zone urbaine', 'Coordination avec hopitaux et cliniques', 'Assistance familles locales et expatriees'],
    tones: ['#2f3854', '#4a7ab7', '#edf3ff'],
    images: [img10, img2, img7],
    mood: 'Rythme urbain, execution rapide',
  },
  fes: {
    eyebrow: 'Agence Patrimoine',
    pitch: 'Service de proximite a Fes avec respect des rites et organisation personnalisee.',
    highlights: ['Preparation du dossier funeraire', 'Transport mortuaire securise', 'Accompagnement discret des familles'],
    tones: ['#31512b', '#7ba65b', '#f0fae8'],
    images: [img8, imgRapatriement, img2],
    mood: 'Elegance sobre et traditions preservees',
  },
  laayoune: {
    eyebrow: 'Agence Saharienne',
    pitch: 'Couverture de Laayoune et des provinces du sud avec logistique longue distance.',
    highlights: ['Gestion des formalites locales', 'Coordination aeroportuaire et terrestre', 'Assistance continue jour et nuit'],
    tones: ['#6a451c', '#d49a4f', '#fff4de'],
    images: [img7, img10, imgRapatriement],
    mood: 'Logistique etendue, precision terrain',
  },
  marrakech: {
    eyebrow: 'Agence Gueliz',
    pitch: 'Accompagnement premium a Marrakech pour ceremonies, transfert et assistance administrative.',
    highlights: ['Interlocuteur unique de la famille', 'Prise en charge ceremonie complete', 'Support administratif integral'],
    tones: ['#6a1f25', '#d44a4e', '#ffeef0'],
    images: [img2, img8, img7],
    mood: 'Presence humaine et coordination complete',
  },
  meknes: {
    eyebrow: 'Agence Centre',
    pitch: 'Agence Meknes active 24h/24 pour intervention domicile, hopital et cimetiere.',
    highlights: ['Intervention rapide en centre-ville', 'Transport local et inter-villes', 'Soutien aux familles en deuil'],
    tones: ['#2c3261', '#5f76d8', '#eef1ff'],
    images: [imgRapatriement, img2, img10],
    mood: 'Disponibilite immediate et maitrise locale',
  },
  nador: {
    eyebrow: 'Agence Oriental Nord',
    pitch: 'Equipe locale a Nador avec prise en charge des demarches et transport specialise.',
    highlights: ['Support deces et inhumation', 'Coordination administrative regionale', 'Disponibilite permanente'],
    tones: ['#214f57', '#45a7b7', '#e8fcff'],
    images: [img8, img7, imgRapatriement],
    mood: 'Service de proximite sur toute la zone nord-est',
  },
  ouarzazate: {
    eyebrow: 'Agence Draa-Tafilalet',
    pitch: 'Solutions funeraires a Ouarzazate avec couverture des zones etendues de la region.',
    highlights: ['Organisation logistique longue distance', 'Transport adapte a chaque destination', 'Suivi humain et transparent'],
    tones: ['#5a3825', '#b8794b', '#fff0e6'],
    images: [img10, img8, img2],
    mood: 'Grandes distances, meme exigence',
  },
  oujda: {
    eyebrow: 'Agence Oriental Est',
    pitch: 'Agence Oujda pour assistance immediate, transfert et coordination des formalites.',
    highlights: ['Prise en charge administrative complete', 'Accompagnement des proches a chaque etape', 'Intervention rapide en ville et peripherie'],
    tones: ['#1f4f48', '#35a48f', '#e8fff8'],
    images: [img7, imgRapatriement, img10],
    mood: 'Reactif, organise, accessible',
  },
  rabat: {
    eyebrow: 'Agence Capitale',
    pitch: 'Intervention professionnelle a Rabat avec reactivite, discretion et suivi permanent.',
    highlights: ['Assistance deces 24h/24', 'Gestion de ceremonie sur mesure', 'Relation continue avec la famille'],
    tones: ['#143b63', '#3492c7', '#e9f5ff'],
    images: [img2, img7, img8],
    mood: 'Standard eleve et execution rigoureuse',
  },
  tanger: {
    eyebrow: 'Agence Detroit',
    pitch: 'PFM Tanger accompagne les familles avec un dispositif adapte aux flux nationaux et internationaux.',
    highlights: ['Coordination portuaire et aeroportuaire', 'Prise en charge rapide des urgences', 'Equipe disponible en continu'],
    tones: ['#283655', '#5b85d8', '#f0f4ff'],
    images: [imgRapatriement, img8, img2],
    mood: 'Connexion nationale et internationale',
  },
  tetouan: {
    eyebrow: 'Agence Rif Mediterranee',
    pitch: 'Service funeraires a Tetouan avec respect, precision et assistance humaine de proximite.',
    highlights: ['Accompagnement des formalites officielles', 'Transport et inhumation organises', 'Suivi 7j/7'],
    tones: ['#24435a', '#3f8cb8', '#e9f7ff'],
    images: [img10, img7, imgRapatriement],
    mood: 'Accompagnement detaille et rassurant',
  },
}

const unifiedMainServices = [
  'Organisation complete des obseques (musulmanes et non musulmanes)',
  'Rapatriement national et international',
  'Transport mortuaire et logistique funeraire',
  'Assistance administrative et formalites officielles',
  'Coordination avec hopitaux, consulats et assurances',
  'Marbrerie, plaques funeraires et personnalisation',
  'Fleurs, entretien et fleurissement des sepultures',
  'Disponibilite immediate 24h/24 et 7j/7',
]

const unifiedAssistanceText =
  'PFM assure une prise en charge complete et coordonnee: declaration, formalites, transport, ceremonie, inhumation et suivi de la famille. Nos equipes interviennent avec la meme exigence de qualite dans toutes les villes.'

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
  const agency = useMemo(() => agenciesBySlug[slug], [slug])
  const theme = cityThemes[slug]
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
            <h1>Agence non trouvee</h1>
            <p>La page demandee n'existe pas encore. Vous pouvez revenir a l'accueil ou choisir une ville.</p>
            <div className="city-not-found-actions">
              <Link className="btn btn-primary" to="/">
                Retour a l'accueil
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
                `Notre agence intervient rapidement a ${agency.label} avec une prise en charge complete des obseques.`}
            </p>
            <p className="city-mood">{theme?.mood || 'Service humain et maitrise des formalites'}</p>
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
                <span>Region couverte</span>
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
              <h3>Coordonnees de l'agence</h3>
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
                <h3>Assistance complete et coordonnee</h3>
                <p>{unifiedAssistanceText}</p>
              </div>
              <img src={collageA} alt={`Equipe assistance ${agency.label}`} />
            </article>

            <article className="city-card">
              <h3>Localisation precise</h3>
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
              <strong>Region:</strong> {agency.region}
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
              <span>Itineraire</span>
            </a>

            {sameRegionAgencies.length > 0 && (
              <div className="city-nearby">
                <h4>Agences de la meme region</h4>
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


