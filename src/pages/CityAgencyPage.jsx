import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agenciesBySlug } from '../data/agencies'

function CityAgencyPage() {
  const { slug } = useParams()
  const agency = useMemo(() => agenciesBySlug[slug], [slug])

  if (!agency) {
    return (
      <section className="section">
        <div className="container">
          <h1>Ville non trouvee</h1>
          <Link className="btn btn-primary" to="/">
            Retour a l'accueil
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container split-layout">
        <div>
          <h1>
            Agence {agency.code} - {agency.label}
          </h1>
          <p className="page-intro">
            Notre agence intervient rapidement a {agency.label} avec une prise en charge complete
            des obseques et des formalites.
          </p>

          <div className="card">
            <h3>Adresse</h3>
            <p>{agency.address}</p>
          </div>

          <div className="card">
            <h3>Telephones</h3>
            <ul className="check-list">
              {agency.phones.map((phone) => (
                <li key={phone}>{phone}</li>
              ))}
              <li>{agency.mobile}</li>
            </ul>
          </div>
        </div>

        <aside className="info-panel">
          <h3>Localiser</h3>
          <p>
            <strong>Region:</strong> {agency.region}
          </p>
          <p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(agency.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir Google Maps
            </a>
          </p>
          <p>
            <a href={`tel:${(agency.phones[0] ?? '').replace(/\s+/g, '')}`}>Appeler l'agence</a>
          </p>
        </aside>
      </div>
    </section>
  )
}

export default CityAgencyPage
