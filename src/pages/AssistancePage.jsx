import { Link, useLocation } from 'react-router-dom'
import imageHeroOne from '../assets/images/1.png'
import imageHeroTwo from '../assets/images/2.png'
import imageOperation from '../assets/images/18.jpg'
import imageTeam from '../assets/images/20.jpg'
import EditorialShowcase from '../components/EditorialShowcase'

const keyServices = [
  {
    icon: '☎',
    title: 'Reponse immediate 24h/24',
    text: "Un conseiller CMPF repond immediatement et declenche la procedure adaptee a votre situation.",
  },
  {
    icon: '🧭',
    title: 'Coordination complete',
    text: 'Nous gerons assurances, consulats, autorites et partenaires pour fluidifier toutes les etapes.',
  },
  {
    icon: '🤝',
    title: 'Suivi humain et discret',
    text: 'Un interlocuteur unique accompagne la famille du premier appel jusqu a la cloture du dossier.',
  },
]

const interventionSteps = [
  {
    icon: '01',
    title: 'Evaluation de la situation',
    text: 'Analyse de l urgence, verification des informations et orientation immediate de la famille.',
  },
  {
    icon: '02',
    title: 'Activation des equipes',
    text: 'Mobilisation du transport, du personnel terrain et de la cellule administrative CMPF.',
  },
  {
    icon: '03',
    title: 'Formalites et logistique',
    text: 'Constitution du dossier, coordination documentaire et organisation des transferts.',
  },
  {
    icon: '04',
    title: 'Accompagnement jusqu a la cloture',
    text: 'Suivi de la ceremonie, inhumation ou transfert, puis assistance post intervention.',
  },
]

const requiredDocuments = [
  "Piece d identite du defunt",
  'Certificat de deces (si disponible)',
  'Coordonnees du proche referent',
  'Coordonnees assurance / assistance',
  'Coordonnees consulat / ambassade (en cas de rapatriement)',
]

const enterpriseServices = [
  'Permanence telephonique dediee aux entreprises et institutions',
  'Assistance medicale pour evenements et congres',
  'Dispositif d ambulance pour sites industriels',
  'Coordination de transport medical et evacuation',
  'Cellule de supervision et suivi operationnel',
]

const commitments = [
  'Disponibilite continue 24h/24 et 7j/7, sans interruption.',
  'Respect strict des rites, des volontes familiales et de la dignite du defunt.',
  'Transparence des etapes, des delais et des procedures administratives.',
  'Intervention structuree, rapide et controlee sur l ensemble du Maroc.',
]

const coverageCities = [
  'Agadir',
  'Casablanca',
  'Fes',
  'Laayoune',
  'Marrakech',
  'Meknes',
  'Nador',
  'Ouarzazate',
  'Oujda',
  'Rabat',
  'Tanger',
  'Tetouan',
]

const assistanceShowcasePoints = [
  {
    title: 'Toujours disponible pour vous',
    text: 'Cellule active 24h/24 et 7j/7 pour lancer l intervention sans delai.',
  },
  {
    title: 'Intervention claire et rapide',
    text: 'Chaque action est planifiee pour reduire les blocages et rassurer la famille.',
  },
  {
    title: 'Conseils professionnels',
    text: 'Un conseiller explique les etapes pour faciliter les decisions importantes.',
  },
  {
    title: 'Respect de chaque situation',
    text: 'Approche humaine, discrete et adaptee aux rites et aux attentes familiales.',
  },
]

const assistanceShowcaseCards = [
  { title: 'Inhumation', image: imageHeroOne, alt: 'Inhumation CMPF' },
  { title: 'Transfert', image: imageOperation, alt: 'Transfert de corps CMPF' },
  { title: 'Accompagnement', image: imageTeam, alt: 'Accompagnement des familles CMPF' },
]

