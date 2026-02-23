import { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickContactLinks from '../components/QuickContactLinks'
import n1 from '../assets/cercueils-non-musulmans/TOUVOIS1-300x158.png'
import n2 from '../assets/cercueils-non-musulmans/POMOY-1-300x158.jpg.webp'
import n3 from '../assets/cercueils-non-musulmans/TAULIS-300x158.jpg.webp'
import n4 from '../assets/cercueils-non-musulmans/TEILLET-1-300x158.jpg.webp'
import n5 from '../assets/cercueils-non-musulmans/TREVILLE-CLAIRE-1-300x158.jpg.webp'
import n6 from '../assets/cercueils-non-musulmans/TALLER-1-300x158.jpg.webp'
import n7 from '../assets/cercueils-non-musulmans/PANNEAUX-DE-FRANCE-3-COUVERCLES-1-300x158.png'
import n8 from '../assets/cercueils-non-musulmans/TERROU-1-300x158.png'
import n9 from '../assets/cercueils-non-musulmans/PANNEAUX-DE-FRANCE-2-COUVERCLES-1-300x158.jpg.webp'
import n10 from '../assets/cercueils-non-musulmans/POINTEL-1-300x158.jpg.webp'
import n11 from '../assets/cercueils-non-musulmans/PLESSIS-300x158.jpg.webp'
import n12 from '../assets/cercueils-non-musulmans/PARISIEN-ACAJOU-300x158.jpg.webp'
import n13 from '../assets/cercueils-non-musulmans/BOIS-BLANC-TEINTE-PRUNET-300x158.jpg.webp'
import n14 from '../assets/cercueils-non-musulmans/BOIS-BLANC-TEINTE-PRADES-300x158.jpg.webp'
import n15 from '../assets/cercueils-non-musulmans/CAPITON-CLOULEUR-CHAMPAGNE-300x158.jpg.webp'
import n16 from '../assets/cercueils-non-musulmans/CAPITON-CLOULEUR-BLANCHE-300x158.jpg.webp'
import n17 from '../assets/cercueils-non-musulmans/CAPITON-CLOULEUR-GRISE-300x158.jpg.webp'
import n18 from '../assets/cercueils-non-musulmans/DRAP-MORTUAIRE-NOIR-AVEC-CROIX-1-300x158.png'
import n19 from '../assets/cercueils-non-musulmans/DRAP-MORTUAIRE-DRAPEAU-FRANCAIS-1-300x158.png'

const products = [
  { title: 'TOUVOIS', image: n1 },
  { title: 'POMOY', image: n2 },
  { title: 'TAULIS', image: n3 },
  { title: 'TEILLET', image: n4 },
  { title: 'TREVILLE CLAIRE', image: n5 },
  { title: 'TALLER', image: n6 },
  { title: 'PANNEAUX DE FRANCE 3 COUVERCLES', image: n7 },
  { title: 'TERROU', image: n8 },
  { title: 'PANNEAUX DE FRANCE 2 COUVERCLES', image: n9 },
  { title: 'POINTEL', image: n10 },
  { title: 'PLESSIS', image: n11 },
  { title: 'PARISIEN ACAJOU', image: n12 },
  { title: 'BOIS BLANC TEINTE Â«PRUNETÂ»', image: n13 },
  { title: 'BOIS BLANC TEINTE Â«PRADESÂ»', image: n14 },
  { title: 'CAPITON COULEUR CHAMPAGNE', image: n15 },
  { title: 'CAPITON COULEUR BLANCHE', image: n16 },
  { title: 'CAPITON COULEUR GRISE', image: n17 },
  { title: 'DRAP MORTUAIRE NOIR AVEC CROIX', image: n18 },
  { title: 'DRAP MORTUAIRE DRAPEAU FRANCAIS', image: n19 },
]

function CercueilsNonMusulmansPage() {
  const [page, setPage] = useState(1)
  const perPage = 12
  const totalPages = Math.max(1, Math.ceil(products.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visibleProducts = products.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section cercueils-non-musulmans-section">
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
            <QuickContactLinks />

            <Link className="plaques-side-btn" to="/contact">Demander un devis</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CercueilsNonMusulmansPage


