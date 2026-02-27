import { Link, useLocation } from 'react-router-dom'
import imageHeroOne from '../assets/images/20.webp'
import imageOperation from '../assets/images/18.jpg'
import imageTeam from '../assets/images/20.jpg'

const keyServices = [
  {
    icon: '☎',
    title: 'Réponse immédiate 24h/24',
    text: 'Un conseiller PFM répond immédiatement et déclenche la procédure adaptée à votre situation.',
  },
  {
    icon: '🧭',
    title: 'Coordination complète',
    text: 'Nous gérons assurances, consulats, autorités et partenaires pour fluidifier toutes les étapes.',
  },
  {
    icon: '🤝',
    title: 'Suivi humain et discret',
    text: "Un interlocuteur unique accompagne la famille du premier appel jusqu'à la clôture du dossier.",
  },
]

const interventionSteps = [
  {
    icon: '01',
    title: 'Évaluation de la situation',
    text: "Analyse de l'urgence, vérification des informations et orientation immédiate de la famille.",
  },
  {
    icon: '02',
    title: 'Activation des équipes',
    text: 'Mobilisation du transport, du personnel terrain et de la cellule administrative PFM.',
  },
  {
    icon: '03',
    title: 'formalités et logistique',
    text: 'Constitution du dossier, coordination documentaire et organisation des transferts.',
  },
  {
    icon: '04',
    title: "Accompagnement jusqu'à la clôture",
    text: 'Suivi de la cérémonie, inhumation ou transfert, puis assistance post-intervention.',
  },
]

const requiredDocuments = [
  "Pièce d'identité du défunt",
  'Certificat de décès (si disponible)',
  'Coordonnées du proche référent',
  'Coordonnées assurance / assistance',
  'Coordonnées consulat / ambassade (en cas de rapatriement)',
]

const enterpriseServices = [
  'Permanence téléphonique dédiée aux entreprises et institutions',
  'Assistance médicale pour événements et congrès',
  "Dispositif d'ambulance pour sites industriels",
  'Coordination de transport médical et évacuation',
  'Cellule de supervision et suivi opérationnel',
]

const commitments = [
  'Disponibilité continue 24h/24 et 7j/7, sans interruption.',
  'Respect strict des rites, des volontés familiales et de la dignité du défunt.',
  'Transparence des étapes, des délais et des procédures administratives.',
  "Intervention structurée, rapide et contrôlée sur l'ensemble du Maroc.",
]

const coverageCities = [
  'Agadir',
  'Casablanca',
  'Fes',
  'Laayoune',
  'Marrakech',
  'Meknès',
  'Nador',
  'Ouarzazate',
  'Oujda',
  'Rabat',
  'Tanger',
  'Tetouan',
]


function AssistancePage() {
  const location = useLocation()
  const isEnterpriseView = location.pathname === '/services-entreprises'

  const pageTitle = isEnterpriseView
    ? 'Services aux entreprises - Assistance immédiate et coordination opérationnelle'
    : 'Assistance immédiate 24h/24 - 7j/7'

  const pageIntro = isEnterpriseView
    ? 'PFM met en place des dispositifs rapides pour les entreprises : assistance médicale, coordination terrain et suivi continu.'
    : "En cas d'urgence, un conseiller vous répond immédiatement et déclenche la prise en charge funéraire, le transfert ou le rapatriement."

  return (
    <div className="ai-page">
      <section className="section ai-hero-section">
        <div className="container ai-hero reveal-on-scroll">
          <div className="ai-hero-copy">
            <span className="ai-eyebrow">Assistance PFM</span>
            <h1>{pageTitle}</h1>
            <p>{pageIntro}</p>
            <p>
              Notre équipe applique une méthode pour sécuriser chaque intervention : orientation
              immédiate, vérification des pièces, coordination administrative, organisation du
              transport et suivi permanent avec la famille. L'objectif est de réduire les délais,
              d'éviter les blocages et de maintenir un haut niveau de qualité de service.
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
                <span>Disponibilité continue</span>
              </article>
              <article>
                <strong>13+</strong>
                <span>Agences actives</span>
              </article>
              <article>
                <strong>75+</strong>
                <span>Années d'expérience</span>
              </article>
            </div>
          </div>

          <div className="ai-hero-media">
            <div className="ai-hero-media-item">
              <img src={imageHeroOne} alt="Pompes Funèbres musulmanes" />
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

      <section className="section ai-commitments-section">
        <div className="container ai-commitments reveal-on-scroll">
          <div className="ai-section-head">
            <span className="ai-eyebrow">Engagements</span>
            <h2>Une assistance organisée avec exigence et clarté</h2>
            <p>
              PFM maintient des standards élevés de qualité opérationnelle afin de garantir une
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
            <h2>Une méthode pour agir vite et bien</h2>
            <p>
              Chaque intervention suit un schéma opérationnel précis afin de protéger les familles
              contre les retards et les incompréhensions.
            </p>
          </div>

          <div className="ai-process-layout">
            <div className="ai-process-image">
              <img src={imageOperation} alt="Intervention rapide PFM" />
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
            <h2>Documents à préparer</h2>
            <p>
              Pour accélérer le traitement du dossier, notre équipe recommande de préparer ces
              éléments. PFM vous accompagne ensuite pour valider et compléter chaque pièce.
            </p>
            <ul>
              {requiredDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </div>

          <div className="ai-team-card">
            <img src={imageTeam} alt="Équipe de coordination PFM" />
            <div>
              <h3>Coordination continue</h3>
              <p>
                Nos équipes suivent chaque dossier en temps réel pour garantir qualité, sécurité et
                rapidité d'exécution.
              </p>
              <p>
                Un référent PFM reste disponible pour informer la famille et confirmer les étapes
                validées.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-enterprise-section">
        <div className="container ai-enterprise reveal-on-scroll">
          <div className="ai-section-head">
            <span className="ai-eyebrow">Services aux entreprises</span>
            <h2>Dispositifs opérationnels pour sites, événements et institutions</h2>
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
            <p>Nos équipes interviennent dans les principales villes du Maroc.</p>
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



