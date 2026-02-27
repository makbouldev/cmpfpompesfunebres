import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickContactLinks from '../components/QuickContactLinks'
import c1 from '../assets/cercueils-musulmans/POMOY-1-300x158.png'
import c2 from '../assets/cercueils-musulmans/TAULIS-ACAJOU-1-300x158.png'
import c3 from '../assets/cercueils-musulmans/TEILLET-1-300x158.png'
import c4 from '../assets/cercueils-musulmans/TREVILLE-BLANC-1-300x158.png'
import c5 from '../assets/cercueils-musulmans/TREVILLE-CLAIRE-1-300x158.png'
import c6 from '../assets/cercueils-musulmans/TALLER-1-300x158.png'
import c7 from '../assets/cercueils-musulmans/PANNEAUX-DE-FRANCE-3-COUVERCLES1-1-300x158.png'
import c8 from '../assets/cercueils-musulmans/TERROU1-1-300x158.png'
import c9 from '../assets/cercueils-musulmans/PANNEAUX-DE-FRANCE-2-COUVERCLES-1-300x158.png'
import c10 from '../assets/cercueils-musulmans/POINTEL-1-300x158.png'
import c11 from '../assets/cercueils-musulmans/BOIS-BLANC-TEINTE-1-300x158.png'
import c12 from '../assets/cercueils-musulmans/EXTRA-CHENE-1-300x158.png'
import c13 from '../assets/cercueils-musulmans/RBATI-CHENE-1-300x158.png'

const products = [
  { title: 'POMOY', image: c1 },
  { title: 'TAULIS ACAJOU', image: c2 },
  { title: 'TEILLET', image: c3 },
  { title: 'TREVILLE BLANC', image: c4 },
  { title: 'TREVILLE CLAIRE', image: c5 },
  { title: 'TALLER', image: c6 },
  { title: 'PANNEAUX DE FRANCE 3 COUVERCLES', image: c7 },
  { title: 'TERROU', image: c8 },
  { title: 'PANNEAUX DE FRANCE 2 COUVERCLES', image: c9 },
  { title: 'POINTEL', image: c10 },
  { title: 'BOIS BLANC TEINTE', image: c11 },
  { title: 'EXTRA CHENE', image: c12 },
  { title: 'RBATI CHENE', image: c13 },
]

function CercueilsMusulmansPage() {
  const [page, setPage] = useState(1)
  const perPage = 12
  const totalPages = Math.max(1, Math.ceil(products.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visibleProducts = products.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section cercueils-musulmans-section">
      <div className="container plaques-wrap">
        <div className="plaques-head reveal-on-scroll">
          <span>Catalogue PFM</span>
          <h1>Cercueils musulmans</h1>
          <p>
            Une gamme de cercueils musulmans adaptés aux exigences du transport, au respect des rites
            et à la qualité de présentation.
          </p>
        </div>

        <div className="plaques-toolbar reveal-on-scroll">
          <p>
            Affichage de {products.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + visibleProducts.length, products.length)} sur {products.length} résultats
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

            <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination cercueils musulmans">
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
            <p>Contactez PFM pour recevoir une proposition selon votre besoin et votre budget.</p>
            <QuickContactLinks />

            <Link className="plaques-side-btn" to="/contact">Demander un devis</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CercueilsMusulmansPage
