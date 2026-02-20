import { Link } from 'react-router-dom'
import imageHero from '../assets/images/2.png'
import imageRite from '../assets/images/8.jpg'
import imageTeam from '../assets/images/20.jpg'
import imageTransport from '../assets/images/18.jpg'
import imageStone from '../assets/images/14.jpg'

const nonMuslimServiceCards = [
  { title: 'Rapatriement de corps', image: imageTransport },
  { title: 'Inhumation non musulmane', image: imageRite },
  { title: 'Marbrerie et monuments', image: imageStone },
]

const repatriementPoints = [
  'Accueil des familles et accompagnement humain des la premiere prise de contact.',
  'Prise en charge par un conseiller durant toutes les etapes du rapatriement.',
  'Relation avec les proches du defunt au Maroc et a l etranger.',
  'Coordination entre assistance, assurance, famille, ambassade et consulat.',
  'Transcription du deces aupres du consulat.',
  'Liaison avec le ministere des Affaires etrangeres et le notaire si necessaire.',
  "Liaison avec les directeurs de pompes Funèbres d accueil a l etranger.",
  'Traduction de documents et validation des pieces administratives.',
  'Obtention des actes de deces pour la succession aupres des autorites concernees.',
  'Soins de conservation selon les normes en vigueur.',
  'Transport au Maroc et a l etranger selon la destination.',
  'Assistance deces et rapatriement dans le monde entier.',
  'Large gamme de cercueils agrees pour le transport aerien.',
]

const repatriementPlus = [
  'Rapatriement de bagages et d effets personnels.',
  'Billets passagers pour la famille si necessaire.',
  'Reservation d hotel, de taxi et organisation logistique complementaire.',
]

const exhumationPoints = [
  'Constitution du dossier d exhumation avec les pieces minimales requises.',
  'Intervention d une equipe specialisee pour l exhumation et la mise en biere.',
  'Fourniture possible de cercueils reduits selon la situation.',
  'Reinhumation des restes mortels dans le respect des procedures.',
  'Organisation du transfert a l etranger lorsque necessaire.',
  'Utilisation de tenues speciales desinfectees apres intervention.',
]

const funeralServices = [
  'Demarches et formalites pour declaration de deces.',
  'Transport du corps avant et apres mise en biere.',
  'Mise en biere par une equipe de professionnels (toilette, habillage).',
  'Transports funeraires et preparation du convoi avec assistant funeraire.',
  'Organisation de ceremonie religieuse avec maitre de ceremonie, table et registre de condoleances.',
  'Inhumation en caveau ou concession trentenaire selon les choix de la famille.',
  'Conservation temporaire du corps avec medecin conventionne.',
  'Fabrication et vente de cercueils en bois et en metal avec accessoires.',
  'Exhumation et transfert selon la reglementation.',
  'Rapatriement de corps dans le monde entier.',
  'Intervention sur l ensemble du territoire avec 13 succursales.',
  'Accueil aeroport arrivee et depart.',
  'Renovation de sepulture.',
]

const professionalMeans = [
  'Equipe professionnelle disponible 24h/24 et 7j/7.',
  'Conseillers dedies pour informer et orienter les familles.',
  'Collaboration avec assurances internationales, etat civil marocain et services consulaires.',
  'Fabrication de cercueils en bois selon normes nationales et internationales, avec capiton.',
  'Realisation de compositions florales mortuaires en fleurs naturelles.',
  'Parc important de fourgons mortuaires haut de gamme.',
  'Bureau central proche des consulats, prefecture et wilaya, avec couverture nationale et correspondants a l international.',
]

const marbrerieChoices = [
  'Choix du monument.',
  'Gravure personnalisee.',
  'Choix de la matiere.',
  'Selection selon couleur, forme, gravure et budget.',
]

const marbrerieWorks = [
  'Tous travaux de cimetiere.',
  'Caveaux.',
  'Creation de monuments funeraires.',
  'Gravure.',
  'Jardiniere et vase.',
  'Vente d articles funeraires.',
  'Marbrerie et entretien de sepultures.',
  'Remise a niveau de monuments.',
  'Fleurissement.',
  'Refection de gravure, polissage et astiquage.',
]

const workshopsInfo = [
  'Deux grands ateliers de menuiserie a Casablanca et Rabat pour reduire les delais.',
  'Confection de cercueils en zinc et capitons par nos techniciens.',
  'Large gamme de cercueils du modele simple au modele luxueux.',
  'Stock minimum de 900 unites disponible.',
  'Filtres funeraires avion importes selon normes techniques.',
  'Fabrication de capitons ordinaires et de luxe (garniture interieure).',
]

const prestationDetails = [
  'Accueil des familles.',
  'Realisation de toutes les demarches administratives.',
  'Personnalisation de la ceremonie funeraire (voiture, porteurs, maitre de ceremonie).',
  'Transport au Maroc et a l etranger.',
  'Assistance deces et rapatriement dans le monde.',
  'Soins de conservation.',
  'Inhumation, cremation ou exhumation.',
  'Realisation de caveau en 48h.',
  'Choix de cercueils agrees pour le transport aerien.',
  'Choix de fleurs artificielles et naturelles.',
]

const familyDocs = [
  'Pieces d identite du defunt.',
  'Procuration de la famille.',
  'Pieces afferentes au cimetiere si necessaire.',
]

const cmpfFormalities = [
  "Autorisation d inhumation.",
  'Fourniture du cercueil selon le choix de la famille.',
  'Mise en biere.',
  'PV de fermeture du cercueil.',
  "Obtention du permis d inhumer.",
  'Obtention des actes de deces.',
  "Achat de concession en cas de besoin.",
  'Construction de caveau.',
  'Fourniture de la pierre tombale.',
]

function NonMuslimFuneralPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Pompes Funèbres non musulmanes</span>
            <h1>Pompes Funèbres Non Musulmanes</h1>
            <p>
              Dans le domaine des pompes Funèbres pour les non musulmans, les familles, organismes
              d assurances, assistances, consulats ou ambassades du pays d origine d un defunt
              beneficient d une prise en charge claire, complete et rassurante.
            </p>
            <p>
              CMPF assure une organisation professionnelle de chaque intervention, du rapatriement a
              l inhumation, avec une coordination administrative rigoureuse et une disponibilite
              permanente.
            </p>
            <div className="mf-hero-actions">
              <a href="tel:+212522491616" className="btn btn-primary">
                Appel urgence 24h/24
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Parler a un conseiller
              </Link>
            </div>
          </div>

          <div className="mf-hero-visual">
            <figure className="mf-hero-photo mf-hero-photo-main">
              <img src={imageHero} alt="Pompes Funèbres non musulmanes CMPF" />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={imageRite} alt="Ceremonie non musulmane CMPF" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-insight-section">
        <div className="container mf-insight-wrap reveal-on-scroll">
          <div className="mf-insight-head">
            <h2>Nos poles d intervention non musulmane</h2>
            <p>Rapatriement, inhumation, exhumation et marbrerie</p>
          </div>
          <div className="mf-insight-cards">
            {nonMuslimServiceCards.map((item) => (
              <article key={item.title} className="mf-insight-card">
                <img src={item.image} alt={item.title} />
                <div>{item.title}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Rapatriement de corps</span>
          <h2>Assistance specifique pour deces a l etranger</h2>
          <p>
            La perte d un etre cher dans un pays etranger est une epreuve douloureuse. CMPF organise
            toutes les etapes du rapatriement avec methode, rigueur et coordination internationale.
          </p>
          <p>
            Grace a nos agences a travers le territoire, nous proposons des services complets depuis
            n importe quelle region du Maroc vers n importe quelle destination.
          </p>
          <ul className="mf-rich-list">
            {repatriementPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Services complementaires proposes</h3>
          <ul className="mf-rich-list">
            {repatriementPlus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            De nombreux organismes d assistance et d assurance marocains et etrangers confient a
            CMPF l execution des prestations obseques de leurs assures.
          </p>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Inhumation</span>
          <h2>Organisation de l inhumation en pleine terre ou en caveau</h2>
          <p>
            Une inhumation peut etre effectuee en pleine terre ou dans un caveau (structure en beton
            evitant le contact direct de la terre avec le cercueil). Toute personne disposant d une
            concession de famille peut y etre inhumee, quel que soit son domicile ou le lieu du deces.
          </p>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Exhumation</span>
          <h2>Procedures specialisees et transfert international</h2>
          <ul className="mf-rich-list">
            {exhumationPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Nos services funeraires</span>
          <h2>Prestations completement integrees</h2>
          <ul className="mf-rich-list">
            {funeralServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Nos moyens professionnels</span>
          <h2>Ressources humaines, techniques et logistiques</h2>
          <ul className="mf-rich-list">
            {professionalMeans.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Marbrerie</span>
          <h2>Monuments funeraires, restauration et entretien</h2>
          <p>
            Le monument funeraire est un repere essentiel pour les familles. CMPF accompagne le
            choix, la pose, la restauration et l entretien avec un savoir-faire reconnu.
          </p>
          <h3>Choix proposes aux familles</h3>
          <ul className="mf-rich-list">
            {marbrerieChoices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            L eventail des activites couvre les services au cimetiere ainsi que la realisation et la
            restauration de monuments commemoratifs.
          </p>
          <h3>Travaux realises</h3>
          <ul className="mf-rich-list">
            {marbrerieWorks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            A des dates ponctuelles ou de maniere reguliere (anniversaires, fetes religieuses, dates
            symboliques), vous pouvez nous confier vos travaux. Nous proposons egalement des contrats
            d entretien de monuments.
          </p>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Nos usines</span>
          <h2>Capacite de production et disponibilite immediate</h2>
          <ul className="mf-rich-list">
            {workshopsInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Details de la prestation</span>
          <h2>CMPF prend en charge l ensemble du parcours</h2>
          <ul className="mf-rich-list">
            {prestationDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Les seules pieces demandees aux familles sont les elements suivants, puis CMPF s occupe
            du reste avec les autorites et services concernes.
          </p>
          <ul className="mf-rich-list">
            {familyDocs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Formalites realisees par CMPF</h3>
          <ul className="mf-rich-list">
            {cmpfFormalities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={imageTeam} alt="Equipe CMPF non musulmane" />
            <img src={imageTransport} alt="Transport funeraire non musulman" />
          </div>
          <div className="mf-banner-copy">
            <h2>CMPF, partenaire fiable pour les pompes Funèbres non musulmanes</h2>
            <p>
              Avec une presence nationale, des ressources professionnelles et une organisation
              rigoureuse, CMPF accompagne familles, organismes d assurance et institutions avec
              reactivite, clarte et respect.
            </p>
            <p>
              Notre mission: garantir une execution complete, humaine et conforme, du premier appel
              jusqu a la finalisation de toutes les formalites.
            </p>
            <div className="mf-hero-actions">
              <Link to="/#nos-agences" className="btn btn-secondary">
                Voir nos agences
              </Link>
              <a href="tel:+212522491616" className="btn btn-primary">
                Demander une intervention
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NonMuslimFuneralPage

