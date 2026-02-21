import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MuslimFuneralPage from './pages/MuslimFuneralPage'
import NonMuslimFuneralPage from './pages/NonMuslimFuneralPage'
import MarbrerieMusulmanePage from './pages/MarbrerieMusulmanePage'
import MarbrerieNonMusulmanePage from './pages/MarbrerieNonMusulmanePage'
import FleursPage from './pages/FleursPage'
import NettoyageFleurissementPage from './pages/NettoyageFleurissementPage'
import CityAgencyPage from './pages/CityAgencyPage'
import AssistancePage from './pages/AssistancePage'
import ServicesEntreprisePage from './pages/ServicesEntreprisePage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import ProductCategoryPage from './pages/ProductCategoryPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qui-sommes-nous" element={<AboutPage />} />

        <Route path="/pompes-funebres/musulmanes" element={<MuslimFuneralPage />} />

        <Route path="/pompes-funebres/non-musulmanes" element={<NonMuslimFuneralPage />} />

        <Route path="/produits/fleurs" element={<FleursPage />} />
        <Route
          path="/produits/plaques"
          element={
            <ProductCategoryPage
              title="Plaques funeraires"
              description="Plaques funeraires personnalisees avec gravure soignee, formats varies et finitions elegantes."
              highlights={[
                'Plaques en granit, marbre, verre ou metal',
                'Personnalisation du texte, des motifs et de la typographie',
                'Pose et fixation sur monument ou stele',
                'Conseil sur la durabilite et le rendu visuel',
              ]}
              extraSections={[
                {
                  title: 'Options de personnalisation',
                  items: [
                    'Choix de dimensions et de formes',
                    'Gravure classique ou doree',
                    'Insertion de symbole ou photo ceramique',
                    'Maquette validee avant fabrication',
                  ],
                },
              ]}
            />
          }
        />
        <Route
          path="/produits/cercueils-musulmans"
          element={
            <ProductCategoryPage
              title="Cercueils musulmans"
              description="Une gamme de cercueils musulmans adaptes aux exigences du transport et au respect des rites."
              highlights={[
                'Modeles conformes pour transport national et international',
                'Plaque d identification funeraire',
                'Options avec hublot selon le choix de la famille',
                'Disponibilite rapide 24h/24',
              ]}
            />
          }
        />
        <Route
          path="/produits/cercueils-non-musulmans"
          element={
            <ProductCategoryPage
              title="Cercueils non musulmans"
              description="Collection de cercueils non musulmans du modele sobre au modele haut de gamme."
              highlights={[
                'Cercueils en bois et autres finitions',
                'Interieur capitonne selon preferences',
                'Formats adaptes aux contraintes de transport',
                'Accompagnement par un conseiller dedie',
              ]}
            />
          }
        />
        <Route
          path="/produits/nettoyage-fleurissement"
          element={<NettoyageFleurissementPage />}
        />

        <Route
          path="/produits/marbrerie-musulmane"
          element={<MarbrerieMusulmanePage />}
        />

        <Route
          path="/produits/marbrerie-non-musulmane"
          element={<MarbrerieNonMusulmanePage />}
        />

        <Route path="/villes/:slug" element={<CityAgencyPage />} />
        <Route path="/assistance" element={<AssistancePage />} />
        <Route path="/services-entreprises" element={<ServicesEntreprisePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
