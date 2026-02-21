import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agencies, agenciesBySlug } from '../data/agencies'
import img7 from '../assets/images/7.webp'
import img8 from '../assets/images/8.jpg'
import img9 from '../assets/images/9.webp'
import img10 from '../assets/images/10.jpeg'
import img11 from '../assets/images/11.jpg'
import img12 from '../assets/images/12.jpg'
import img13 from '../assets/images/13.jpg'
import img14 from '../assets/images/14.jpg'
import img15 from '../assets/images/15.jpg'
import img16 from '../assets/images/16.jpg'
import img17 from '../assets/images/17.jpeg'
import img18 from '../assets/images/18.jpg'
import img19 from '../assets/images/19.webp'
import img20 from '../assets/images/20.jpg'
import img20Webp from '../assets/images/20.webp'

const cityThemes = {
  agadir: {
    eyebrow: 'Agence Atlantique',
    pitch: 'Intervention rapide sur Agadir et le Grand Sud avec coordination administrative complete.',
    highlights: ['Rapatriement national et international', 'Accompagnement 24h/24, 7j/7', 'Suivi de dossier dedie'],
    tones: ['#0f4c81', '#1f9db6', '#d8f3ff'],
    images: [img8, img12, img19],
    mood: 'Flux oceanique et accompagnement fluide',
  },
  casablanca: {
    eyebrow: 'Agence Metropole',
    pitch: 'Equipe senior basee a Casablanca pour les urgences, ceremonies et transferts immediats.',
    highlights: ['Prise en charge express en zone urbaine', 'Coordination avec hopitaux et cliniques', 'Assistance familles locales et expatriees'],
    tones: ['#2f3854', '#4a7ab7', '#edf3ff'],
    images: [img10, img13, img18],
    mood: 'Rythme urbain, execution rapide',
  },
  fes: {
    eyebrow: 'Agence Patrimoine',
    pitch: 'Service de proximite a Fes avec respect des rites et organisation personnalisee.',
    highlights: ['Preparation du dossier funeraire', 'Transport mortuaire securise', 'Accompagnement discret des familles'],
    tones: ['#31512b', '#7ba65b', '#f0fae8'],
    images: [img11, img14, img20Webp],
    mood: 'Elegance sobre et traditions preservees',
  },
  laayoune: {
    eyebrow: 'Agence Saharienne',
    pitch: 'Couverture de Laayoune et des provinces du sud avec logistique longue distance.',
    highlights: ['Gestion des formalites locales', 'Coordination aeroportuaire et terrestre', 'Assistance continue jour et nuit'],
    tones: ['#6a451c', '#d49a4f', '#fff4de'],
    images: [img15, img9, img17],
    mood: 'Logistique etendue, precision terrain',
  },
  marrakech: {
    eyebrow: 'Agence Gueliz',
    pitch: 'Accompagnement premium a Marrakech pour ceremonies, transfert et assistance administrative.',
    highlights: ['Interlocuteur unique de la famille', 'Prise en charge ceremonie complete', 'Support administratif integral'],
    tones: ['#6a1f25', '#d44a4e', '#ffeef0'],
    images: [img12, img16, img20],
    mood: 'Presence humaine et coordination complete',
  },
  meknes: {
    eyebrow: 'Agence Centre',
    pitch: 'Agence Meknes active 24h/24 pour intervention domicile, hopital et cimetiere.',
    highlights: ['Intervention rapide en centre-ville', 'Transport local et inter-villes', 'Soutien aux familles en deuil'],
    tones: ['#2c3261', '#5f76d8', '#eef1ff'],
    images: [img7, img13, img18],
    mood: 'Disponibilite immediate et maitrise locale',
  },
  nador: {
    eyebrow: 'Agence Oriental Nord',
    pitch: 'Equipe locale a Nador avec prise en charge des demarches et transport specialise.',
    highlights: ['Support deces et inhumation', 'Coordination administrative regionale', 'Disponibilite permanente'],
    tones: ['#214f57', '#45a7b7', '#e8fcff'],
    images: [img19, img11, img14],
    mood: 'Service de proximite sur toute la zone nord-est',
  },
  ouarzazate: {
    eyebrow: 'Agence Draa-Tafilalet',
    pitch: 'Solutions funeraires a Ouarzazate avec couverture des zones etendues de la region.',
    highlights: ['Organisation logistique longue distance', 'Transport adapte a chaque destination', 'Suivi humain et transparent'],
    tones: ['#5a3825', '#b8794b', '#fff0e6'],
    images: [img15, img20, img8],
    mood: 'Grandes distances, meme exigence',
  },
  oujda: {
    eyebrow: 'Agence Oriental Est',
    pitch: 'Agence Oujda pour assistance immediate, transfert et coordination des formalites.',
    highlights: ['Prise en charge administrative complete', 'Accompagnement des proches a chaque etape', 'Intervention rapide en ville et peripherie'],
    tones: ['#1f4f48', '#35a48f', '#e8fff8'],
    images: [img17, img19, img9],
    mood: 'Reactif, organise, accessible',
  },
  rabat: {
    eyebrow: 'Agence Capitale',
    pitch: 'Intervention professionnelle a Rabat avec reactivite, discretion et suivi permanent.',
    highlights: ['Assistance deces 24h/24', 'Gestion de ceremonie sur mesure', 'Relation continue avec la famille'],
    tones: ['#143b63', '#3492c7', '#e9f5ff'],
    images: [img18, img10, img12],
    mood: 'Standard eleve et execution rigoureuse',
  },
  tanger: {
    eyebrow: 'Agence Detroit',
    pitch: 'PFM Tanger accompagne les familles avec un dispositif adapte aux flux nationaux et internationaux.',
    highlights: ['Coordination portuaire et aeroportuaire', 'Prise en charge rapide des urgences', 'Equipe disponible en continu'],
    tones: ['#283655', '#5b85d8', '#f0f4ff'],
    images: [img20Webp, img16, img8],
    mood: 'Connexion nationale et internationale',
  },
  tetouan: {
    eyebrow: 'Agence Rif Mediterranee',
    pitch: 'Service funeraires a Tetouan avec respect, precision et assistance humaine de proximite.',
    highlights: ['Accompagnement des formalites officielles', 'Transport et inhumation organises', 'Suivi 7j/7'],
    tones: ['#24435a', '#3f8cb8', '#e9f7ff'],
    images: [img14, img7, img13],
    mood: 'Accompagnement detaille et rassurant',
  },
}

