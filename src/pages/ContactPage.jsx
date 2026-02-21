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
    <section className="section">
      <div className="container split-layout">
        <div>
          <h1>Contact et demande de devis</h1>
          <p className="page-intro">Reponse rapide en moins de 15 minutes pour les demandes urgentes.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
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
                placeholder="Votre Ville"
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
            <label>
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
            {status ? <p className="page-intro">{status}</p> : null}
          </form>
        </div>
        <aside className="info-panel">
          <h3>Coordonnees directes</h3>
          <p>Tel: +212 522 49 16 16</p>
          <p>Tel: +212 522 20 71 11</p>
          <p>WhatsApp: +212 661 502 763</p>
          <p>E-mail: noureddinemakboul03@gmail.com</p>
          <p>Adresse: Casablanca, Maroc</p>
          <p>Horaires: 24h/24, 7j/7</p>
        </aside>
      </div>
    </section>
  )
}

export default ContactPage

