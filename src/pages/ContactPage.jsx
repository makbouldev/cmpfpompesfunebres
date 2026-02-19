function ContactPage() {
  return (
    <section className="section">
      <div className="container split-layout">
        <div>
          <h1>Contact et demande de devis</h1>
          <p className="page-intro">Reponse rapide en moins de 15 minutes pour les demandes urgentes.</p>
          <form className="contact-form">
            <label>
              Nom complet
              <input type="text" name="fullName" placeholder="Votre nom" />
            </label>
            <label>
              Telephone
              <input type="tel" name="phone" placeholder="+212 ..." />
            </label>
            <label>
              Ville
              <input type="text" name="ville" placeholder="Votre Ville" />
            </label>
            <label>
              E-mail
              <input type="email" name="email" placeholder="votre@email.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Expliquez votre besoin" />
            </label>
            <button type="button" className="btn btn-primary">Envoyer la demande</button>
          </form>
        </div>
        <aside className="info-panel">
          <h3>Coordonnees directes</h3>
          <p>Tel: +212 522 49 16 16</p>
          <p>Tel: +212 522 20 71 11</p>
          <p>WhatsApp: +212 661 502 763</p>
          <p>E-mail: cmpfcasa@cmpfassistance.ma</p>
          <p>Adresse: Casablanca, Maroc</p>
          <p>Horaires: 24h/24, 7j/7</p>
        </aside>
      </div>
    </section>
  )
}

export default ContactPage