function normalizeTel(phone) {
  return `+${String(phone || '').replace(/[^\d]/g, '')}`
}

function formatCoordinate(value) {
  return Number(value).toFixed(4)
}

function CityAgencyPage() {
  const { slug } = useParams()
  const agency = useMemo(() => agenciesBySlug[slug], [slug])
  const theme = cityThemes[slug]
  const [heroImage, collageA, collageB] = theme?.images || [img8, img12, img19]
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
  const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agency.address)}`
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
            <p className="city-eyebrow">{theme?.eyebrow || 'Agence PFM'}</p>
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
                <strong>{agency.phones.length + 1}</strong>
                <span>Lignes de contact</span>
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
            <div className="city-hero-gallery">
              <figure>
                <img src={collageA} alt={`Agence ${agency.label} - visuel 1`} />
              </figure>
              <figure>
                <img src={collageB} alt={`Agence ${agency.label} - visuel 2`} />
              </figure>
            </div>
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
                    <a href={`tel:${normalizeTel(phone)}`}>{phone}</a>
                  </li>
                ))}
                <li>
                  <a href={`tel:${normalizeTel(agency.mobile)}`}>{agency.mobile}</a>
                </li>
              </ul>
            </article>

            <article className="city-card">
              <h3>Prestations principales</h3>
              <ul className="city-highlight-list">
                {(theme?.highlights || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
                {!theme?.highlights?.length && (
                  <>
                    <li>Organisation complete des obseques</li>
                    <li>Assistance administrative et formalites</li>
                    <li>Disponibilite immediate 7j/7</li>
                  </>
                )}
              </ul>
            </article>

            <article className="city-card city-banner-card">
              <div>
                <h3>Assistance complete et coordonnee</h3>
                <p>
                  Notre equipe de {agency.label} coordonne formalites, transport, ceremonie et
                  accompagnement familial avec un suivi clair a chaque etape.
                </p>
              </div>
              <img src={collageA} alt={`Equipe assistance ${agency.label}`} />
            </article>

            <article className="city-card">
              <h3>Localisation precise</h3>
              <div className="city-coordinates">
                <p>
                  <strong>Latitude:</strong> {formatCoordinate(agency.lat)}
                </p>
                <p>
                  <strong>Longitude:</strong> {formatCoordinate(agency.lng)}
                </p>
              </div>
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
              <strong>Code agence:</strong> {agency.code}
            </p>
            <p>
              <strong>Region:</strong> {agency.region}
            </p>
            <a href={`tel:${normalizeTel(leadPhone)}`}>Ligne principale</a>
            <a href={`tel:${normalizeTel(agency.mobile)}`}>Mobile urgence</a>
            <a href={mapsQuery} target="_blank" rel="noreferrer">
              Itineraire
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


