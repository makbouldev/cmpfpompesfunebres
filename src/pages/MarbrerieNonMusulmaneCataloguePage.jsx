import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickContactLinks from '../components/QuickContactLinks'
import n1 from '../assets/nonmuslimanes/1.webp'
import n2 from '../assets/nonmuslimanes/2.webp'
import n3 from '../assets/nonmuslimanes/3.png'
import n4 from '../assets/nonmuslimanes/4.jpg'
import n5 from '../assets/nonmuslimanes/5.jpg'
import n6 from '../assets/nonmuslimanes/6.jpg'
import n7 from '../assets/nonmuslimanes/7.jpg'
import n8 from '../assets/nonmuslimanes/8.jpg'
import n9 from '../assets/images/20.jpg'
import n10 from '../assets/images/20.webp'

const products = [
  { title: 'Monument marbrerie non musulmane classique', image: n1 },
  { title: 'Monument non musulman finition granit', image: n2 },
  { title: 'Stele non musulmane gravure personnalisee', image: n3 },
  { title: 'Monument non musulman style contemporain', image: n4 },
  { title: 'Marbrerie non musulmane pose complete', image: n5 },
  { title: 'Marbrerie non musulmane finition premium', image: n6 },
  { title: 'Monument non musulman haut de gamme', image: n7 },
  { title: 'Stele non musulmane design sobre', image: n8 },
  { title: 'Marbrerie non musulmane gravure fine', image: n9 },
  { title: 'Monument funeraire non musulman durable', image: n10 },
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


