import { useState } from 'react'
import { Link } from 'react-router-dom'
import m1 from '../assets/muslimanes/1.png'
import m2 from '../assets/muslimanes/2.webp'
import m3 from '../assets/muslimanes/3.webp'
import m4 from '../assets/muslimanes/4.webp'
import m5 from '../assets/images/14.jpg'
import m6 from '../assets/images/15.jpg'
import m7 from '../assets/images/20.jpg'
import m8 from '../assets/images/20.webp'
import m9 from '../assets/images/11.jpg'
import m10 from '../assets/images/12.jpg'

const products = [
  { title: 'Monument marbrerie musulmane classique', image: m1 },
  { title: 'Monument marbrerie musulmane finition granit', image: m2 },
  { title: 'Stele musulmane gravure personnalisee', image: m3 },
  { title: 'Monument musulman avec motifs elegants', image: m4 },
  { title: 'Marbrerie musulmane pose complete', image: m5 },
  { title: 'Marbrerie musulmane entretien et finition', image: m6 },
  { title: 'Monument musulman haut de gamme', image: m7 },
  { title: 'Stele musulmane design moderne', image: m8 },
  { title: 'Marbrerie musulmane gravure fine', image: m9 },
  { title: 'Monument funeraire musulman durable', image: m10 },
]

function MarbrerieMusulmanePage() {
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
          </div>

          <aside className="plaques-side-panel reveal-on-scroll">
            <h3>Demande rapide</h3>
            <p>Contactez PFM pour recevoir une proposition claire selon votre besoin et votre budget.</p>
            <a href="tel:+212522491616">?? +212 522 49 16 16</a>
            <a href="tel:+212522207111">?? +212 522 20 71 11</a>
            <a href="https://wa.me/212661502763">?? WhatsApp: +212 661 502 763</a>
            <a href="mailto:pfmcasa@pfmassistance.ma">? pfmcasa@pfmassistance.ma</a>
            <Link className="plaques-side-btn" to="/contact">Demander un devis</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default MarbrerieMusulmanePage
