import { useState } from 'react'
import QuickContactLinks from '../components/QuickContactLinks'

import plaque1 from '../assets/plaques/Plaque-funeraire-bronze-feuille-fleur-300x237.png'
import plaque2 from '../assets/plaques/Plaque-funeraire-bronze-livre-colombes-300x263.png'
import plaque3 from '../assets/plaques/Plaque-funeraire-bronze-pensee-fleur-300x259.png'
import plaque4 from '../assets/plaques/Plaque-funeraire-bronze-duo-fleurs-300x248.png'
import plaque5 from '../assets/plaques/Plaque-funeraire-bronze-livre-epis-de-ble-300x256.png'
import plaque6 from '../assets/plaques/Plaque-funeraire-bronze-nuage-fleur-300x258.png'
import plaque7 from '../assets/plaques/Plaque-funeraire-bronze-parchemin-fleur-300x225.png'
import plaque8 from '../assets/plaques/Plaque-funeraire-bronze-main-colombe-300x252.png'
import plaque9 from '../assets/plaques/Plaque-funeraire-bronze-oiseau-300x255.png'
import plaque10 from '../assets/plaques/Plaque-funeraire-bronze-livre-fleuri-300x241.png'
import plaque11 from '../assets/plaques/Plaque-funeraire-bronze-feuille-papillon-300x255.png'
import plaque12 from '../assets/plaques/Plaque-funeraire-bronze-carre-epis-de-ble-300x242.png'
import plaque13 from '../assets/plaques/Plaque-funeraire-coeur-sur-presentoire-300x237.png'
import plaque14 from '../assets/plaques/Plaque-funeraire-bronze-livre-avec-fleur-300x243.png'
import plaque15 from '../assets/plaques/Plaque-funeraire-bronze-bouquet-garni-300x231.png'
import plaque16 from '../assets/plaques/Plaque-funeraire-bronze-bouquet-fleuri-300x234.png'
import plaque17 from '../assets/plaques/Plaque-funeraire-feuille-musique-300x208.png'
import plaque18 from '../assets/plaques/Plaque-funeraire-bronze-Colombe-300x203.png'
import plaque19 from '../assets/plaques/Plaque-funeraire-bronze-Fleur-300x259.png'
import plaque20 from '../assets/plaques/Plaque-funeraire-bronze-nuage-Vierge-Marie-300x258.png'
import plaque21 from '../assets/plaques/Nouveau-projet-1-300x256.png'
import plaque22 from '../assets/plaques/Plaque-funeraire-Bronze-bouquet-epis-de-ble-300x262.png'
import plaque23 from '../assets/plaques/Plaque-funeraire-Bonze-nuage-300x249.png'

const plaquesData = [
  { title: 'PLAQUE FUNÉRAIRE BRONZE « FEUILLE FLEUR »', price: '980,00 DH', image: plaque1 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « LIVRE COLOMBES »', price: '2.000,00 DH', image: plaque2 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « PENSÉE FLEUR »', price: '1.780,00 DH', image: plaque3 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « DUO FLEURS »', price: '1.050,00 DH', image: plaque4 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « LIVRE ÉPIS DE BLÉ »', price: '800,00 DH', image: plaque5 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « NUAGE FLEUR »', price: '1.250,00 DH', image: plaque6 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « PARCHEMIN FLEUR »', price: '980,00 DH', image: plaque7 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « MAIN COLOMBE »', price: '1.400,00 DH', image: plaque8 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE OISEAU »', price: '1.650,00 DH', image: plaque9 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE LIVRE FLEURI »', price: '1.180,00 DH', image: plaque10 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE FEUILLE PAPILLON »', price: '980,00 DH', image: plaque11 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « CARRÉ ÉPIS DE BLÉ »', price: '550,00 DH', image: plaque12 },
  { title: 'PLAQUE FUNÉRAIRE « CŒUR SUR PRÉSENTOIRE »', price: '1.350,00 DH', image: plaque13 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « LIVRE AVEC FLEUR »', price: '1.600,00 DH', image: plaque14 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE BOUQUET GARNI »', price: '1.250,00 DH', image: plaque15 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE BOUQUET FLEURI »', price: '1.500,00 DH', image: plaque16 },
  { title: 'PLAQUE FUNÉRAIRE « FEUILLE MUSIQUE »', price: '1.780,00 DH', image: plaque17 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE COLOMBE »', price: '980,00 DH', image: plaque18 },
  { title: 'PLAQUE FUNÉRAIRE « BRONZE FLEUR »', price: '790,00 DH', image: plaque19 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « NUAGE VIERGE MARIE »', price: '1.170,00 DH', image: plaque20 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « VIERGE MARIE »', price: '900,00 DH', image: plaque21 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « BOUQUET ÉPIS DE BLÉ »', price: '800,00 DH', image: plaque22 },
  { title: 'PLAQUE FUNÉRAIRE BRONZE « NUAGE »', price: '1.480,00 DH', image: plaque23 },
]

function PlaquesPage() {
  const [page, setPage] = useState(1)
  const perPage = 12

  const totalPages = Math.max(1, Math.ceil(plaquesData.length / perPage))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * perPage
  const visiblePlaques = plaquesData.slice(startIndex, startIndex + perPage)

  return (
    <section className="section plaques-section plaques-catalogue-section">
      <div className="container plaques-wrap">
        <div className="plaques-head reveal-on-scroll">
          <span>Catalogue Universal PF </span>
          <h1>Plaques funéraires</h1>
          <p>Sélection de plaques funéraires en bronze et granit avec gravures et finitions variées.</p>
        </div>

        <div className="plaques-toolbar reveal-on-scroll">
          <p>
            Affichage de {plaquesData.length === 0 ? 0 : startIndex + 1}-
            {Math.min(startIndex + visiblePlaques.length, plaquesData.length)} sur {plaquesData.length} résultats
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

            <div className="plaques-pagination reveal-on-scroll" aria-label="Pagination plaques funéraires">
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
            <p>Contactez Universal PF pour recevoir une proposition selon votre besoin et votre budget.</p>
            <QuickContactLinks />

            <a className="plaques-side-btn" href="/contact">Demander un devis</a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default PlaquesPage


