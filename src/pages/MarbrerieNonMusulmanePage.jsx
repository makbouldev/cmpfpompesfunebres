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
            <h1>Marbrerie Non Musulmanes</h1>
            <p>
              Le monument funeraire constitue un element essentiel pour preserver la memoire de vos
              proches.
            </p>
            <p>
              A la CMPF, nous vous proposons une large selection de monuments de haute qualite,
              concus pour resister au temps.
            </p>
            <p>
              Vous pouvez compter sur l expertise de nos conseillers funeraires pour vous accompagner
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
              <img src={imageHero} alt="Monument marbrerie non musulmane CMPF" />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={imageOverlay} alt="Finition marbrerie non musulmane CMPF" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Choix accompagne</span>
          <h2>Un accompagnement clair pour un monument durable</h2>
          <p>
            Notre equipe vous guide dans la selection du monument, de la forme et de la finition, en
            respectant vos attentes familiales et votre budget.
          </p>
          <p>
            Chaque projet est traite avec rigueur pour garantir une realisation soignee, elegante et
            durable.
          </p>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={imageTeam} alt="Conseillers marbrerie CMPF" />
            <img src={imageWorkshop} alt="Atelier marbrerie CMPF" />
          </div>
          <div className="mf-banner-copy">
            <h2>CMPF vous accompagne du conseil a la realisation</h2>
            <p>
              De la premiere orientation jusqu a la pose finale, notre equipe reste a vos cotes pour
              garantir qualite, clarte et respect.
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
