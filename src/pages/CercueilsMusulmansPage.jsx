import { useState } from 'react'
import { Link } from 'react-router-dom'
import c1 from '../assets/muslimanes/1.png'
import c2 from '../assets/muslimanes/2.webp'
import c3 from '../assets/muslimanes/3.webp'
import c4 from '../assets/muslimanes/4.webp'
import c5 from '../assets/images/10.jpeg'
import c6 from '../assets/images/11.jpg'
import c7 from '../assets/images/12.jpg'
import c8 from '../assets/images/17.jpeg'
import c9 from '../assets/images/18.jpg'
import c10 from '../assets/images/1.png'

const products = [
  { title: 'Cercueil musulman classique', image: c1 },
  { title: 'Cercueil musulman transport aerien', image: c2 },
  { title: 'Cercueil musulman avec plaque identification', image: c3 },
  { title: 'Cercueil musulman finition sobre', image: c4 },
  { title: 'Cercueil musulman renforce', image: c5 },
  { title: 'Cercueil musulman transport national', image: c6 },
  { title: 'Cercueil musulman format standard', image: c7 },
  { title: 'Cercueil musulman premium', image: c8 },
  { title: 'Cercueil musulman grand format', image: c9 },
  { title: 'Cercueil musulman preparation rapide', image: c10 },
]

function CercueilsMusulmansPage() {
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
          <h1>Cercueils musulmans</h1>
          <p>
            Une gamme de cercueils musulmans adaptes aux exigences du transport, au respect des rites
            et a la qualite de presentation.
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

export default CercueilsMusulmansPage
