import { Link } from 'react-router-dom'
import fleurImage1 from '../assets/fleurs/1.jpg'
import fleurImage2 from '../assets/fleurs/2.jpg'
import fleurImage3 from '../assets/fleurs/3.jpg'
import fleurImage4 from '../assets/fleurs/4.jpg'
import fleurImage5 from '../assets/fleurs/5.jpg'
import fleurImage6 from '../assets/fleurs/6.jpg'

const serviceHighlights = [
  'Une large gamme florale avec livraison totalement gratuite.',
  'Ruban avec inscription personnalisée selon la demande de la famille.',
  'Centralisation des commandes et transport floral sur toutes les étapes du convoi.',
  'Confection et livraison de fleurs naturelles, artificielles et plantes.',
]

const emotionsMoments = [
  'Obsèques.',
  'Les fleurs préférées du défunt comme signe de souvenir et de lien.',
]

const souvenirMoments = [
  'Toussaint (chrysanthèmes et compositions saisonnières).',
  'Floraison des tombes et hommages ponctuels.',
  'Fleurissement régulier des sépultures.',
  'Commémorations et dates symboliques liées au souvenir.',
]

const floralGallery = [
  { image: fleurImage1, label: 'Compositions funéraires' },
  { image: fleurImage2, label: 'Hommage floral' },
  { image: fleurImage3, label: 'Couronnes et gerbes' },
  { image: fleurImage4, label: 'Fleurissement tombe' },
  { image: fleurImage5, label: 'Livraison accompagnée' },
  { image: fleurImage6, label: 'Bouquets personnalisés' },
]

function FleursPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Universal PF Fleurs</span>
            <h1>Fleurs</h1>
            <p>
              Une large gamme florale, livraison totalement gratuite, ruban avec inscription
              personnalisée.
            </p>
            <p>
              Pour répondre au souhait des familles et de ses partenaires, la Universal PF a créé Universal PF 
              FLEURS avec un service professionnel, humain et soigné.
            </p>
            <p>
              Depuis la centralisation des commandes jusqu&apos;au transport des fleurs à toutes les
              étapes du convoi funéraire, Universal PF traduit avec élégance l&apos;émotion, le souvenir et
              l&apos;hommage rendu au défunt.
            </p>
            <div className="mf-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Commander maintenant
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Parler à un conseiller
              </Link>
            </div>
          </div>

          <div className="mf-hero-visual">
            <figure className="mf-hero-photo mf-hero-photo-main">
              <img src={fleurImage1} alt="Service floral Universal PF " />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={fleurImage2} alt="Compositions florales Universal PF " />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Service floral</span>
          <h2>Fleurs naturelles, artificielles et plantes</h2>
          <p>
            Sachant que les fleurs sont un élément essentiel du souvenir et de l&apos;hommage, Universal PF 
            FLEURS met à disposition une gamme variée pour accompagner les moments les plus marquants
            des obsèques et du recueillement.
          </p>
          <p>
            Universal PF  dispose de magasins pour la confection et la livraison et offre aux familles
            la possibilité de composer les modèles et les couleurs de leur choix.
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
          <h2>Des compositions adaptées aux sentiments à exprimer</h2>
          <p>Pour les moments de chagrin, les fleurs consolent et permettent de partager l&apos;émotion.</p>
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
            Universal PF peut également fournir des compositions en fleurs artificielles, avec une
            gamme variée disponible et prête à porter pour tombes, sépultures et espaces de
            recueillement.
          </p>
        </div>
      </section>

      <section className="section editorial-showcase-section editorial-showcase-about">
        <div className="container editorial-showcase-wrap reveal-on-scroll">
          <div className="editorial-showcase-head">
            <h2>Nos réalisations florales</h2>
            <p>des compositions soignées pour chaque hommage</p>
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
            <img src={fleurImage5} alt="Équipe Universal PF " />
            <img src={fleurImage6} alt="Livraison Universal PF " />
          </div>
          <div className="mf-banner-copy">
            <h2> un service floral complet</h2>
            <p>
              De la commande à la livraison, nous assurons un accompagnement fiable pour honorer vos
              proches avec discrétion, qualité et respect.
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


