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
import PlaquesPage from './pages/PlaquesPage'
import CercueilsMusulmansPage from './pages/CercueilsMusulmansPage'
import CercueilsNonMusulmansPage from './pages/CercueilsNonMusulmansPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qui-sommes-nous" element={<AboutPage />} />

        <Route path="/service/pompes-funebres-musulmanes" element={<MuslimFuneralPage />} />
        <Route
          path="/pompes-funebres/musulmanes"
          element={<Navigate to="/service/pompes-funebres-musulmanes" replace />}
        />

        <Route path="/service/pompes-funebres-non-musulmanes" element={<NonMuslimFuneralPage />} />
        <Route
          path="/pompes-funebres/non-musulmanes"
          element={<Navigate to="/service/pompes-funebres-non-musulmanes" replace />}
        />

        <Route path="/service/fleurs" element={<FleursPage />} />
        <Route path="/produits/fleurs" element={<Navigate to="/service/fleurs" replace />} />
        <Route path="/produits/plaques" element={<PlaquesPage />} />
        <Route
          path="/produits/cercueils-musulmans"
          element={<CercueilsMusulmansPage />}
        />
        <Route
          path="/produits/cercueils-non-musulmans"
          element={<CercueilsNonMusulmansPage />}
        />
        <Route
          path="/service/nettoyage-fleurissement"
          element={<NettoyageFleurissementPage />}
        />
        <Route
          path="/produits/nettoyage-fleurissement"
          element={<Navigate to="/service/nettoyage-fleurissement" replace />}
        />

        <Route
          path="/produits/marbrerie-musulmane"
          element={<MarbrerieMusulmanePage />}
        />
        <Route
          path="/service/marbrerie-musulmane"
          element={<Navigate to="/produits/marbrerie-musulmane" replace />}
        />

        <Route
          path="/produits/marbrerie-non-musulmane"
          element={<MarbrerieNonMusulmanePage />}
        />
        <Route
          path="/service/marbrerie-non-musulmane"
          element={<Navigate to="/produits/marbrerie-non-musulmane" replace />}
        />

        <Route path="/villes/:slug" element={<CityAgencyPage />} />
        <Route path="/assistance" element={<AssistancePage />} />
        <Route path="/services-entreprises" element={<ServicesEntreprisePage />} />
        <Route
          path="/service/services-entreprises"
          element={<Navigate to="/services-entreprises" replace />}
        />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
