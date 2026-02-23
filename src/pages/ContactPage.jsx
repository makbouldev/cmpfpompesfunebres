import { useState } from 'react'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    ville: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('Configuration manquante: ajoutez VITE_WEB3FORMS_ACCESS_KEY.')
      return
    }

    setStatus('Envoi en cours...')

    const payload = {
      access_key: accessKey,
      subject: 'Nouvelle demande depuis le site PFM',
      from_name: 'Formulaire Contact PFM',
      fullName: formData.fullName,
      phone: formData.phone,
      ville: formData.ville,
      email: formData.email,
      message: formData.message,
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('Demande envoyee avec succes.')
        setFormData({
          fullName: '',
          phone: '',
          ville: '',
          email: '',
          message: '',
        })
      } else {
        setStatus('Echec envoi. Verifiez votre Access Key Web3Forms.')
      }
    } catch (error) {
      setStatus('Erreur reseau. Reessayez dans quelques instants.')
    }
  }

  return (
    <section className="section contact-creative-section">
      <div className="container contact-creative-wrap">
        <div className="contact-hero-head">
          <span>Contact PFM</span>
          <h1>Parlez a notre equipe, nous vous rappelons rapidement</h1>
          <p>
            Une equipe dediee repond 24h/24 et 7j/7 pour organiser les interventions,
            informer la famille et lancer les demarches administratives sans delai.
          </p>
        </div>

        <div className="contact-creative-layout">
          <aside className="contact-creative-info">
            <article className="contact-info-card">
              <h3>Ligne directe</h3>
              <a href="tel:+212522491616" className="contact-info-link">
                <span className="contact-info-icon" aria-hidden="true">ðŸ“ž</span>
                <span>+212 522 49 16 16</span>
              </a>
              <a href="tel:+212522207111" className="contact-info-link">
                <span className="contact-info-icon" aria-hidden="true">ðŸ“ž</span>
                <span>+212 522 20 71 11</span>
              </a>
              <p>Disponibilite permanente pour urgences et orientation immediate.</p>
            </article>

            <article className="contact-info-card">
              <h3>WhatsApp et E-mail</h3>
              <a href="https://wa.me/212661502763" className="contact-info-link">
                <span className="contact-info-icon" aria-hidden="true">ðŸŸ¢</span>
                <span>+212 661 502 763</span>
              </a>
              <a href="mailto:cmpfcasa@cmpfassistance.ma" className="contact-info-link">
                <span className="contact-info-icon" aria-hidden="true">âœ‰</span>
                <span>cmpfcasa@cmpfassistance.ma</span>
              </a>
              <p>Envoi de documents et suivi rapide de votre dossier.</p>
            </article>

            <article className="contact-info-card">
              <h3>Adresse agence principale</h3>
              <p>56, Avenue Mers Sultan - Casablanca</p>
              <p>Accueil des familles avec un accompagnement humain et discret.</p>
            </article>
          </aside>

          <div className="contact-form-panel">
            <h2>Demande de devis ou d'assistance</h2>
            <p className="contact-form-note">
              Completez ce formulaire. Un conseiller PFM vous contacte tres rapidement.
            </p>
            <form className="contact-form contact-creative-form" onSubmit={handleSubmit}>
              <label>
                Nom complet
                <input
                  type="text"
                  name="fullName"
                  placeholder="Votre nom"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Telephone
                <input
                  type="tel"
                  name="phone"
                  placeholder="+212 ..."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Ville
                <input
                  type="text"
                  name="ville"
                  placeholder="Votre ville"
                  value={formData.ville}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="contact-form-message">
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Expliquez votre besoin"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="btn btn-primary">Envoyer la demande</button>
              {status ? <p className="contact-status">{status}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

