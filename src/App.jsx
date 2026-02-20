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
