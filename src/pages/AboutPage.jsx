import { Link } from 'react-router-dom'
import image7 from '../assets/images/7.webp'
import image8 from '../assets/images/8.jpg'
import image18 from '../assets/images/18.jpg'
import image19 from '../assets/images/19.webp'
import image20 from '../assets/images/20.jpg'
import image20Alt from '../assets/images/20.webp'
import imageRapatriement from '../assets/images/Rapatriement.jpeg'
import EditorialShowcase from '../components/EditorialShowcase'
import logoAxa from '../assets/partners/AXA_Logo.svg.png'
import logoRma from '../assets/partners/rma.png'
import logoSaham from '../assets/partners/Saham_assurance.png'
import logoSanlam from '../assets/partners/sanlam-logo-vector-removebg-preview.png'
import logoWafaIma from '../assets/partners/wafaima.png'

const businessAreas = [
  {
    title: 'Rapatriement International',
    text: 'Organisation complete du rapatriement depuis et vers le Maroc.',
  },
  {
    title: 'Pompes Funèbres Non Musulmanes',
    text: 'Ceremonies civiles et religieuses avec coordination complete.',
  },
  {
    title: 'Pompes Funèbres Musulmanes',
    text: 'Prise en charge conforme aux rites et aux volontes familiales.',
  },
  {
    title: 'Ambulance et Assistance Medicale',
    text: 'Intervention rapide et transport medicalise 24h/24.',
  },
  {
    title: 'Depannage et Remorquage',
    text: 'Assistance technique et remorquage selon les besoins urgents.',
  },
  {
    title: 'Fleurs',
    text: 'Compositions florales et hommages personnalises.',
  },
  {
    title: 'Marbrerie Non Musulmane',
    text: 'Monuments funeraires sur mesure avec finitions de qualite.',
  },
  {
    title: 'Marbrerie Musulmane',
    text: 'Realisation de tombes et marbrerie selon les normes religieuses.',
  },
  {
    title: 'Nettoyage et fleurissement',
    text: 'Entretien regulier des sepultures avec bilan photo.',
  },
  {
    title: 'Renovation de sepultures',
    text: 'Restauration des monuments anciens avec devis prealable.',
  },
]

const pillars = [
  {
    title: 'Organisation precise',
    text: "Coordination complete des demarches, du premier appel jusqu'a la finalisation du dossier.",
  },
  {
    title: 'Intervention rapide',
    text: 'Mobilisation immediate des equipes sur le terrain partout au Maroc, 24h/24 et 7j/7.',
  },
  {
    title: 'Qualite constante',
    text: 'Procedures maitrisees, suivi continu et haut niveau de service pour chaque famille.',
  },
  {
    title: 'Accompagnement humain',
    text: 'Ecoute, discretion et respect des volontes dans les moments les plus sensibles.',
  },
]

const partnerTrustItems = [
  {
    logoUrl: logoAxa,
    company: 'AXA Assistance',
    detail:
      'Partenaire operationnel pour la gestion des dossiers de rapatriement et la coordination terrain.',
  },
  {
    logoUrl: logoRma,
    company: 'RMA Assistance',
    detail:
      'Confiance continue sur les interventions urgentes et le suivi administratif de bout en bout.',
  },
  {
    logoUrl: logoSaham,
    company: 'SAHAM Assistance',
    detail:
      'Collaboration sur les formalites consulaires, la logistique aeroportuaire et le transfert final.',
  },
  {
    logoUrl: logoSanlam,
    company: 'SANLAM Assistance',
    detail:
      'Pilotage commun des dossiers internationaux avec suivi clair et delais maitrises.',
  },
  {
    logoUrl: logoWafaIma,
    company: 'Wafa IMA Assistance',
    detail:
      'Dispositif de confiance pour les dossiers sensibles avec coordination administrative et operationnelle.',
  },
]

const aboutShowcasePoints = [
  {
    title: 'Presence nationale continue',
    text: 'PFM intervient dans les principales villes du Maroc avec une organisation stable.',
  },
  {
    title: 'Experience historique',
    text: 'Plus de 75 annees de savoir-faire au service des familles et des entreprises.',
  },
  {
    title: 'Confiance des compagnies',
    text: 'Les acteurs majeurs de l assistance s appuient sur notre execution terrain.',
  },
  {
    title: 'Qualite professionnelle',
    text: 'Des procedures claires, un suivi humain et une coordination rigoureuse.',
  },
]

const aboutShowcaseCards = [
  { title: 'Rapatriement', image: imageRapatriement, alt: 'Rapatriement de corps PFM' },
  { title: 'Intervention', image: image19, alt: 'Intervention terrain PFM' },
  { title: 'Accompagnement', image: image20, alt: 'Accompagnement des familles PFM' },
]

