import { Link } from 'react-router-dom'
import imageHeroOne from '../assets/images/12.jpg'
import imageHeroTwo from '../assets/images/18.jpg'
import imageTeam from '../assets/images/20.jpg'
import EditorialShowcase from '../components/EditorialShowcase'
import logoAxa from '../assets/partners/axa.svg'
import logoRma from '../assets/partners/rma.svg'
import logoSaham from '../assets/partners/saham.svg'
import logoSanlam from '../assets/partners/sanlam.svg'
import logoWafaIma from '../assets/partners/wafa-ima.svg'

const enterpriseOffers = [
  {
    tag: 'Ligne directe',
    title: 'Permanence entreprise 24h/24',
    text: 'Ligne dediee aux DRH, assureurs, assistances et institutions pour declencher rapidement chaque dossier.',
  },
  {
    tag: 'Rapatriement',
    title: 'Gestion complete des rapatriements',
    text: 'Coordination administrative, logistique aeroportuaire et suivi terrain pour les dossiers nationaux et internationaux.',
  },
  {
    tag: 'Pilotage',
    title: 'Supervision multi-sites',
    text: 'Pilotage centralise des interventions pour groupes, filiales et reseaux avec suivi unifie.',
  },
  {
    tag: 'Referent',
    title: 'Interface operationnelle unique',
    text: 'Un referent PFM pour fluidifier les echanges entre entreprise, assistance, famille et autorites.',
  },
]

const enterpriseProcess = [
  {
    step: '01',
    title: 'Ouverture dossier',
    text: 'Reception de la demande entreprise, verification des informations et qualification immediate du besoin.',
  },
  {
    step: '02',
    title: 'Activation operationnelle',
    text: 'Mobilisation des equipes terrain, demarrage des formalites et coordination des acteurs concernes.',
  },
  {
    step: '03',
    title: 'Execution et suivi',
    text: 'Pilotage en temps reel de chaque etape avec points d avancement transmis au contact entreprise.',
  },
  {
    step: '04',
    title: 'Cloture et suivi',
    text: 'Validation finale, synthese du dossier et retour structure pour assurer tracabilite et qualite.',
  },
]

const enterpriseSectors = [
  'Compagnies d assurance et d assistance',
  'Banques et institutions financieres',
  'Ambassades, consulats et organismes publics',
  'Groupes industriels et sites de production',
  'Entreprises de transport, tourisme et mobilite',
  'Collectivites et administrations',
]

const enterpriseKpis = [
  { value: '24/7', label: 'Permanence entreprises' },
  { value: '< 15 min', label: 'Temps de prise en charge initiale' },
  { value: '12', label: 'Agences mobilisables' },
  { value: '1', label: 'Referent dossier unique' },
]

const enterpriseShowcasePoints = [
  {
    title: 'Toujours disponible pour vous',
    text: 'Une permanence dediee aux entreprises, active 24h/24 et 7j/7.',
  },
  {
    title: 'Coordination de bout en bout',
    text: 'PFM organise les etapes du dossier avec vos equipes et partenaires.',
  },
  {
    title: 'Conseil operationnel clair',
    text: 'Nos conseillers guident vos decisions avec un plan d action precis.',
  },
  {
    title: 'Respect et rigueur',
    text: 'Chaque intervention est conduite avec discretion, conformite et qualite.',
  },
]

const enterpriseShowcaseCards = [
  { title: 'Inhumation', image: imageHeroOne, alt: 'Inhumation entreprise PFM' },
  { title: 'Rapatriement', image: imageHeroTwo, alt: 'Rapatriement entreprise PFM' },
  { title: 'Accompagnement', image: imageTeam, alt: 'Accompagnement famille et entreprise PFM' },
]

const trustCompanies = [
  { logo: logoAxa, name: 'AXA Assistance' },
  { logo: logoRma, name: 'RMA Assistance' },
  { logo: logoSaham, name: 'SAHAM Assistance' },
  { logo: logoSanlam, name: 'SANLAM Assistance' },
  { logo: logoWafaIma, name: 'Wafa IMA Assistance' },
]

function ServicesEntreprisePage() {
  return (
    <div className="se-page">
      <section className="section se-hero-section">
        <div className="container se-hero reveal-on-scroll">
          <div className="se-hero-copy">
            <span className="se-eyebrow">Services-entreprises</span>
            <h1>Dispositif PFM pour entreprises, institutions et assureurs</h1>
            <p>
              Page dediee exclusivement aux services-entreprises: coordination operationnelle,
              gestion des rapatriements, formalites administratives et execution terrain sous
              pilotage professionnel.
            </p>
            <p>
              Reconnue parmi les structures funeraires les plus implantees au Maroc, PFM s appuie
              sur une experience historique, un reseau national et une capacite de mobilisation
              immediate pour les dossiers sensibles des entreprises.
            </p>
            <p>
              Notre cellule entreprises assure une communication claire, une intervention rapide,
              une gouvernance operationnelle rigoureuse et un suivi de dossier structure de
              l ouverture a la cloture.
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
            <p>
              <strong>Telephone:</strong> +212 522 49 16 16
            </p>
            <p>
              <strong>E-mail:</strong> PFMcasa@PFMassistance.ma
            </p>
            <p>
              <strong>Disponibilite:</strong> 24h/24 et 7j/7
            </p>
            <a href="https://wa.me/212661502763">WhatsApp entreprise</a>
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

      <section className="section se-kpi-section">
        <div className="container se-kpi-grid">
          {enterpriseKpis.map((item) => (
            <article key={item.label} className="se-kpi-item reveal-on-scroll">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section se-offers-section">
        <div className="container se-offers-wrap reveal-on-scroll">
          <div className="se-head">
            <span className="se-eyebrow">Offre operationnelle</span>
            <h2>Services-entreprises structurees pour execution rapide</h2>
            <p>
              PFM propose une organisation professionnelle orientee resultat: traitement des urgences,
              maitrise administrative, coordination multi-intervenants et standard de qualite constant.
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
              <h2>Une methode claire pour chaque dossier professionnel</h2>
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

      <section className="section se-trust-section">
        <div className="container se-trust-wrap reveal-on-scroll">
          <div className="se-head">
            <span className="se-eyebrow">Partenariats</span>
            <h2>Des compagnies majeures font confiance a PFM</h2>
            <p>
              Notre presence operationnelle aux cotes des compagnies d assurance et d assistance
              confirme la fiabilite de PFM sur les dossiers entreprises a forte exigence.
            </p>
          </div>
          <div className="se-trust-grid">
            {trustCompanies.map((item) => (
              <article key={item.name} className="se-trust-card">
                <img src={item.logo} alt={`Embleme ${item.name}`} loading="lazy" />
                <span>{item.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section se-sectors-section">
        <div className="container se-sectors-wrap reveal-on-scroll">
          <div className="se-head">
            <span className="se-eyebrow">Secteurs accompagnes</span>
            <h2>Couverture multi-secteurs pour les besoins des entreprises</h2>
            <p>
              De l assurance au secteur public, PFM intervient avec le meme niveau d exigence:
              reactivite, conformite, tracabilite et qualite de service.
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
            <h2>Besoin d un dispositif services-entreprises adapte a votre structure ?</h2>
            <p>
              PFM construit avec vous un mode operatoire clair, avec referent unique, engagement
              de delai de reponse, suivi regulier et engagement qualite mesurable.
            </p>
            <p>
              Objectif: garantir a votre organisation un partenaire solide, reactif et present sur
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



