import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickContactLinks from '../components/QuickContactLinks'
import m1 from '../assets/marbrerie-musulmanes/marbre_1-300x181.jpg.webp'
import m2 from '../assets/marbrerie-musulmanes/marbre_2-300x181.jpg.webp'
import m3 from '../assets/marbrerie-musulmanes/marbre_3-300x181.jpg.webp'
import m4 from '../assets/marbrerie-musulmanes/marbre_4-300x181.jpg.webp'

const products = [
  { title: 'MONUMENT 1', image: m1 },
  { title: 'MONUMENT 2', image: m2 },
  { title: 'MONUMENT 3', image: m3 },
  { title: 'MONUMENT 4', image: m4 },
]

function MarbrerieMusulmanePage() {
  const [page, setPage] = useState(1)
  const perPage = 12
  const totalPages = Math.max(1, Math.ceil(products.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visibleProducts = products.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section marbrerie-musulmane-section">
      <div className="container plaques-wrap">
        <div className="plaques-head reveal-on-scroll">
          <span>Catalogue pfm </span>
          <h1>Marbrerie Musulmanes</h1>
          <p>
            Selection de monuments et de marbreries musulmanes avec finitions soignes,
            gravures personnalisees et pose professionnelle.
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

            {totalPages > 1 && (
              <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination marbrerie musulmane">
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
            )}
          </div>

          <aside className="plaques-side-panel reveal-on-scroll">
            <h3>Demande rapide</h3>
            <p>Contactez pfm pour recevoir une proposition selon votre besoin et votre budget.</p>
            <QuickContactLinks />

            <Link className="plaques-side-btn" to="/contact">Demander un devis</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default MarbrerieMusulmanePage


