import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickContactLinks from '../components/QuickContactLinks'
import n1 from '../assets/marbrerie-non-musulmanes/1-3-300x283.png'
import n2 from '../assets/marbrerie-non-musulmanes/1-2-300x283.png'
import n3 from '../assets/marbrerie-non-musulmanes/1-1-300x283.png'
import n4 from '../assets/marbrerie-non-musulmanes/2-3-300x283.png'
import n5 from '../assets/marbrerie-non-musulmanes/2-2-300x283.png'
import n6 from '../assets/marbrerie-non-musulmanes/2-1-300x283.png'
import n7 from '../assets/marbrerie-non-musulmanes/3-3-300x283.png'
import n8 from '../assets/marbrerie-non-musulmanes/3-2-300x283.png'
import n9 from '../assets/marbrerie-non-musulmanes/3-1-300x283.png'
import n10 from '../assets/marbrerie-non-musulmanes/1-300x283.png'
import n11 from '../assets/marbrerie-non-musulmanes/2-300x283.png'
import n12 from '../assets/marbrerie-non-musulmanes/3-300x283.png'

const products = [
  { title: 'Mosaïque – 1 Pièce', image: n1 },
  { title: 'Marbre Gris – 1 Pièce', image: n2 },
  { title: 'Marbre Blanc – 1 Pièce', image: n3 },
  { title: 'Mosaïque – 2 Pièces', image: n4 },
  { title: 'Marbre Gris – 2 Pièces', image: n5 },
  { title: 'Marbre Blanc – 2 Pièces', image: n6 },
  { title: 'Mosaïque – 3 Pièces', image: n7 },
  { title: 'Marbre Gris – 3 Pièces', image: n8 },
  { title: 'Marbre Blanc – 3 Pièces', image: n9},
  { title: 'Granite Gris – 1 Pièce', image: n10},
  { title: 'Granite Gris – 2 Pièces', image: n11},
  { title: 'Granite Gris – 3 Pièces', image: n12},
]

function MarbrerieNonMusulmanePage() {
  const [page, setPage] = useState(1)
  const perPage = 9
  const totalPages = Math.max(1, Math.ceil(products.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visibleProducts = products.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section">
      <div className="container plaques-wrap">
        <div className="plaques-head reveal-on-scroll">
          <span>Catalogue PFM</span>
          <h1>Marbrerie non Musulmanes</h1>
          <p>
            Selection de monuments et de marbreries non musulmanes avec finitions soignee,
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

            <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination marbrerie non musulmane">
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

export default MarbrerieNonMusulmanePage

