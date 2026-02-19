function PricingPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Tarifs et formules</h1>
        <p className="page-intro">Prix indicatifs, devis final selon ville, options et delais.</p>
        <div className="pricing-grid">
          <article className="price-card">
            <h3>Formule Essentielle</h3>
            <p className="price">A partir de 1 590 EUR</p>
            <ul>
              <li>Demarches administratives</li>
              <li>Transport local</li>
              <li>Cercueil standard</li>
            </ul>
          </article>
          <article className="price-card featured">
            <h3>Formule Complete</h3>
            <p className="price">A partir de 2 390 EUR</p>
            <ul>
              <li>Tout le pack Essentielle</li>
              <li>Ceremonie organisee</li>
              <li>Coordination avec lieu de culte</li>
            </ul>
          </article>
          <article className="price-card">
            <h3>Rapatriement International</h3>
            <p className="price">Sur devis</p>
            <ul>
              <li>Documents consulaires</li>
              <li>Billetterie et fret mortuaire</li>
              <li>Suivi famille en temps reel</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PricingPage
