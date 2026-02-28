import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agencies, agenciesBySlug } from '../../data/agencies'
import img7 from '../assets/7.webp'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.webp'
import img10 from '../assets/10.jpeg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'
import img17 from '../assets/17.jpeg'
import img18 from '../assets/18.jpg'
import img19 from '../assets/19.webp'
import img20 from '../assets/20.jpg'
import img20Webp from '../assets/20.webp'

const cityThemes = {
  agadir: {
    eyebrow: 'Agence Atlantique',
    pitch: 'Équipe senior basée à Casablanca pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Rapatriement national et international', 'Accompagnement 24h/24, 7j/7', 'Suivi de dossier dedie'],
    tones: ['#0f4c81', '#1f9db6', '#d8f3ff'],
    images: [img8, img12, img19],
    mood: 'Flux oceanique et accompagnement fluide',
  },
  casablanca: {
    eyebrow: 'Agence Metropole',
    pitch: 'Equipe senior basee a Casablanca pour les urgences, cérémonies et transferts immediats.',
    highlights: ['Prise en charge express en zone urbaine', 'Coordination avec hopitaux et cliniques', 'Assistance familles locales et expatriees'],
    tones: ['#2f3854', '#4a7ab7', '#edf3ff'],
    images: [img10, img13, img18],
    mood: 'Rythme urbain, execution rapide',
  },
  fes: {
    eyebrow: 'Agence Patrimoine',
    pitch: 'Équipe senior basée à fes pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['préparation du dossier funeraire', 'Transport mortuaire securise', 'Accompagnement discret des familles'],
    tones: ['#31512b', '#7ba65b', '#f0fae8'],
    images: [img11, img14, img20Webp],
    mood: 'Elegance sobre et traditions preservees',
  },
  laayoune: {
    eyebrow: 'Agence Saharienne',
    pitch: 'Équipe senior basée à laayoune pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Gestion des formalités locales', 'Coordination aeroportuaire et terrestre', 'Assistance continue jour et nuit'],
    tones: ['#6a451c', '#d49a4f', '#fff4de'],
    images: [img15, img9, img17],
    mood: 'Logistique etendue, précision terrain',
  },
  marrakech: {
    eyebrow: 'Agence Gueliz',
    pitch: 'Équipe senior basée à marrakech pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Interlocuteur unique de la famille', 'Prise en charge cérémonie complète', 'Support administratif integral'],
    tones: ['#6a1f25', '#d44a4e', '#ffeef0'],
    images: [img12, img16, img20],
    mood: 'Présence humaine et coordination complète',
  },
  meknés: {
    eyebrow: 'Agence Centre',
    pitch: 'Équipe senior basée à Meknès pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Intervention rapide en centre-ville', 'Transport local et inter-villes', 'Soutien aux familles en deuil'],
    tones: ['#2c3261', '#5f76d8', '#eef1ff'],
    images: [img7, img13, img18],
    mood: 'Disponibilite immédiate et maitrise locale',
  },
  nador: {
    eyebrow: 'Agence Oriental Nord',
    pitch: 'Équipe senior basée à nador pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Support deces et inhumation', 'Coordination administrative regionale', 'Disponibilite permanente'],
    tones: ['#214f57', '#45a7b7', '#e8fcff'],
    images: [img19, img11, img14],
    mood: 'Service de proximite sur toute la zone nord-est',
  },
  ouarzazate: {
    eyebrow: 'Agence Draa-Tafilalet',
    pitch: 'Équipe senior basée à ouarzazate pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Organisation logistique longue distance', 'Transport  adapté a chaque destination', 'Suivi humain et transparent'],
    tones: ['#5a3825', '#b8794b', '#fff0e6'],
    images: [img15, img20, img8],
    mood: 'Grandes distances, meme exigence',
  },
  oujda: {
    eyebrow: 'Agence Oriental Est',
    pitch: 'Équipe senior basée à oujda pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Prise en charge administrative complète', 'Accompagnement des proches a chaque etape', 'Intervention rapide en ville et peripherie'],
    tones: ['#1f4f48', '#35a48f', '#e8fff8'],
    images: [img17, img19, img9],
    mood: 'Reactif, organise, accessible',
  },
  rabat: {
    eyebrow: 'Agence Capitale',
    pitch: 'Équipe senior basée à rabat pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Assistance deces 24/7', 'Gestion de cérémonie sur mesure', 'Relation continue avec la famille'],
    tones: ['#143b63', '#3492c7', '#e9f5ff'],
    images: [img18, img10, img12],
    mood: 'Standard eleve et execution rigoureuse',
  },
  tanger: {
    eyebrow: 'Agence Detroit',
    pitch: 'Équipe senior basée à tanger pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Coordination portuaire et aeroportuaire', 'Prise en charge rapide des urgences', 'Equipe disponible en continu'],
    tones: ['#283655', '#5b85d8', '#f0f4ff'],
    images: [img20Webp, img16, img8],
    mood: 'Connexion nationale et internationale',
  },
  tetouan: {
    eyebrow: 'Agence Rif Mediterranee',
    pitch: 'Équipe senior basée à tetouan pour les urgences, cérémonies et transferts immédiats.',
    tones: ['#24435a', '#3f8cb8', '#e9f7ff'],
    images: [img14, img7, img13],
    mood: 'Accompagnement detaille et rassurant',
  },
}

function normalizeTel(phone) {
  return `+${String(phone || '').replace(/[^\d]/g, '')}`
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
                Contacter Universal PF 
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
                `Notre agence intervient rapidement a ${agency.label} avec une prise en charge complète des obseques.`}
            </p>
            <p className="city-mood">{theme?.mood || 'Service humain et maitrise des formalites'}</p>
            <div className="city-hero-actions">
              <a className="btn btn-primary" href={`tel:${normalizeTel(leadPhone)}`}>
                Appeler l'agence
              </a>
              <a className="btn btn-secondary" href={mapsQuery} target="_blank" rel="noreferrer">
                Ouvrir Google Maps
              </a>
            </div>
            <div className="city-metrics">
              <article>
                <strong>{agency.region}</strong>
                <span>Region couverte</span>
              </article>
              <article>
                <strong>24/7</strong>
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
                    <li>Organisation complète des obsèques </li>
                    <li>Assistance administrative et formalites</li>
                    <li>Disponibilite immédiate 7j/7</li>
                  </>
                )}
              </ul>
            </article>

            <article className="city-card city-banner-card">
              <div>
                <h3>Assistance creative et complète</h3>
                <p>
                  Notre equipe de {agency.label} coordonne formalites, transport, cérémonie et
                  accompagnement familial avec un suivi a chaque etape.
                </p>
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
            <a href={`tel:${normalizeTel(leadPhone)}`}>Ligne principale</a>
            <a href={`tel:${normalizeTel(agency.mobile)}`}>Mobile urgence</a>
            <a href={mapsQuery} target="_blank" rel="noreferrer">
              Itineraire Maps
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

