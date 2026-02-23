import { useState } from 'react'
import { Link } from 'react-router-dom'
import n1 from '../assets/nonmuslimanes/1.webp'
import n2 from '../assets/nonmuslimanes/2.webp'
import n3 from '../assets/nonmuslimanes/3.png'
import n4 from '../assets/nonmuslimanes/4.jpg'
import n5 from '../assets/nonmuslimanes/5.jpg'
import n6 from '../assets/nonmuslimanes/6.jpg'
import n7 from '../assets/nonmuslimanes/7.jpg'
import n8 from '../assets/nonmuslimanes/8.jpg'
import n9 from '../assets/images/17.jpeg'
import n10 from '../assets/images/18.jpg'

const products = [
  { title: 'Cercueil non musulman classique', image: n1 },
  { title: 'Cercueil non musulman finition bois', image: n2 },
  { title: 'Cercueil non musulman modele prestige', image: n3 },
  { title: 'Cercueil non musulman capitonnage interieur', image: n4 },
  { title: 'Cercueil non musulman transport national', image: n5 },
  { title: 'Cercueil non musulman transport international', image: n6 },
  { title: 'Cercueil non musulman format standard', image: n7 },
  { title: 'Cercueil non musulman haut de gamme', image: n8 },
  { title: 'Cercueil non musulman finition premium', image: n9 },
  { title: 'Cercueil non musulman preparation rapide', image: n10 },
]

function CercueilsNonMusulmansPage() {
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
          <h1>Cercueils non musulmans</h1>
          <p>
            Collection de cercueils non musulmans adaptee aux ceremonies civiles et religieuses,
            avec une presentation soignee et des finitions variees.
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

            <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination cercueils non musulmans">
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

export default CercueilsNonMusulmansPage
