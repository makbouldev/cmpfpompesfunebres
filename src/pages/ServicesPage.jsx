function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Nos services funeraires</h1>
        <p className="page-intro">Prise en charge complete pour soulager les proches dans ce moment difficile.</p>
        <div className="cards-grid">
          <article className="card"><h3>Transport funeraire</h3><p>Transfert hopital, domicile, chambre funeraire et lieu de sepulture.</p></article>
          <article className="card"><h3>Toilette mortuaire</h3><p>Preparation du defunt selon les convictions et les protocoles sanitaires.</p></article>
          <article className="card"><h3>Cercueil et accessoires</h3><p>Choix de gammes sobres et conformes aux normes en vigueur.</p></article>
          <article className="card"><h3>Ceremonie</h3><p>Organisation mosquee, eglise, temple ou hommage civil personnalise.</p></article>
          <article className="card"><h3>Inhumation ou cremation</h3><p>Coordination complete avec cimetieres, crematoriums et administrations.</p></article>
          <article className="card"><h3>Rapatriement</h3><p>Gestion des documents consulaires et transport vers pays d'origine.</p></article>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
