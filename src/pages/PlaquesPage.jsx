import { useState } from 'react'
import plaque1 from '../assets/images/1.png'
import plaque2 from '../assets/images/2.png'
import plaque3 from '../assets/images/3.png'
import plaque4 from '../assets/images/4.png'
import plaque5 from '../assets/images/5.png'
import plaque6 from '../assets/images/6.png'
import plaque7 from '../assets/images/11.jpg'
import plaque8 from '../assets/images/13.jpg'
import plaque9 from '../assets/images/14.jpg'
import plaque10 from '../assets/images/IMG-20260221-WA0025.jpg'
import plaque11 from '../assets/images/IMG-20260221-WA0026.jpg'
import plaque12 from '../assets/images/s.png'
import plaque13 from '../assets/images/ss.png'
import plaque14 from '../assets/images/a.jpeg'
import plaque15 from '../assets/images/12.jpg'

const plaquesData = [
  { title: 'Plaque funeraire bronze feuille fleur', price: '980,00 DH', category: 'Bronze', image: plaque1 },
  { title: 'Plaque funeraire bronze livre colombes', price: '2.000,00 DH', category: 'Bronze', image: plaque2 },
  { title: 'Plaque funeraire bronze pensee fleur', price: '1.780,00 DH', category: 'Bronze', image: plaque3 },
  { title: 'Plaque funeraire bronze duo fleurs', price: '1.050,00 DH', category: 'Bronze', image: plaque4 },
  { title: 'Plaque funeraire bronze epi de ble', price: '800,00 DH', category: 'Bronze', image: plaque5 },
  { title: 'Plaque funeraire bronze nuage fleur', price: '1.250,00 DH', category: 'Bronze', image: plaque6 },
  { title: 'Plaque funeraire bronze parchemin', price: '980,00 DH', category: 'Bronze', image: plaque7 },
  { title: 'Plaque funeraire bronze main colombe', price: '1.400,00 DH', category: 'Bronze', image: plaque8 },
  { title: 'Plaque funeraire bronze oiseau', price: '1.650,00 DH', category: 'Bronze', image: plaque9 },
  { title: 'Plaque funeraire granit noir', price: '1.180,00 DH', category: 'Granit', image: plaque10 },
  { title: 'Plaque funeraire bronze feuille papillon', price: '980,00 DH', category: 'Bronze', image: plaque11 },
  { title: 'Plaque funeraire bronze carre epi de ble', price: '550,00 DH', category: 'Bronze', image: plaque12 },
  { title: 'Plaque funeraire personnalisee premium', price: '1.950,00 DH', category: 'Personnalisee', image: plaque13 },
  { title: 'Plaque funeraire gravure doree', price: '1.320,00 DH', category: 'Personnalisee', image: plaque14 },
  { title: 'Plaque funeraire granit classique', price: '880,00 DH', category: 'Granit', image: plaque15 },
]

function PlaquesPage() {
  const [page, setPage] = useState(1)
  const perPage = 12

  const filteredPlaques = plaquesData

  const totalPages = Math.max(1, Math.ceil(filteredPlaques.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visiblePlaques = filteredPlaques.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section">
      <div className="container plaques-wrap">
        <div className="plaques-head reveal-on-scroll">
          <span>Catalogue PFM</span>
          <h1>Plaques funeraires</h1>
          <p>
            Selection de plaques funeraires avec finitions bronze, granit et gravures personnalisees.
          </p>
        </div>

        <div className="plaques-toolbar reveal-on-scroll">
          <p>
            Affichage de {filteredPlaques.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + visiblePlaques.length, filteredPlaques.length)} sur {filteredPlaques.length} resultats
          </p>
        </div>

        <div className="plaques-content-layout">
          <div>
            <div className="plaques-grid">
              {visiblePlaques.map((item, index) => (
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
                    <p>{item.price}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination plaques funeraires">
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
            <a href="tel:+212522491616">📞 +212 522 49 16 16</a>
            <a href="tel:+212522207111">📞 +212 522 20 71 11</a>
            <a href="https://wa.me/212661502763">🟢 WhatsApp: +212 661 502 763</a>
            <a href="mailto:pfmcasa@pfmassistance.ma">✉ pfmcasa@pfmassistance.ma</a>
            <a className="plaques-side-btn" href="/contact">Demander un devis</a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default PlaquesPage
