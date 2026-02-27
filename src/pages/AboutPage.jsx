import { Link } from 'react-router-dom'
import image7 from '../assets/images/7.webp'
import image8 from '../assets/images/8.jpg'
import image18 from '../assets/images/18.jpg'
import image19 from '../assets/images/19.webp'
import image20 from '../assets/images/20.jpg'
import imageRapatriement from '../assets/images/Rapatriement.jpeg'
import EditorialShowcase from '../components/EditorialShowcase'

const businessAreas = [
  {
    title: 'Rapatriement International',
    text: 'Organisation complète du rapatriement depuis et vers le Maroc.',
  },
  {
    title: 'Pompes Funèbres Musulmanes et Non Musulmanes',
    text: 'Prise en charge des cérémonies musulmanes et non musulmanes avec coordination complète.',
  },
  {
    title: 'Fleurs',
    text: 'Compositions florales et hommages personnalisés.',
  },
  {
    title: 'Marbrerie Musulmane et Non Musulmane',
    text: 'Réalisation de monuments et tombes avec finitions soignées, selon les besoins des familles.',
  },
  {
    title: 'Nettoyage et fleurissement',
    text: 'Entretien régulier des sépultures avec bilan photo.',
  },
]

const pillars = [
  {
    title: 'Organisation précise',
    text: "Coordination complète des démarches, du premier appel jusqu'à la finalisation du dossier.",
  },
  {
    title: 'Intervention rapide',
    text: 'Mobilisation immédiate des équipes sur le terrain partout au Maroc, 24h/24 et 7j/7.',
  },
  {
    title: 'Qualité constante',
    text: 'Procédures maîtrisées, suivi continu et haut niveau de service pour chaque famille.',
  },
  {
    title: 'Accompagnement humain',
    text: 'Écoute, discrétion et respect des volontés dans les moments les plus sensibles.',
  },
]

const aboutShowcasePoints = [
  {
    title: 'Présence nationale continue',
    text: 'PFM intervient dans les principales villes du Maroc avec une organisation stable.',
  },
  {
    title: 'Experience historique',
    text: 'Plus de 75 années de savoir-faire au service des familles et des entreprises.',
  },
  {
    title: 'Confiance des compagnies',
    text: "Les acteurs majeurs de l'assistance s'appuient sur notre exécution terrain.",
  },
  {
    title: 'Qualité professionnelle',
    text: 'Des procédures et un suivi humain et une coordination rigoureuse.',
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
            <h1>PFM, référence africaine des services funéraires professionnels</h1>
            <p>
              PFM est le premier organisme en Afrique spécialisé dans les services funéraires.
              Forte de 75 années d'expérience, elle occupe une position éminente grâce à la
              diversité et à la qualité de ses prestations.
            </p>
            <p>
              Initialement active dans le secteur funéraire, PFM a progressivement élargi son
              champ d'action avec de nouveaux créneaux de services au service des familles et des
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
            <div className="about-hero-image-single">
              <img src={image20} alt="Équipe PFM" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid reveal-on-scroll">
          <div className="about-story-media-wrap">
            <div className="about-story-media about-story-media-main">
              <img src={image18} alt="Transport funéraire PFM" />
            </div>
          </div>

          <div className="about-story-copy">
            <span className="about-eyebrow">Notre évolution</span>
            <h2>75 ans d'expérience au service des familles</h2>
            <p>
              La force de PFM repose sur une méthode : disponibilité permanente, coordination
              rigoureuse et accompagnement complet. Notre organisation permet une prise en charge
              rapide, humaine et parfaitement structurée.
            </p>
            <p>
              Nous adaptons chaque intervention aux attentes des familles, aux obligations
              administratives et aux exigences de qualité qui font la réputation de PFM.
            </p>
            <div className="about-story-stats">
              <article>
                <strong>75+</strong>
                <span>Années d'expérience</span>
              </article>
              <article>
                <strong>24/7</strong>
                <span>Disponibilité nationale</span>
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

      <section className="section about-areas-section">
        <div className="container about-areas-wrap reveal-on-scroll">
          <div className="about-areas-head">
            <span className="about-eyebrow">Domaines d'activité</span>
            <h2>Des prestations complètes pour tous les besoins</h2>
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
            <img src={image7} alt="Qualité de service PFM" />
            <div className="about-pillars-media-overlay">
              <img src={image8} alt="Équipe terrain PFM" />
            </div>
          </div>

          <div className="about-pillars-copy">
            <span className="about-eyebrow">L'engagement PFM</span>
            <h2>Une méthode exigeante, fiable et rassurante</h2>
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




