import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FuneralTypePage from './pages/FuneralTypePage'
import ProductCategoryPage from './pages/ProductCategoryPage'
import CityAgencyPage from './pages/CityAgencyPage'
import AssistancePage from './pages/AssistancePage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qui-sommes-nous" element={<AboutPage />} />

        <Route
          path="/pompes-funebres/musulmanes"
          element={
            <FuneralTypePage
              title="Pompes Funèbres Musulmanes"
              intro="CMPF répond à tous vos besoins. Nos prestations se déroulent dans le plus grand respect des rites islamiques, avec conscience, rapidité et accompagnement humain."
              services={[
                "Rapatriement de corps depuis le Maroc vers l'etranger et depuis l'etranger vers le Maroc.",
                'Accueil des familles et suivi personnalise par un conseiller durant toutes les etapes.',
                'Coordination avec assurance, assistance, ambassade, consulat et autorites locales.',
                'Transcription du deces, traduction des documents et obtention des actes utiles a la succession.',
                'Transport funeraire au Maroc et a l international, avec cercueils agrees transport aerien.',
                'Prise en charge complete de l inhumation selon les rites musulmans.',
                'Toilette rituelle, linceul et fourniture des articles necessaires a la toilette mortuaire.',
                'Mise a disposition de fourgons mortuaires avec cellule refrigeree.',
                'Reception des corps arrives de l etranger dans tous les aeroports du Royaume.',
                'Marbrerie musulmane et travaux de tombes selon les attentes des familles.',
              ]}
              sections={[
                {
                  title: 'Rapatriement de corps',
                  text: "La perte d un proche a l etranger est douloureuse. CMPF organise chaque etape du rapatriement avec rigueur, dans toutes les regions du Maroc et vers toutes les destinations.",
                  items: [
                    'Liaison avec le ministere des Affaires etrangeres et le notaire si necessaire.',
                    "Coordination avec les pompes funebres d'accueil a l'etranger.",
                    'Assistance deces et rapatriement dans le monde, 24h/24 et 7j/7.',
                    'Services complementaires: rapatriement de bagages, billets passagers, hotel et taxi.',
                  ],
                },
                {
                  title: 'Inhumation - Transfert - Reception de corps',
                  items: [
                    'Constitution rapide du dossier et realisation des demarches administratives.',
                    'Transport de corps par avion ou par route selon la destination.',
                    "Cercueil musulman avec plaque d'identification et hublot sur demande de la famille.",
                    'Chauffeurs experimentes, respectueux des rites musulmans et de la dignite des defunts.',
                  ],
                },
                {
                  title: 'Exhumation',
                  text: 'Une equipe specialisee est deleguee pour l exhumation, la mise en biere et la reinhumation des restes mortels. En cas de transfert a l etranger, CMPF organise aussi l acheminement complet.',
                  items: [
                    'Procedures administratives dediees aux exhumations.',
                    'Mise en biere avec possibilite de cercueils reduits.',
                    'Equipes equipees de tenues specifiques desinfectees apres intervention.',
                  ],
                },
              ]}
            />
          }
        />

        <Route
          path="/pompes-funebres/non-musulmanes"
          element={
            <FuneralTypePage
              title="Pompes Funèbres Non Musulmanes"
              intro="Organisation de cérémonies civiles et religieuses personnalisées, avec un interlocuteur unique, un cadre professionnel et un accompagnement complet de la famille."
              services={[
                'Ceremonie civile, catholique, protestante, orthodoxe ou autre confession.',
                'Preparation du defunt et presentation en chambre funeraire.',
                'Organisation inhumation ou cremation avec accompagnement humain.',
                'Assistance administrative et coordination des intervenants.',
              ]}
              sections={[
                {
                  title: 'Accompagnement complet',
                  items: [
                    'Accueil, ecoute et conseils adaptes a chaque situation familiale.',
                    'Organisation logistique de la ceremonie et coordination des intervenants.',
                    'Transport funeraire local, national et international selon le besoin.',
                    'Suivi administratif clair avec disponibilite permanente.',
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
              title="Cercueils Musulmans"
              description="Modeles sobres et conformes aux exigences reglementaires et religieuses."
              highlights={[
                'Large gamme de cercueils agrees pour le transport aerien.',
                "Plaque d'identification funeraire incluse.",
                'Option hublot selon le souhait de la famille.',
                'Conseil personnalise selon le rite et la destination.',
              ]}
            />
          }
        />

        <Route
          path="/produits/cercueils-non-musulmans"
          element={
            <ProductCategoryPage
              title="Cercueils Non Musulmans"
              description="Large choix de styles, essences et finitions pour ceremonies civiles ou religieuses."
              highlights={[
                'Modeles classiques, contemporains et personnalisables.',
                'Solutions adaptees aux inhumations et cremations.',
                'Respect des normes de securite et de transport.',
                'Accompagnement par un conseiller funeraire CMPF.',
              ]}
            />
          }
        />

        <Route
          path="/produits/fleurs"
          element={
            <ProductCategoryPage
              title="Fleurs"
              description="Une large gamme florale avec livraison gratuite et ruban personnalise."
              highlights={[
                'Gerbes, couronnes et compositions naturelles ou artificielles.',
                'Confection et livraison assurees par CMPF Fleurs.',
                'Conseil selon les circonstances et les emotions a exprimer.',
                'Compositions personnalisees en formes, couleurs et styles.',
              ]}
              extraSections={[
                {
                  title: 'Hommage et souvenir',
                  text: 'Les fleurs restent un element essentiel du souvenir. CMPF Fleurs traduit avec elegance l emotion des familles.',
                  items: [
                    'Obseques et hommages personnalises.',
                    'Toussaint, floraison des tombes et entretien floral saisonnier.',
                  ],
                },
                {
                  title: 'Services evenementiels',
                  items: [
                    'Decoration de voiture, salle de fete ou conference.',
                    'Mariage, naissance, anniversaire et evenements familiaux.',
                    'Compositions en fleurs artificielles pretes a emporter.',
                  ],
                },
              ]}
            />
          }
        />

        <Route
          path="/produits/plaques"
          element={
            <ProductCategoryPage
              title="Plaques"
              description="Plaques funeraires classiques, modernes et personnalisees pour un hommage durable."
              highlights={[
                'Plaques avec inscription personnalisee.',
                'Differents formats, materiaux et coloris.',
                'Conseils de personnalisation avec validation avant realisation.',
              ]}
            />
          }
        />

        <Route
          path="/produits/marbrerie-musulmane"
          element={
            <ProductCategoryPage
              title="Marbrerie Musulmane"
              description="Le monument funeraire est essentiel pour preserver la memoire des proches. CMPF propose des monuments de haute qualite, durables et adaptes aux carres musulmans."
              highlights={[
                'Choix du monument selon la forme, la couleur, la matiere et le budget.',
                'Gravure personnalisee conforme aux attentes de la famille.',
                'Accompagnement par un conseiller funeraire specialise.',
              ]}
            />
          }
        />

        <Route
          path="/produits/marbrerie-non-musulmane"
          element={
            <ProductCategoryPage
              title="Marbrerie Non Musulmane"
              description="CMPF propose une large selection de monuments funeraires de haute qualite pour preserver durablement la memoire de vos proches."
              highlights={[
                'Monuments sur mesure avec finitions personnalisees.',
                'Conseils esthetiques, techniques et budgetaires.',
                'Realisation durable et resistante au temps.',
              ]}
              extraSections={[
                {
                  title: 'Nettoyage et fleurissement',
                  text: 'CMPF vous aide a rendre le plus bel hommage a votre proche avec un service regulier et professionnel.',
                  items: [
                    'Nettoyage complet de la tombe et desherbage.',
                    'Arrangement floral adapte a la saison.',
                    'Bilan photo avant/apres chaque intervention.',
                  ],
                },
                {
                  title: 'Renovation de sepultures',
                  text: 'Pour les monuments anciens ou tres encrasses, CMPF propose une renovation complete apres devis et accord de la famille.',
                  items: [
                    'Devis prealable detaille avant travaux.',
                    'Restauration du monument puis suivi d entretien durable.',
                    'Mise en place possible d un contrat d entretien et fleurissement.',
                  ],
                },
              ]}
            />
          }
        />

        <Route path="/villes/:slug" element={<CityAgencyPage />} />
        <Route path="/assistance" element={<AssistancePage />} />
        <Route path="/services-entreprises" element={<AssistancePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
