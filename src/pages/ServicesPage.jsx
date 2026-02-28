import { Link } from 'react-router-dom'
import imageHeroOne from '../assets/images/7.webp'
import imageHeroTwo from '../assets/images/18.jpg'
import imageTeam from '../assets/images/20.jpg'
import EditorialShowcase from '../components/EditorialShowcase'

const enterpriseOffers = [
  {
    tag: 'Ligne directe',
    title: 'Permanence entreprise 24/7',
    text: "Ligne dédiée aux assureurs, sociétés d'assistance et institutions pour un traitement rapide des dossiers..",
  },
  {
    tag: 'Rapatriement',
    title: 'Gestion complète des rapatriements',
    text: 'Coordination administrative, logistique aéroportuaire et suivi terrain pour les dossiers nationaux et internationaux.',
  },
  {
    tag: 'Pilotage',
    title: 'Supervision multi-sites',
    text: 'Pilotage centralisé des interventions pour groupes, filiales et réseaux avec suivi unifié.',
  },
  {
    tag: 'Référent',
    title: 'Interface opérationnelle unique',
    text: 'Un référent Universal PF pour fluidifier les échanges entre entreprise, assistance, famille et autorités.',
  },
]

const enterpriseProcess = [
  {
    step: '01',
    title: 'Ouverture dossier',
    text: 'Réception de la demande entreprise, vérification des informations et qualification immédiate du besoin.',
  },
  {
    step: '02',
    title: 'Activation opérationnelle',
    text: 'Mobilisation des équipes terrain, démarrage des formalités et coordination des acteurs concernés.',
  },
  {
    step: '03',
    title: 'Exécution et suivi',
    text: "Pilotage en temps réel de chaque étape avec points d'avancement transmis au contact entreprise.",
  },
  {
    step: '04',
    title: 'Clôture et suivi',
    text: 'Validation finale, synthèse du dossier et retour structuré pour assurer traçabilité et qualité.',
  },
]

const enterpriseSectors = [
  "Compagnies d'assurance et d'assistance",
  'Banques et institutions financières',
  'Ambassades, consulats et organismes publics',
  'Groupes industriels et sites de production',
  'Entreprises de transport, tourisme et mobilité',
  'Collectivités et administrations',
]

const enterpriseShowcasePoints = []

const enterpriseShowcaseCards = [
  { title: 'Inhumation', image: imageHeroOne, alt: 'Inhumation entreprise Universal PF ' },
  { title: 'Rapatriement', image: imageHeroTwo, alt: 'Rapatriement entreprise Universal PF ' },
  { title: 'Accompagnement', image: imageTeam, alt: 'Accompagnement famille et entreprise Universal PF ' },
]

function ServicesEntreprisePage() {
  return (
    <div className="se-page">
      <section className="section se-hero-section">
        <div className="container se-hero reveal-on-scroll">
          <div className="se-hero-copy">
            <span className="se-eyebrow">Services-entreprises</span>
            <h1>Dispositif Universal PF pour entreprises, institutions et assureurs</h1>
            <p>
              Page dédiée exclusivement aux services-entreprises : coordination opérationnelle,
              gestion des rapatriements, formalités administratives et exécution terrain sous
              pilotage professionnel.
            </p>
            <p>
              Reconnue parmi les structures funéraires les plus implantées au Maroc, Universal PF s'appuie
              sur une expérience historique, un réseau national et une capacité de mobilisation
              immédiate pour les dossiers sensibles des entreprises.
            </p>
            <p>
              Notre cellule entreprises assure une communication, une intervention rapide,
              une gouvernance opérationnelle rigoureuse et un suivi de dossier structuré de
              l'ouverture à la clôture.
            </p>
            <div className="se-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Contacter la cellule entreprise
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Ouvrir un dossier pro
              </Link>
            </div>
          </div>

          <aside className="se-hero-panel">
            <h3>Cellule entreprises</h3>
            <div className="se-panel-list">
              <p>
                <span>Téléphone</span>
                <a href="tel:+212522491616">+212 522 49 16 16</a>
              </p>
              <p>
                <span>E-mail</span>
                <a href="mailto:cmpfcasa@cmpfassistance.ma">cmpfcasa@cmpfassistance.ma</a>
              </p>
              <p>
                <span>Disponibilité</span>
                <strong>24h/24 et 7j/7</strong>
              </p>
            </div>
            <Link className="se-panel-wa" to="/contact">
              Contactez-nous
            </Link>
          </aside>
        </div>
      </section>

      <EditorialShowcase
        className="editorial-showcase-enterprise"
        heading="Inhumation, rapatriement, accompagnement :"
        accent="notre expertise entreprises"
        points={enterpriseShowcasePoints}
        cards={enterpriseShowcaseCards}
      />

      <section className="section se-offers-section">
        <div className="container se-offers-wrap reveal-on-scroll">
          <div className="se-head">
            <span className="se-eyebrow">Offre opérationnelle</span>
            <h2>Services-entreprises structurés pour exécution rapide</h2>
            <p>
              Universal PF propose une organisation professionnelle orientée résultat : traitement des urgences,
              maîtrise administrative, coordination multi-intervenants et standard de qualité constant.
            </p>
          </div>
          <div className="se-offers-grid">
            {enterpriseOffers.map((item) => (
              <article key={item.title} className="se-offer-card">
                <span className="se-offer-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section se-process-section">
        <div className="container se-process-layout reveal-on-scroll">
          <div className="se-process-flow">
            <div className="se-head">
              <span className="se-eyebrow">Processus entreprise</span>
              <h2>Une méthode pour chaque dossier professionnel</h2>
            </div>
            <div className="se-steps-grid">
              {enterpriseProcess.map((item) => (
                <article key={item.title} className="se-step-card">
                  <span className="se-step-index">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section se-sectors-section">
        <div className="container se-sectors-wrap reveal-on-scroll">
          <div className="se-head">
            <span className="se-eyebrow">Secteurs accompagnés</span>
            <h2>Couverture multi-secteurs pour les besoins des entreprises</h2>
            <p>
              De l'assurance au secteur public, Universal PF intervient avec le même niveau d'exigence :
              réactivité, conformité, traçabilité et qualité de service.
            </p>
          </div>
          <div className="se-sectors-list">
            {enterpriseSectors.map((sector) => (
              <span key={sector}>{sector}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section se-banner-section">
        <div className="container se-banner reveal-on-scroll">
          <div className="se-banner-copy">
            <h2>Besoin d'un dispositif services-entreprises adapté à votre structure ?</h2>
            <p>
              Universal PF construit avec vous un mode opératoire avec référent unique, engagement
              de délai de réponse, suivi régulier et engagement qualité mesurable.
            </p>
            <p>
              Objectif : garantir à votre organisation un partenaire solide, réactif et présent sur
              tout le territoire marocain.
            </p>
            <div className="se-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Planifier un entretien
              </Link>
              <a href="tel:+212522491616" className="btn btn-secondary">
                Appel direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesEntreprisePage



