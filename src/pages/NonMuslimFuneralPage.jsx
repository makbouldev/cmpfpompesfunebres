import { Link } from 'react-router-dom'
import imageHero from '../assets/nonmuslimanes/4.jpg'
import imageRite from '../assets/hero/2.png'
import imageTeam from '../assets/images/20.jpg'
import imageTransport from '../assets/images/Rapatriement.jpeg'
import imageStone from '../assets/images/14.jpg'

const nonMuslimServiceCards = [
  { title: 'Rapatriement de corps', image: imageTransport },
  { title: 'Inhumation non musulmane', image: imageRite },
  { title: 'Marbrerie et monuments', image: imageStone },
]

const repatriementPoints = [
  "Prise en charge immédiate avec un conseiller dédié.",
  "Coordination administrative avec assurance, consulat et autorités.",
  "Organisation du transport du défunt au Maroc et à l'étranger.",
  "Gestion et validation des pièces nécessaires du dossier.",
  "Accompagnement de la famille à chaque étape.",
  "Suivi opérationnel continu jusqu'à la finalisation.",
]

const repatriementPlus = [
  "Rapatriement de bagages et d'effets personnels.",
  'Billets passagers pour la famille si nécessaire.',
]

function NonMuslimFuneralPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Pompes Funèbres non musulmanes</span>
            <h1>Pompes Funèbres Non Musulmanes</h1>
            <p>
              Dans le domaine des pompes funèbres non musulmanes, pfm propose une prise en charge
              complète, rassurante et professionnelle.
            </p>
            <p>
              Nous assurons l&apos;organisation des interventions du rapatriement à l&apos;inhumation,
              avec coordination administrative rigoureuse et disponibilité permanente.
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
              <img src={imageHero} alt="Pompes Funèbres non musulmanes pfm " />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={imageRite} alt="Cérémonie non musulmane pfm " />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-insight-section">
        <div className="container mf-insight-wrap reveal-on-scroll">
          <div className="mf-insight-head">
            <h2>Nos pôles d&apos;intervention non musulmane</h2>
            <p>Rapatriement, inhumation et marbrerie</p>
          </div>
          <div className="mf-insight-cards">
            {nonMuslimServiceCards.map((item) => (
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
          <h2>Une assistance essentielle et structurée</h2>
          <p>
            En cas de décès à l&apos;étranger, pfm organise le rapatriement avec méthode, rigueur
            et coordination internationale.
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
            <img src={imageTeam} alt="Équipe pfm non musulmane" />
            <img src={imageTransport} alt="Transport funéraire non musulman" />
          </div>
          <div className="mf-banner-copy">
            <h2>pfm , partenaire fiable pour les Pompes Funèbres Non Musulmanes</h2>
            <p>
              Avec une présence nationale et une organisation rigoureuse, pfm accompagne les familles
              avec réactivité, clarté et respect.
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

export default NonMuslimFuneralPage