function AssistancePage() {
  const location = useLocation()
  const isEnterpriseView = location.pathname === '/services-entreprises'

  const pageTitle = isEnterpriseView
    ? 'Services aux entreprises - Assistance immédiate et coordination operationnelle'
    : 'Assistance immédiate 24h/24 - 7j/7'

  const pageIntro = isEnterpriseView
    ? 'CMPF met en place des dispositifs rapides pour les entreprises: assistance medicale, coordination terrain et suivi continu.'
    : "En cas d urgence, un conseiller vous repond immediatement et declenche la prise en charge funeraire, le transfert ou le rapatriement."

  return (
    <div className="ai-page">
      <section className="section ai-hero-section">
        <div className="container ai-hero reveal-on-scroll">
          <div className="ai-hero-copy">
            <span className="ai-eyebrow">Assistance CMPF</span>
            <h1>{pageTitle}</h1>
            <p>{pageIntro}</p>
            <p>
              Notre equipe applique une methode claire pour securiser chaque intervention: orientation
              immediate, verification des pieces, coordination administrative, organisation du
              transport et suivi permanent avec la famille. L objectif est de reduire les delais,
              d eviter les blocages et de maintenir un haut niveau de qualite de service.
            </p>

            <div className="ai-hotline">
              <p>Ligne urgente</p>
              <strong>+212 522 49 16 16</strong>
            </div>

            <div className="ai-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Appeler maintenant
              </a>
              <a href="https://wa.me/212661502763" className="btn btn-secondary">
                WhatsApp direct
              </a>
            </div>

            <div className="ai-hero-metrics">
              <article>
                <strong>24/7</strong>
                <span>Disponibilite continue</span>
              </article>
              <article>
                <strong>12</strong>
                <span>Agences actives</span>
              </article>
              <article>
                <strong>75+</strong>
                <span>Annees d experience</span>
              </article>
            </div>
          </div>

          <div className="ai-hero-media">
            <div className="ai-hero-media-item">
              <img src={imageHeroOne} alt="Pompes Funèbres musulmanes" />
            </div>
            <div className="ai-hero-media-item">
              <img src={imageHeroTwo} alt="Pompes Funèbres non musulmanes" />
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-points-section">
        <div className="container ai-points-grid">
          {keyServices.map((item) => (
            <article key={item.title} className="ai-point-card reveal-on-scroll">
              <span className="ai-inline-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <EditorialShowcase
        className="editorial-showcase-assistance"
        heading="Inhumation, transfert, accompagnement :"
        accent="notre eclairage immediate"
        points={assistanceShowcasePoints}
        cards={assistanceShowcaseCards}
      />

      <section className="section ai-commitments-section">
        <div className="container ai-commitments reveal-on-scroll">
          <div className="ai-section-head">
            <span className="ai-eyebrow">Engagements</span>
            <h2>Une assistance organisee avec exigence et clarte</h2>
            <p>
              CMPF maintient des standards eleves de qualite operationnelle afin de garantir une
              prise en charge fiable dans toutes les situations.
            </p>
          </div>
          <ul className="ai-commitments-list">
            {commitments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section ai-process-section">
        <div className="container ai-process reveal-on-scroll">
          <div className="ai-section-head">
            <span className="ai-eyebrow">Intervention terrain</span>
            <h2>Une methode claire pour agir vite et bien</h2>
            <p>
              Chaque intervention suit un schema operationnel precis afin de proteger les familles
              contre les retards et les incomprehensions.
            </p>
          </div>

          <div className="ai-process-layout">
            <div className="ai-process-image">
              <img src={imageOperation} alt="Intervention rapide CMPF" />
            </div>

            <div className="ai-process-steps">
              {interventionSteps.map((step) => (
                <article key={step.title} className="ai-step-card">
                  <span className="ai-step-index">{step.icon}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-docs-section">
        <div className="container ai-docs reveal-on-scroll">
          <div className="ai-docs-card">
            <h2>Documents a preparer</h2>
            <p>
              Pour accelerer le traitement du dossier, notre equipe recommande de preparer ces
              elements. CMPF vous accompagne ensuite pour valider et completer chaque piece.
            </p>
            <ul>
              {requiredDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </div>

          <div className="ai-team-card">
            <img src={imageTeam} alt="Equipe de coordination CMPF" />
            <div>
              <h3>Coordination continue</h3>
              <p>
                Nos equipes suivent chaque dossier en temps reel pour garantir qualite, securite et
                rapidite d execution.
              </p>
              <p>
                Un referent CMPF reste disponible pour informer la famille et confirmer les etapes
                valides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-enterprise-section">
        <div className="container ai-enterprise reveal-on-scroll">
          <div className="ai-section-head">
            <span className="ai-eyebrow">Services aux entreprises</span>
            <h2>Dispositifs operationnels pour sites, evenements et institutions</h2>
          </div>
          <div className="ai-enterprise-grid">
            {enterpriseServices.map((service) => (
              <article key={service} className="ai-enterprise-item">
                {service}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-coverage-section">
        <div className="container ai-coverage reveal-on-scroll">
          <div className="ai-section-head">
            <h2>Couverture nationale</h2>
            <p>Nos equipes interviennent dans les principales villes du Maroc.</p>
          </div>

          <div className="ai-cities">
            {coverageCities.map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>

          <div className="ai-coverage-actions">
            <Link to="/#nos-agences" className="btn btn-secondary">
              Voir toutes les agences
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AssistancePage


