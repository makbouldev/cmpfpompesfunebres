import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickContactLinks from '../components/QuickContactLinks'
import f01 from '../assets/fleurs/COURONNE-Ref-_-CR-01-300x179.jpg.webp'
import f02 from '../assets/fleurs/COURONNE-Ref-_-CR-02-300x179.jpg.webp'
import f03 from '../assets/fleurs/COURONNE-Ref-_-CR-05-300x179.jpg.webp'
import f04 from '../assets/fleurs/Honore-300x169.jpg.webp'
import f05 from '../assets/fleurs/07-300x179.jpg.webp'
import f06 from '../assets/fleurs/08-300x179.jpg.webp'
import f07 from '../assets/fleurs/09-300x179.jpg.webp'
import f08 from '../assets/fleurs/10-300x179.jpg.webp'
import f09 from '../assets/fleurs/11-300x179.jpg.webp'
import f10 from '../assets/fleurs/12-300x179.png'
import f11 from '../assets/fleurs/13-300x179.png'
import f12 from '../assets/fleurs/CO-01-300x179.png'
import f13 from '../assets/fleurs/CO-02-300x179.png'
import f14 from '../assets/fleurs/CO-03-300x179.png'
import f15 from '../assets/fleurs/CO-04-300x179.png'
import f16 from '../assets/fleurs/CO-05-300x179.jpg.webp'
import f17 from '../assets/fleurs/CO-06-300x179.jpg.webp'
import f18 from '../assets/fleurs/CO-07-300x179.jpg.webp'
import f19 from '../assets/fleurs/CO-08-300x179.jpg.webp'
import f20 from '../assets/fleurs/CO-09-300x179.jpg.webp'
import f21 from '../assets/fleurs/GE-01-300x179.png'
import f22 from '../assets/fleurs/GE-02-300x179.png'
import f23 from '../assets/fleurs/GE-03-300x179.png'
import f24 from '../assets/fleurs/GE-04-300x179.png'
import f25 from '../assets/fleurs/GE-05-300x179.png'
import f26 from '../assets/fleurs/CRO-01-300x179.jpg.webp'
import f27 from '../assets/fleurs/CRO-02-300x179.jpg.webp'
import f28 from '../assets/fleurs/COM-01-300x179.jpg.webp'
import f29 from '../assets/fleurs/COM-02-300x179.jpg.webp'
import f30 from '../assets/fleurs/Amour-eternel-300x263.jpg.webp'

const products = [
  { title: 'MÃ‰MOIRE', image: f01 },
  { title: 'TENDREMENT', image: f02 },
  { title: 'AMITIÃ‰S SINCÃˆRES', image: f03 },
  { title: 'HONORÃ‰', image: f04 },
  { title: 'TEMPS INFINI', image: f05 },
  { title: 'COURONNE DE RESPECT', image: f06 },
  { title: 'ADIEU Ã€ JAMAIS', image: f07 },
  { title: 'ADIEU Ã‰TERNEL', image: f08 },
  { title: 'SÃ‰RÃ‰NITÃ‰', image: f09 },
  { title: 'FLEUR DE MÃ‰MOIRE', image: f10 },
  { title: 'COURONNE DE LUMIÃˆRE', image: f11 },
  { title: 'ADIEU Ã€ JAMAIS', image: f12 },
  { title: 'RÃ‰CONFORT Ã‰TERNEL', image: f13 },
  { title: 'COUSSIN DE MÃ‰MOIRE', image: f14 },
  { title: 'PAIX Ã‰TERNELLE', image: f15 },
  { title: 'POUR TOUJOURS', image: f16 },
  { title: 'PAIX INTÃ‰RIEURE', image: f17 },
  { title: 'COURONNE DE SYMPATHIE', image: f18 },
  { title: 'SOUVENIR DOUX', image: f19 },
  { title: 'FLEUR DE GRATITUDE', image: f20 },
  { title: 'BOUQUET DE CONDOLÃ‰ANCE', image: f21 },
  { title: 'BOUQUET DE LUMIÃˆRE', image: f22 },
  { title: 'FLEUR DE GRATITUDE', image: f23 },
  { title: 'DOUCE COMPASSION', image: f24 },
  { title: 'TEMPS INFINI', image: f25 },
  { title: 'FLEUR DE PRIÃˆRE', image: f26 },
  { title: "CROIX D'AMOUR", image: f27 },
  { title: 'BEL HOMMAGE', image: f28 },
  { title: 'DÃ‰LICATE PENSÃ‰E', image: f29 },
  { title: 'AMOUR Ã‰TERNEL', image: f30 },
]

function FleursPage() {
  const [page, setPage] = useState(1)
  const perPage = 12
  const totalPages = Math.max(1, Math.ceil(products.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visibleProducts = products.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section">
      <div className="container plaques-wrap">
        <div className="plaques-head reveal-on-scroll">
          <span>Catalogue PFM</span>
          <h1>Fleurs funeraires</h1>
          <p>
            Une selection de compositions florales pour obseques, hommage et souvenir,
            avec livraison rapide et personnalisation selon vos souhaits.
          </p>
        </div>

        <div className="plaques-toolbar reveal-on-scroll">
          <p>
            Affichage de {products.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + visibleProducts.length, products.length)} sur {products.length} resultats
          </p>
        </div>

        <div className="plaques-content-layout">
          <div>
            <div className="plaques-grid">
              {visibleProducts.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="plaques-card reveal-on-scroll"
                  style={{ '--card-index': index }}
                >
                  <figure className="plaques-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </figure>
                  <div className="plaques-body">
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination fleurs funeraires">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    className={pageNumber === safePage ? 'plaques-page-btn is-active' : 'plaques-page-btn'}
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              })}
              <button
                type="button"
                className="plaques-page-btn plaques-page-next"
                onClick={() => setPage((prev) => (prev >= totalPages ? 1 : prev + 1))}
              >
                Suivant
              </button>
            </div>
          </div>

          <aside className="plaques-side-panel reveal-on-scroll">
            <h3>Demande rapide</h3>
            <p>Contactez PFM pour recevoir une proposition claire selon votre besoin et votre budget.</p>
            <QuickContactLinks />
            <Link className="plaques-side-btn" to="/contact">Demander un devis</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default FleursPage

