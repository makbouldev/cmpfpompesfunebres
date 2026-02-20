import { Link } from 'react-router-dom'
import imageHero from '../assets/images/9.webp'
import imageOverlay from '../assets/images/13.jpg'
import imageTeam from '../assets/images/20.jpg'
import imageCimetiere from '../assets/images/14.jpg'

const servicesList = [
  'Nettoyage complet de sepultures et abords.',
  'Fleurissement ponctuel ou regulier selon vos demandes.',
  'Entretien de tombes pour dates commemoratives et fetes religieuses.',
  'Desherbage, arrangement floral et bilan photos avant/apres.',
]

const classiquePlans = [
  {
    title: 'Nettoyage et desherbage 1 fois par an',
    text: 'Avant la Toussaint, avec fourniture de deux pots de chrysanthemums.',
    price: '700,00 DH',
  },
  {
    title: 'Nettoyage et desherbage 2 fois par an',
    text: 'Un passage avant la Toussaint et un second au debut de l ete.',
    price: '900,00 DH',
  },
]

const contractPlans = [
  {
    title: 'Contrat 10 ans - entretien annuel',
    text: 'Un passage de nettoyage et fleurissement chaque annee.',
    price: '4 500,00 DH',
  },
  {
    title: 'Contrat 30 ans - entretien annuel',
    text: 'Un passage de nettoyage et fleurissement chaque annee.',
    price: '13 480,00 DH',
  },
  {
    title: 'Contrat 10 ans - entretien biannuel',
    text: 'Deux passages par an, selon calendrier defini.',
    price: '6 310,00 DH',
  },
  {
    title: 'Contrat 30 ans - entretien biannuel',
    text: 'Deux passages par an, selon calendrier defini.',
    price: '18 920,00 DH',
  },
]

function NettoyageFleurissementPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Nettoyage et fleurissement</span>
            <h1>Nettoyage et Fleurissement</h1>
            <p>
              CMPF vous accompagne et vous aide a rendre le plus bel hommage a votre proche en vous
              proposant le service nettoyage et fleurissement.
            </p>
            <p>
              Choisissez le nombre de passages: nous proposons un nettoyage complet de la tombe, un
              desherbage, un arrangement floral, et un bilan photos avant/apres.
            </p>
            <div className="mf-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Demander intervention
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Parler a un conseiller
              </Link>
            </div>
          </div>

          <div className="mf-hero-visual">
            <figure className="mf-hero-photo mf-hero-photo-main">
              <img src={imageHero} alt="Nettoyage de sepulture CMPF" />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={imageOverlay} alt="Fleurissement de tombe CMPF" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Prestations</span>
          <h2>Un service d entretien funeraire complet</h2>
          <ul className="mf-rich-list">
            {servicesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Ce service permet aux familles, meme a distance, de confier l entretien des tombes a une
            equipe professionnelle et attentive.
          </p>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Nos formules</span>
          <h2>Option classique</h2>
          <div className="nf-plan-grid">
            {classiquePlans.map((plan) => (
              <article key={plan.title} className="nf-plan-card">
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
                <strong>{plan.price}</strong>
                <Link to="/contact" className="btn btn-primary">
                  Commander
                </Link>
              </article>
            ))}
          </div>

          <h2>Contrat d entretien (10 ans a 30 ans)</h2>
          <div className="nf-plan-grid">
            {contractPlans.map((plan) => (
              <article key={plan.title} className="nf-plan-card">
                <h3>{plan.title}</h3>
                <p>{plan.text}</p>
                <strong>{plan.price}</strong>
                <Link to="/contact" className="btn btn-primary">
                  Commander
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={imageTeam} alt="Equipe entretien CMPF" />
            <img src={imageCimetiere} alt="Entretien cimetiere CMPF" />
          </div>
          <div className="mf-banner-copy">
            <h2>Un hommage durable, propre et respectueux</h2>
            <p>
              CMPF vous accompagne pour maintenir les sepultures propres, fleuries et dignes tout au
              long de l annee.
            </p>
            <div className="mf-hero-actions">
              <Link to="/#nos-agences" className="btn btn-secondary">
                Voir nos agences
              </Link>
              <a href="tel:+212522491616" className="btn btn-primary">
                Lancer une demande
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NettoyageFleurissementPage
