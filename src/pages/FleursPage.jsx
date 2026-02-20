import { Link } from 'react-router-dom'
import fleurImage1 from '../assets/fleurs/1.jpg'
import fleurImage2 from '../assets/fleurs/2.jpg'
import fleurImage3 from '../assets/fleurs/3.jpg'
import fleurImage4 from '../assets/fleurs/4.jpg'
import fleurImage5 from '../assets/fleurs/5.jpg'
import fleurImage6 from '../assets/fleurs/6.jpg'

const serviceHighlights = [
  'Une large gamme florale avec livraison totalement gratuite.',
  'Ruban avec inscription personnalisee selon la demande de la famille.',
  'Centralisation des commandes et transport floral sur toutes les etapes du convoi.',
  'Confection et livraison de fleurs naturelles, artificielles et plantes.',
]

const emotionsMoments = [
  'Obseques.',
  'Les fleurs preferees du defunt comme signe de souvenir et de lien.',
]

const souvenirMoments = [
  'Toussaint (chrysanthemes et compositions saisonnieres).',
  'Floraison des tombes et hommages ponctuels.',
  'Fleurissement regulier des sepultures.',
  'Commemorations et dates symboliques liees au souvenir.',
]

const floralGallery = [
  { image: fleurImage1, label: 'Compositions funeraires' },
  { image: fleurImage2, label: 'Hommage floral' },
  { image: fleurImage3, label: 'Couronnes et gerbes' },
  { image: fleurImage4, label: 'Fleurissement tombe' },
  { image: fleurImage5, label: 'Livraison accompagnee' },
  { image: fleurImage6, label: 'Bouquets personnalises' },
]

function FleursPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">CMPF Fleurs</span>
            <h1>Fleurs</h1>
            <p>
              Une large gamme florale, livraison totalement gratuite, ruban avec inscription
              personnalisee.
            </p>
            <p>
              Pour repondre au souhait des familles et de ses partenaires, la CMPF a cree CMPF
              FLEURS avec un service professionnel, humain et soigne.
            </p>
            <p>
              Depuis la centralisation des commandes jusqu au transport des fleurs a toutes les
              etapes du convoi funeraire, CMPF traduit avec elegance l emotion, le souvenir et
              l hommage rendu au defunt.
            </p>
            <div className="mf-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Commander maintenant
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Parler a un conseiller
              </Link>
            </div>
          </div>

          <div className="mf-hero-visual">
            <figure className="mf-hero-photo mf-hero-photo-main">
              <img src={fleurImage1} alt="Service floral CMPF" />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={fleurImage2} alt="Compositions florales CMPF" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Service floral</span>
          <h2>Fleurs naturelles, artificielles et plantes</h2>
          <p>
            Sachant que les fleurs sont un element essentiel du souvenir et de l hommage, CMPF
            FLEURS met a disposition une gamme variee pour accompagner les moments les plus marquants
            des obseques et du recueillement.
          </p>
          <p>
            CMPF FLEURS dispose de magasins pour la confection et la livraison et offre aux familles
            la possibilite de composer les modeles et les couleurs de leur choix.
          </p>
          <ul className="mf-rich-list">
            {serviceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Conseil selon les circonstances</span>
          <h2>Des compositions adaptees aux sentiments a exprimer</h2>
          <p>Pour les moments de chagrin, les fleurs consolent et permettent de partager l emotion.</p>
          <ul className="mf-rich-list">
            {emotionsMoments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Pour le souvenir</h3>
          <ul className="mf-rich-list">
            {souvenirMoments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            CMPF FLEURS peut egalement fournir des compositions en fleurs artificielles, avec une
            gamme variee disponible et prete a porter pour tombes, sepultures et espaces de
            recueillement.
          </p>
        </div>
      </section>

      <section className="section editorial-showcase-section editorial-showcase-about">
        <div className="container editorial-showcase-wrap reveal-on-scroll">
          <div className="editorial-showcase-head">
            <h2>Nos realisations florales</h2>
            <p>des compositions soignes pour chaque hommage</p>
          </div>
          <div className="editorial-showcase-cards">
            {floralGallery.slice(0, 3).map((item) => (
              <article className="editorial-showcase-card" key={item.label}>
                <img src={item.image} alt={item.label} />
                <div>{item.label}</div>
              </article>
            ))}
          </div>
          <div className="editorial-showcase-cards">
            {floralGallery.slice(3).map((item) => (
              <article className="editorial-showcase-card" key={item.label}>
                <img src={item.image} alt={item.label} />
                <div>{item.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={fleurImage5} alt="Equipe CMPF Fleurs" />
            <img src={fleurImage6} alt="Livraison CMPF Fleurs" />
          </div>
          <div className="mf-banner-copy">
            <h2>CMPF FLEURS, un service floral complet</h2>
            <p>
              De la commande a la livraison, nous assurons un accompagnement fiable pour honorer vos
              proches avec discretion, qualite et respect.
            </p>
            <div className="mf-hero-actions">
              <Link to="/#nos-agences" className="btn btn-secondary">
                Voir nos agences
              </Link>
              <a href="tel:+212522491616" className="btn btn-primary">
                Lancer une commande
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FleursPage
