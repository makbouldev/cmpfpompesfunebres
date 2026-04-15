import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agencies, agenciesBySlug, normalizeAgencySlug } from '../data/agencies'
import { citySeoBySlug } from '../data/citySeo'
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
    images: [img7, img8],
    mood: 'Flux océanique et accompagnement fluide',
  },
  casablanca: {
    eyebrow: 'Agence Metropole',
    pitch: 'Équipe senior basée à Casablanca pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Prise en charge express en zone urbaine', 'Coordination avec hôpitaux et cliniques', 'Assistance familles locales et expatriées'],
    tones: ['#2f3854', '#4a7ab7', '#edf3ff'],
    images: [img7, img8],
    mood: 'Rythme urbain, exécution rapide',
  },
  fes: {
    eyebrow: 'Agence Patrimoine',
    pitch: 'Équipe senior basée à Fès pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Préparation du dossier funéraire', 'Transport mortuaire sécurisé', 'Accompagnement discret des familles'],
    tones: ['#31512b', '#7ba65b', '#f0fae8'],
    images: [img7, img8],
    mood: 'Élégance sobre et traditions préservées',
  },
  laayoune: {
    eyebrow: 'Agence Saharienne',
    pitch: 'Équipe senior basée à Laâyoune pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Gestion des formalités locales', 'Coordination aéroportuaire et terrestre', 'Assistance continue jour et nuit'],
    tones: ['#6a451c', '#d49a4f', '#fff4de'],
    images: [img7, img8],
    mood: 'Logistique étendue, précision terrain',
  },
  marrakech: {
    eyebrow: 'Agence Gueliz',
    pitch: 'Équipe senior basée à Marrakech pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Interlocuteur unique de la famille', 'Prise en charge cérémonie complète', 'Support administratif intégral'],
    tones: ['#6a1f25', '#d44a4e', '#ffeef0'],
    images: [img7, img8],
    mood: 'Présence humaine et coordination complète',
  },
  meknes: {
    eyebrow: 'Agence Centre',
    pitch: 'Équipe senior basée à Meknès pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Intervention rapide en centre-ville', 'Transport local et inter-villes', 'Soutien aux familles en deuil'],
    tones: ['#2c3261', '#5f76d8', '#eef1ff'],
    images: [img7, img8],
    mood: 'Disponibilité immédiate et maîtrise locale',
  },
  nador: {
    eyebrow: 'Agence Oriental Nord',
    pitch: 'Équipe senior basée à Nador pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Support décès et inhumation', 'Coordination administrative régionale', 'Disponibilité permanente'],
    tones: ['#214f57', '#45a7b7', '#e8fcff'],
    images: [img7, img8],
    mood: 'Service de proximite sur toute la zone nord-est',
  },
  ouarzazate: {
    eyebrow: 'Agence Draa-Tafilalet',
    pitch: 'Équipe senior basée à Ouarzazate pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Organisation logistique longue distance', 'Transport adapté à chaque destination', 'Suivi humain et transparent'],
    tones: ['#5a3825', '#b8794b', '#fff0e6'],
    images: [img7, img8],
    mood: 'Grandes distances, même exigence',
  },
  oujda: {
    eyebrow: 'Agence Oriental Est',
    pitch: 'Équipe senior basée à Oujda pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Prise en charge administrative complète', 'Accompagnement des proches à chaque étape', 'Intervention rapide en ville et périphérie'],
    tones: ['#1f4f48', '#35a48f', '#e8fff8'],
    images: [img7, img8],
    mood: 'Réactif, organisé, accessible',
  },
  rabat: {
    eyebrow: 'Agence Capitale',
    pitch: 'Équipe senior basée à Rabat pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Assistance décès 24/7', 'Gestion de cérémonie sur mesure', 'Relation continue avec la famille'],
    tones: ['#143b63', '#3492c7', '#e9f5ff'],
    images: [img7, img8],
    mood: 'Standard élevé et exécution rigoureuse',
  },
  tanger: {
    eyebrow: 'Agence Detroit',
    pitch: 'Équipe senior basée à tanger pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Coordination portuaire et aéroportuaire', 'Prise en charge rapide des urgences', 'Équipe disponible en continu'],
    tones: ['#283655', '#5b85d8', '#f0f4ff'],
    images: [img7, img8],
    mood: 'Connexion nationale et internationale',
  },
  tetouan: {
    eyebrow: 'Agence Rif Méditerranée',
    pitch: 'Équipe senior basée à Tetouan pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Accompagnement des formalités officielles', 'Transport et inhumation organisés', 'Suivi 7j/7'],
    tones: ['#24435a', '#3f8cb8', '#e9f7ff'],
    images: [img7, img8],
    mood: 'Accompagnement détaillé et rassurant',
  },
  dakhla: {
    eyebrow: 'Agence Grand Sud',
    pitch: 'Équipe senior basée à Dakhla pour les urgences, cérémonies et transferts immédiats.',
    highlights: ['Intervention rapide sur Dakhla et environs', 'Coordination administrative complète', 'Disponibilité continue 24h/24'],
    tones: ['#1f4d5d', '#2f8ea5', '#e9fbff'],
    images: [img7, img8],
    mood: 'Couverture sud, accompagnement continu',
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
  "Universal PF assure une prise en charge complète et coordonnée : déclaration, formalités, transport, cérémonie, inhumation et suivi de la famille. Nos équipes interviennent avec la même exigence de qualité dans toutes les villes."

const semanticKeywords = [
  'pompes funèbres',
  'obsèques',
  'service funéraire',
  'rapatriement',
  'transport funéraire',
  'marbrerie',
  'assistance 24/7',
  'accompagnement des familles',
]

const internalLinkText = (label) => `Pompes funèbres ${label}`

const buildCityLongSeo = ({ agency, theme, leadPhone }) => {
  const city = agency.label
  const region = agency.region
  const address = agency.address
  const localMood = theme?.mood || 'service humain et rigoureux'
  const localEyebrow = theme?.eyebrow || `Agence locale de ${city}`
  const highlights = theme?.highlights?.join(', ') || 'transport funeraire, formalites, ceremonies'
  const keywordPrimary = `Pompes Funebres ${city}`
  const keywordServices = `services funeraires ${city}`
  const keywordAgency = 'agence funeraire Maroc'

  return {
    intro:
      `${keywordPrimary} : lorsque survient un deces, les familles de ${city} doivent agir vite tout en ` +
      `gardant la dignite et le respect. ${localEyebrow} signifie une presence reelle, proche du terrain. ` +
      `Notre ${keywordAgency} accompagne chaque famille avec une approche ` +
      `humaine, claire et professionnelle, en expliquant les etapes et en reduisant la pression. A ${city}, ` +
      `nous intervenons des le premier appel pour coordonner les urgences et rassurer les proches. Notre mission ` +
      `est d'assurer une prise en charge serieuse, respectueuse des rites, et adaptee a la realite du Maroc.`,
    services:
      `Les ${keywordServices} couvrent l'ensemble des besoins : transport funeraire local et national, ` +
      `rapatriement, organisation des obseques, coordination avec hopitaux et cimetieres, assistance ` +
      `administrative, marbrerie, plaques funeraires et fleurs. Chaque prestation est adaptee au contexte de ` +
      `${city} et aux attentes des familles. Nous integrons les details locaux, la region ${region} et les ` +
      `contraintes de delai pour offrir une ceremonie digne, organisee et sans surcharge pour les proches.`,
    context:
      `${city} impose un rythme particulier : familles parfois dispersees, urgences medicales, ` +
      `deplacements rapides et formalites strictes. Notre equipe locale connait les procedures et les acteurs ` +
      `du terrain, ce qui permet d'eviter les retards et de proteger la serenite des familles. Nous integrons ` +
      `les informations essentielles comme l'adresse ${address} et la region ${region} pour une coordination ` +
      `fluide et une organisation realiste. Notre approche est guidee par ${localMood}.`,
    why:
      `Choisir notre agence a ${city}, c'est compter sur une equipe experimentee, disponible 24/7 et ` +
      `habituée aux urgences. Nous travaillons avec un interlocuteur unique pour eviter la confusion. ` +
      `Notre approche est fondée sur la confiance, la transparence des delais, et un respect strict des rites. ` +
      `Les familles de ${city} savent qu'elles peuvent compter sur un accompagnement humain et une organisation ` +
      `rigoureuse, du debut a la fin.`,
    trust:
      `Nous mettons l'accent sur la qualite du service : explications claires, suivi constant, et ` +
      `presence reelle sur le terrain. Notre ${keywordAgency} s'engage sur la discretion, la disponibilite ` +
      `et la personnalisation des ceremonies. Les points forts a ${city} incluent ${highlights}, ainsi qu'un ` +
      `soutien administratif fiable et une coordination complete des etapes.`,
    availability:
      `Disponibilite 24/7 a ${city} : nous repondons jour et nuit, y compris weekends et jours feries. ` +
      `Qu'il s'agisse d'un transport urgent, d'une question administrative ou d'une ceremonie a organiser, ` +
      `notre equipe agit rapidement et avec calme. Cette presence continue est essentielle pour les familles ` +
      `du Maroc, et elle fait partie de notre engagement quotidien.`,
    contact:
      `Contact rapide a ${city} : appelez-nous des maintenant pour une assistance immediate. Nous vous ` +
      `guidons pas a pas et coordonnons chaque etape avec respect. Pour un besoin urgent, vous pouvez appeler ` +
      `${leadPhone || 'notre equipe'} ou contacter notre ${keywordAgency} via la page de contact.`,
    faq: [
      {
        q: `Quels ${keywordServices} proposez-vous ?`,
        a: 'Transport funeraire, obseques, rapatriement, formalites, marbrerie, plaques et fleurs.',
      },
      {
        q: `Etes-vous disponibles 24/7 a ${city} ?`,
        a: 'Oui, notre permanence est active jour et nuit pour les urgences.',
      },
      {
        q: `Organisez-vous les ceremonies musulmanes et non musulmanes a ${city} ?`,
        a: 'Oui, nous respectons les rites demandes par chaque famille.',
      },
      {
        q: `Pourquoi choisir votre ${keywordAgency} ?`,
        a: 'Pour notre experience, notre reactivite et notre accompagnement humain.',
      },
    ],
  }
}

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
  const seoCopy = citySeoBySlug[normalizedSlug]
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://pompesfunebresmaroc.com').replace(/\/+$/, '')
  const canonicalUrl = `${siteUrl}/villes/${agency.slug}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FuneralHome',
    name: `Universal PF - Pompes funèbres ${agency.label}`,
    url: canonicalUrl,
    telephone: leadPhone ? normalizeTel(leadPhone) : undefined,
    areaServed: ['MA', 'Morocco', agency.label, agency.region],
    address: {
      '@type': 'PostalAddress',
      streetAddress: agency.address,
      addressLocality: agency.label,
      addressRegion: agency.region,
      addressCountry: 'MA',
    },
  }
  const descriptionLine =
    seoCopy?.description ||
    `Pompes funèbres ${agency.label} au Maroc : assistance 24/7, obsèques, rapatriement et accompagnement humain.`
  const secondaryLine = theme?.pitch || `Équipe locale à ${agency.label} disponible 24h/24 et 7j/7.`
  const serviceLine = theme?.highlights?.length
    ? theme.highlights.join(' · ')
    : 'Obsèques, transport funéraire, marbrerie et assistance administrative.'
  const cssVars = {
    '--city-primary': theme?.tones?.[0] || '#1b4e7f',
    '--city-secondary': theme?.tones?.[1] || '#6f3e8f',
    '--city-soft': theme?.tones?.[2] || '#edf3fb',
  }

  return (
    <section className="section city-agency-page" style={cssVars}>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="container city-agency-shell reveal-skip">
        <div className="city-agency-hero">
          <div className="city-hero-copy">
            <h1>
              Pompes funèbres {agency.label}
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
                <strong>24/7</strong>
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
          <div className="city-main-column">
            <div className="city-seo-block">
              <h2>{seoCopy?.h2 || `Pompes funèbres ${agency.label} : service local au Maroc`}</h2>
              <p>
                {descriptionLine} {secondaryLine}
              </p>
              <p className="city-seo-services">
                <strong>Services clés à {agency.label} :</strong> {serviceLine}
              </p>
              <div className="city-seo-columns">
                <div>
                  <h3>{seoCopy?.h3a || `Organisation des obsèques à ${agency.label}`}</h3>
                  <p>
                    Notre équipe Universal PF à {agency.label} intervient sur place pour l'organisation des
                    obsèques, les cérémonies musulmanes et non musulmanes, ainsi que la coordination complète
                    avec les proches au Maroc.
                  </p>
                </div>
                <div>
                  <h3>{seoCopy?.h3b || `Rapatriement et assistance 24/7 à ${agency.label}`}</h3>
                  <p>
                    Assistance immédiate 24h/24 et 7j/7, transport funéraire, rapatriement national et
                    international, avec un suivi administratif fiable et humain pour les familles de {agency.label}.
                  </p>
                </div>
              </div>
              <p className="city-seo-trust">
                <strong>Pourquoi Universal PF :</strong> disponibilité continue, interlocuteur unique, respect
                des rites et professionnalisme reconnu dans tout le Maroc.
              </p>
              <p className="city-seo-contact">
                Besoin d'une assistance immédiate à {agency.label} ? Appelez le{' '}
                <a href={`tel:${normalizeTel(leadPhone)}`}>{leadPhone}</a> ou contactez-nous via{' '}
                <Link to="/contact">notre page contact</Link>.
              </p>
            </div>

            {(() => {
              const longSeo = buildCityLongSeo({ agency, theme, leadPhone })
              return (
                <div className="city-long-seo">
                  <h2>Nos services funéraires à {agency.label}</h2>
                  <p>{longSeo.intro}</p>
                  <p>{longSeo.services}</p>
                  <p>{longSeo.context}</p>

                  <h2>Pourquoi choisir notre agence à {agency.label}</h2>
                  <p>{longSeo.why}</p>
                  <p>{longSeo.trust}</p>

                  <h2>Disponibilité 24/7 à {agency.label}</h2>
                  <p>{longSeo.availability}</p>

                  <h2>Contact rapide à {agency.label}</h2>
                  <p>{longSeo.contact}</p>

                  <div className="city-faq">
                    <h2>FAQ - Pompes funèbres {agency.label}</h2>
                    {longSeo.faq?.map((item) => (
                      <div key={item.q} className="city-faq-item">
                        <h3>{item.q}</h3>
                        <p>{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}

            <div className="city-main-grid">
              <article className="city-card">
                <h3>Coordonnées de l'agence</h3>
                <p>{agency.address}</p>
                <ul className="city-phone-list">
                  {agency.phones.map((phone, index) => (
                    <li key={phone}>
                      <a className="city-contact-link" href={`tel:${normalizeTel(phone)}`}>
                        <span className="city-contact-icon">
                          <PhoneIcon />
                        </span>
                        <span>
                          {index === 0 ? 'Fix: ' : index === 1 ? 'Tél: ' : 'WhatsApp: '}
                          {phone}
                        </span>
                      </a>
                    </li>
                  ))}
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
          </div>

          <aside className="city-side-panel">
            <h3>Infos rapides</h3>
            <p>
              <strong>Ville:</strong> {agency.label}
            </p>
            <p>
              <strong>Région:</strong> {agency.region}
            </p>
            <p>
              <strong>Maroc:</strong> Service funéraire local disponible 24/7.
            </p>
            <Link className="city-contact-link" to="/">
              <span className="city-contact-icon">
                <MapIcon />
              </span>
              <span>Pompes funèbres au Maroc</span>
            </Link>
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
                      <Link to={`/villes/${item.slug}`}>{internalLinkText(item.label)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="city-nearby">
              <h4>Villes couvertes au Maroc</h4>
              <ul>
                {agencies
                  .filter((item) => item.slug !== agency.slug)
                  .map((item) => (
                    <li key={item.slug}>
                      <Link to={`/villes/${item.slug}`}>{internalLinkText(item.label)}</Link>
                    </li>
                  ))}
              </ul>
            </div>

            <p className="city-seo-keywords">
              {semanticKeywords.map((term) => (
                <span key={term}>{term} · </span>
              ))}
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CityAgencyPage