function AboutPage() {
  return (
    <div className="about-page">
      <section className="section about-hero-section">
        <div className="container about-hero reveal-on-scroll">
          <div className="about-hero-copy">
            <span className="about-eyebrow">Qui sommes-nous</span>
            <h1>PFM, reference africaine des services funeraires professionnels</h1>
            <p>
              PFM est le premier organisme en Afrique specialise dans les services funeraires.
              Forte de 75 annees d experience, elle occupe une position eminente grace a la
              diversite et a la qualite de ses prestations.
            </p>
            <p>
              Initialement active dans le secteur funeraire, PFM a progressivement elargi son
              champ d action avec de nouveaux creneaux de services au service des familles et des
              partenaires.
            </p>
            <div className="about-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Contacter PFM
              </Link>
              <Link to="/#nos-agences" className="btn btn-secondary about-btn-agences">
                Nos agences
              </Link>
            </div>
          </div>

          <div className="about-hero-media">
            <div className="about-hero-image-main">
              <img src={image20} alt="Equipe PFM" />
            </div>
            <div className="about-hero-image-overlay">
              <img src={image20Alt} alt="Service PFM" />
            </div>
            <div className="about-hero-image-mini about-hero-image-mini-left">
              <img src={image7} alt="Coordination PFM" />
            </div>
            <div className="about-hero-image-mini about-hero-image-mini-right">
              <img src={image8} alt="Accompagnement PFM" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid reveal-on-scroll">
          <div className="about-story-media-wrap">
            <div className="about-story-media about-story-media-main">
              <img src={image18} alt="Transport funeraire PFM" />
            </div>
            <div className="about-story-media about-story-media-side">
              <img src={image19} alt="Intervention terrain PFM" />
            </div>
          </div>

          <div className="about-story-copy">
            <span className="about-eyebrow">Notre evolution</span>
            <h2>75 ans d experience au service des familles</h2>
            <p>
              La force de PFM repose sur une methode claire: disponibilite permanente, coordination
              rigoureuse et accompagnement complet. Notre organisation permet une prise en charge
              rapide, humaine et parfaitement structuree.
            </p>
            <p>
              Nous adaptons chaque intervention aux attentes des familles, aux obligations
              administratives et aux exigences de qualite qui font la reputation de PFM.
            </p>
            <div className="about-story-stats">
              <article>
                <strong>75+</strong>
                <span>Annees d experience</span>
              </article>
              <article>
                <strong>24/7</strong>
                <span>Disponibilite nationale</span>
              </article>
              <article>
                <strong>13+</strong>
                <span>Villes au Maroc</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <EditorialShowcase
        className="editorial-showcase-about"
        heading="Rapatriement, intervention, accompagnement :"
        accent="la signature PFM"
        points={aboutShowcasePoints}
        cards={aboutShowcaseCards}
      />

      <section className="section about-trust-section">
        <div className="container about-trust-wrap reveal-on-scroll">
          <div className="about-trust-head">
            <span className="about-eyebrow">Confiance des entreprises</span>
            <h2>Des compagnies de reference font confiance a PFM</h2>
            <p>
              Notre credibilite operationnelle est renforcee par des partenariats durables avec des
              compagnies d assurance et d assistance qui nous confient la gestion de dossiers sensibles.
            </p>
          </div>

          <div className="about-trust-grid">
            {partnerTrustItems.map((item) => (
              <article key={item.company} className="about-trust-card">
                <div className="about-trust-logo" aria-hidden="true">
                  <img src={item.logoUrl} alt={`Embleme ${item.company}`} loading="lazy" />
                </div>
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-areas-section">
        <div className="container about-areas-wrap reveal-on-scroll">
          <div className="about-areas-head">
            <span className="about-eyebrow">Domaines d activite</span>
            <h2>Des prestations completes pour tous les besoins</h2>
          </div>

          <div className="about-areas-grid">
            {businessAreas.map((item, index) => (
              <article key={item.title} className="about-area-card card reveal-on-scroll">
                <span className="about-area-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-pillars-section">
        <div className="container about-pillars-wrap reveal-on-scroll">
          <div className="about-pillars-media">
            <img src={image7} alt="Qualite de service PFM" />
            <div className="about-pillars-media-overlay">
              <img src={image8} alt="Equipe terrain PFM" />
            </div>
          </div>

          <div className="about-pillars-copy">
            <span className="about-eyebrow">L engagement PFM</span>
            <h2>Une methode exigeante, fiable et rassurante</h2>
            <div className="about-pillars-grid">
              {pillars.map((item) => (
                <article key={item.title} className="about-pillar-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage




