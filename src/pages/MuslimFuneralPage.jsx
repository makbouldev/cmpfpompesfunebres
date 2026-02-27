import { Link } from 'react-router-dom'
import imageHero from '../assets/hero/1.png'
import imageTeam from '../assets/images/7.webp'
import imageTransport from '../assets/images/Rapatriement.jpeg'
import imageInhumationCard from '../assets/hero/1.png'
import imageMarbrerieCard from '../assets/hero/6.png'

const muslimServiceCards = [
  { title: 'Rapatriement de corps', image: imageTransport },
  { title: 'Inhumation musulmane', image: imageInhumationCard },
  { title: 'Marbrerie musulmane', image: imageMarbrerieCard },
]

const repatriementPoints = [
  "Prise en charge immédiate avec un conseiller dédié.",
  "Coordination administrative avec assurance, consulat et autorités.",
  "Transport du défunt au Maroc et à l'étranger selon la destination.",
  'Obtention et vérification des pièces nécessaires au dossier.',
  "Préparation logistique complète jusqu'à la remise finale.",
  'Suivi humain continu avec la famille à chaque étape.',
]

const repatriementPlus = [
  "Rapatriement de bagages et d'effets personnels.",
  'Billets passagers pour la famille si nécessaire.',
]

function MuslimFuneralPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Pompes Funèbres musulmanes</span>
            <h1>Pompes Funèbres Musulmanes</h1>
            <p>
              <strong>PFM répond à tous vos besoins.</strong>
            </p>
            <p>
              Les rituels des funérailles se déroulent dans le plus grand respect des rites islamiques.
              Nos prestations sont accomplies avec conscience, rigueur et dignité.
            </p>
            <p>
              Notre organisation vous accompagne de la prise en charge initiale jusqu&apos;à la finalisation
              complète du dossier avec un conseiller unique et une présence permanente.
            </p>
            <div className="mf-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Appel urgence 24h/24
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Parler à un conseiller
              </Link>
            </div>
          </div>

          <div className="mf-hero-visual">
            <figure className="mf-hero-photo mf-hero-photo-main">
              <img src={imageHero} alt="Pompes Funèbres musulmanes PFM" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-insight-section">
        <div className="container mf-insight-wrap reveal-on-scroll">
          <div className="mf-insight-head">
            <h2>Nos pôles d&apos;intervention musulmane</h2>
            <p>Rapatriement, inhumation et marbrerie</p>
          </div>

          <div className="mf-insight-cards">
            {muslimServiceCards.map((item) => (
              <article key={item.title} className="mf-insight-card">
                <img src={item.image} alt={item.title} />
                <div>{item.title}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Rapatriement de corps</span>
          <h2>Une assistance funéraire essentielle et structurée</h2>
          <p>
            La perte d&apos;un proche à l&apos;étranger demande une organisation rapide et fiable. PFM assure
            la coordination complète du rapatriement avec rigueur, discrétion et accompagnement humain.
          </p>
          <ul className="mf-rich-list">
            {repatriementPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Services complémentaires</h3>
          <ul className="mf-rich-list">
            {repatriementPlus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={imageTeam} alt="Équipe PFM musulmane" />
            <img src={imageTransport} alt="Transport funéraire musulman" />
          </div>
          <div className="mf-banner-copy">
            <h2>PFM, une référence majeure des Pompes Funèbres Musulmanes au Maroc</h2>
            <p>
              Avec une présence nationale et une disponibilité 24h/24, PFM accompagne les familles
              musulmanes avec un service professionnel, clair et respectueux.
            </p>
            <div className="mf-hero-actions">
              <Link to="/#nos-agences" className="btn btn-secondary">
                Voir nos agences
              </Link>
              <a href="tel:+212522491616" className="btn btn-primary">
                Demander une intervention
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MuslimFuneralPage
