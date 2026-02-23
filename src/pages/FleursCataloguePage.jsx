import { useState } from 'react'
import { Link } from 'react-router-dom'
import fleur1 from '../assets/fleurs/1.jpg'
import fleur2 from '../assets/fleurs/2.jpg'
import fleur3 from '../assets/fleurs/3.jpg'
import fleur4 from '../assets/fleurs/4.jpg'
import fleur5 from '../assets/fleurs/5.jpg'
import fleur6 from '../assets/fleurs/6.jpg'
import fleur7 from '../assets/images/13.jpg'
import fleur8 from '../assets/images/3.png'
import fleur9 from '../assets/images/4.png'
import fleur10 from '../assets/images/5.png'

const products = [
  { title: 'Gerbe florale hommage classique', image: fleur1 },
  { title: 'Couronne florale de ceremonie', image: fleur2 },
  { title: 'Bouquet funeraire personnalise', image: fleur3 },
  { title: 'Composition florale pour tombe', image: fleur4 },
  { title: 'Fleurissement souvenir hebdomadaire', image: fleur5 },
  { title: 'Arrangement floral premium', image: fleur6 },
  { title: 'Decoration florale de convoi', image: fleur7 },
  { title: 'Couronne blanche ceremonielle', image: fleur8 },
  { title: 'Composition rose et lys', image: fleur9 },
  { title: 'Bouquet de recueillement', image: fleur10 },
]

function FleursPage() {
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

export default FleursPage
