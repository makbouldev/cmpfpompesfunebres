import { Link } from 'react-router-dom'
import imageHero from '../assets/nonmuslimanes/1.webp'
import imageOverlay from '../assets/nonmuslimanes/2.webp'
import imageTeam from '../assets/nonmuslimanes/7.jpg'
import imageWorkshop from '../assets/nonmuslimanes/8.jpg'

function MarbrerieNonMusulmanePage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Marbrerie non musulmane</span>
            <h1>Marbrerie Non Musulmane</h1>
            <p>
              Le monument funéraire constitue un élément essentiel pour préserver la mémoire de vos
              proches.
            </p>
            <p>
              À la pfm , nous vous proposons une large sélection de monuments de haute qualité,
              conçus pour résister au temps.
            </p>
            <p>
              Vous pouvez compter sur l'expertise de nos conseillers funéraires pour vous accompagner
              dans ce choix important.
            </p>
            <div className="mf-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Appel direct
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Demander un conseil
              </Link>
            </div>
          </div>

          <div className="mf-hero-visual">
            <figure className="mf-hero-photo mf-hero-photo-main">
              <img src={imageHero} alt="Monument marbrerie non musulmane pfm " />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={imageOverlay} alt="Finition marbrerie non musulmane pfm " />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Choix accompagné</span>
          <h2>Un accompagnement pour un monument durable</h2>
          <p>
            Notre équipe vous guide dans la sélection du monument, de la forme et de la finition, en
            respectant vos attentes familiales et votre budget.
          </p>
          <p>
            Chaque projet est traité avec rigueur pour garantir une réalisation soignée, élégante et
            durable.
          </p>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={imageTeam} alt="Conseillers marbrerie pfm " />
            <img src={imageWorkshop} alt="Atelier marbrerie pfm " />
          </div>
          <div className="mf-banner-copy">
            <h2>pfm vous accompagne du conseil à la réalisation</h2>
            <p>
              De la première orientation jusqu&apos;à la pose finale, notre équipe reste à vos côtés pour
              garantir qualité, clarté et respect.
            </p>
            <div className="mf-hero-actions">
              <Link to="/#nos-agences" className="btn btn-secondary">
                Voir nos agences
              </Link>
              <a href="tel:+212522491616" className="btn btn-primary">
                Lancer votre demande
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarbrerieNonMusulmanePage

