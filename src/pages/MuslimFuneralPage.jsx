import { Link } from 'react-router-dom'
import imageHero from '../assets/hero/1.png'
import imageRite from '../assets/images/Rapatriement.jpeg'
import imageTeam from '../assets/images/7.webp'
import imageTransport from '../assets/images/Rapatriement.jpeg'
import imageInhumationCard from '../assets/hero/1.png'
import imageMarbrerieCard from '../assets/hero/6.png'

const muslimServiceCards = [
  { title: 'Rapatriement de corps', image: imageTransport },
  { title: 'Inhumation musulmane', image: imageInhumationCard },
  { title: 'Marbrerie musulmane', image: imageMarbrerieCard },
]

const repatriementPoints = [
  'Accueil des familles.',
  'Prise en charge par un conseiller tout au long des differentes etapes du rapatriement.',
  'Relation avec les proches du defunt au Maroc et a l etranger.',
  'Coordination entre les differents intervenants (assistance, assurance, famille, ambassade, consulat, etc.).',
  'Transcription du deces aupres du consulat.',
  'Liaison avec le ministere des Affaires etrangeres et le notaire si necessaire.',
  'Liaison avec les directeurs de pompes Funèbres d accueil a l etranger.',
  'Traduction de documents.',
  'Obtention des actes de deces pour la succession aupres du consulat et des autorites marocaines.',
  'Soins de conservation.',
  'Transport au Maroc et a l etranger.',
  'Assistance deces et rapatriement dans le monde.',
  'Large gamme de cercueils agrees pour le transport aerien.',
]

const repatriementPlus = [
  'Rapatriement de bagages et d effets personnels.',
  'Billets passagers pour la famille si necessaire.',
  'Reservation d hotel, de taxi et organisation logistique complementaire.',
]

const transferPoints = [
  'Nous recevons les familles, comprenons leurs attentes et repondons a leurs questionnements.',
  'Nous garantissons une ecoute et une disponibilite 24h/24 et 7j/7 avec des conseils professionnels adaptes.',
  'Nous proposons une solution sur mesure pour organiser les obseques selon les volontes du defunt et de sa famille.',
  'Nous procedons rapidement a la constitution du dossier et aux demarches administratives.',
  'Fourgon mortuaire avec cellule refrigeree.',
  'Reception de corps arrives de l etranger.',
]

const inhumationPoints = [
  'Demarches administratives completes pour l inhumation.',
  'Toilette rituelle assuree dans les conditions fondamentales du rite musulman.',
  'Transport de corps par avion ou par route.',
  'Fourniture du cercueil musulman avec plaque d identification et hublot si la famille le souhaite.',
  'Fourniture du linceul et des articles necessaires a la toilette mortuaire.',
  'Fourgons mortuaires neufs avec inscription religieuse.',
  'Chauffeurs experimentes, respectueux des rites musulmans et de la dignite des morts.',
  'Travaux de marbrerie et construction de tombes musulmanes.',
]

const exhumationPoints = [
  'Constitution du dossier d exhumation avec les pieces necessaires.',
  'Intervention d une equipe specialisee pour l exhumation et la mise en biere.',
  'Fourniture possible de cercueils reduits selon la situation.',
  'Reinhumation des restes mortels dans le respect des procedures.',
  'Organisation du transfert a l etranger lorsque requis.',
  'Utilisation de tenues speciales desinfectees apres chaque intervention.',
]

const marbreriePoints = [
  'Choix du monument funeraire.',
  'Gravure personnalisee selon la demande familiale.',
  'Choix de la matiere et des finitions.',
  'Selection par couleur, forme, gravure et budget.',
]

function MuslimFuneralPage() {
  return (
    <div className="mf-page">
      <section className="section mf-hero-section">
        <div className="container mf-hero reveal-on-scroll">
          <div className="mf-hero-copy">
            <span className="mf-eyebrow">Pompes Funèbres musulmanes</span>
            <h1>Pompes Funèbres Musulmanes</h1>
            <p>
              <strong>PFM repond a tous vos besoins.</strong>
            </p>
            <p>
              Les rituels des funerailles se deroulent dans le plus grand respect des rites islamiques.
              Nos prestations sont accomplies avec conscience, rigueur et dignite.
            </p>
            <p>
              Notre organisation vous accompagne de la prise en charge initiale jusqu a la finalisation
              complete du dossier avec un conseiller unique et une presence permanente.
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
              <img src={imageHero} alt="Pompes Funèbres musulmanes PFM" />
            </figure>
            <figure className="mf-hero-photo mf-hero-photo-overlay">
              <img src={imageRite} alt="Toilette rituelle et accompagnement musulman PFM" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section mf-insight-section">
        <div className="container mf-insight-wrap reveal-on-scroll">
          <div className="mf-insight-head">
            <h2>Nos poles d intervention musulmane</h2>
            <p>Rapatriement, inhumation, exhumation et marbrerie</p>
          </div>

          <div className="mf-insight-cards">
            {muslimServiceCards.map((item) => (
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
          <h2>Une assistance funeraire specifique pour les deces a l etranger</h2>
          <p>
            La perte d un etre cher dans un pays etranger est d autant plus douloureuse que
            perturbante. Consciente de cette realite, la PFM organise toutes les etapes du
            rapatriement de corps avec une methode claire, humaine et rigoureuse.
          </p>
          <p>
            Grace a nos agences sur l ensemble du territoire, nous proposons des prestations
            completes depuis n importe quelle region du Maroc vers n importe quelle destination.
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
            De nombreux organismes d assistance et d assurance marocains et etrangers confient a la
            PFM l execution des prestations obseques de leurs assures.
          </p>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Inhumation - Transfert de corps - Reception de corps</span>
          <h2>Une prise en charge continue pour les deces musulmans au Maroc et a l etranger</h2>
          <ul className="mf-rich-list">
            {transferPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mf-rich-block">
            <h3>Reception de corps arrives de l etranger</h3>
            <p>
              Pour toutes les arrivees de corps des defunts assures ou des particuliers, nous
              realisons les demarches de sortie du corps et l acheminement de la depouille vers le
              lieu d inhumation ou le domicile, dans tous les aeroports du Royaume.
            </p>
          </div>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Inhumation</span>
          <h2>Respect des rites, dignite du defunt et execution professionnelle</h2>
          <ul className="mf-rich-list">
            {inhumationPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Exhumation</span>
          <h2>Procedures specialisees pour situations sensibles</h2>
          <ul className="mf-rich-list">
            {exhumationPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-rich-section">
        <div className="container mf-rich-wrap reveal-on-scroll">
          <span className="mf-eyebrow">Marbrerie musulmane</span>
          <h2>Un accompagnement sur mesure pour le monument funeraire</h2>
          <ul className="mf-rich-list">
            {marbreriePoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section mf-banner-section">
        <div className="container mf-banner reveal-on-scroll">
          <div className="mf-banner-media">
            <img src={imageTeam} alt="Equipe PFM musulmane" />
            <img src={imageTransport} alt="Transport funeraire musulman" />
          </div>
          <div className="mf-banner-copy">
            <h2>PFM, une reference majeure des Pompes Funèbres Musulmanes au Maroc</h2>
            <p>
              Avec une presence nationale, une disponibilite 24h/24 et une expertise reconnue, PFM
              accompagne les familles musulmanes dans toutes les etapes des obseques, du rapatriement
              jusqu a l inhumation et a la marbrerie.
            </p>
            <p>
              Notre engagement repose sur la conscience professionnelle, le respect des rites
              islamiques et la dignite constante accordee au defunt et a sa famille.
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

export default MuslimFuneralPage
