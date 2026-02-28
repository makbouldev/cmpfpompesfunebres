import { useState } from 'react'
import { agencies } from '../data/agencies'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    ville: '',
    email: '',
    contactSubject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [selectedAgencySlug, setSelectedAgencySlug] = useState('casablanca')
  const selectedAgency = agencies.find((agency) => agency.slug === selectedAgencySlug) ?? agencies[0]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAgencyChange = (event) => {
    const slug = event.target.value
    const agency = agencies.find((item) => item.slug === slug)
    setSelectedAgencySlug(slug)
    if (!agency) return
    setFormData((prev) => ({ ...prev, ville: agency.label }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    const targetEmail = 'noureddinemakboul03@gmail.com'

    setStatus('Envoi en cours...')

    const emailSubject = `[${formData.contactSubject}] Nouvelle demande depuis le site Universal PF `
    const basePayload = {
      fullName: formData.fullName,
      phone: formData.phone,
      ville: formData.ville,
      email: formData.email,
      contactSubject: formData.contactSubject,
      message: formData.message,
    }

    const submitWithFormSubmit = () => {
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = `https://formsubmit.co/${encodeURIComponent(targetEmail)}`
      form.target = 'formsubmit_iframe'

      const fields = {
        _subject: emailSubject,
        _captcha: 'false',
        _template: 'table',
        _next: window.location.href,
        ...basePayload,
      }

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = String(value ?? '')
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()
      form.remove()
    }

    try {
      let isSent = false

      if (accessKey) {
        const web3Payload = {
          access_key: accessKey,
          subject: emailSubject,
          from_name: 'Formulaire Contact Universal PF ',
          replyto: formData.email,
          ...basePayload,
        }

        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(web3Payload),
        })
        const web3Result = await web3Response.json()
        isSent = Boolean(web3Result.success)
      }

      if (!isSent) {
        submitWithFormSubmit()
        isSent = true
      }

      if (isSent) {
        setStatus('Votre demande a été envoyée avec succès. Notre équipe vous recontactera rapidement.')
        setFormData({
          fullName: '',
          phone: '',
          ville: '',
          email: '',
          contactSubject: '',
          message: '',
        })
      } else {
        setStatus("Échec d'envoi. Vérifiez la configuration e-mail et réessayez.")
      }
    } catch (error) {
      setStatus('Erreur réseau. Réessayez dans quelques instants.')
    }
  }
  
  return (
    <section className="section contact-creative-section">
      <div className="container contact-creative-wrap">
        <div className="contact-hero-head reveal-on-scroll">
          <span>Contact Universal PF </span>
          <h1>Parlez à notre équipe, nous vous rappelons rapidement</h1>
          <p>
            Une équipe dédiée répond 24h/24 et 7j/7 pour organiser les interventions,
            informer la famille et lancer les démarches administratives sans délai.
          </p>
        </div>

        <div className="contact-creative-layout">
          <aside className="contact-creative-info">
            <article className="contact-info-card reveal-on-scroll">
              <h3>Trouver votre agence</h3>
              <label className="contact-agency-picker">
                <span>Choisissez une ville</span>
                <select value={selectedAgencySlug} onChange={handleAgencyChange}>
                  {agencies.map((agency) => (
                    <option key={agency.slug} value={agency.slug}>
                      {agency.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="contact-agency-details">
                <strong>{selectedAgency.label}</strong>
                <p>{selectedAgency.address}</p>
                {selectedAgency.phones?.slice(0, 2).map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-info-link">
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3 .4.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.5 21.2 2.8 13.5 2.8 4.1 2.8 3.5 3.3 3 4 3h3.4c.7 0 1.2.5 1.2 1.2 0 1 .1 2 .4 3 .1.4 0 .9-.3 1.2l-2.1 2.4Z" />
                      </svg>
                    </span>
                    <span>{phone}</span>
                  </a>
                ))}
                {selectedAgency.mobile ? (
                  <a
                    href={`https://wa.me/${selectedAgency.mobile.replace(/[^\d]/g, '')}`}
                    className="contact-info-link is-whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M13.601 2.326A10.077 10.077 0 0 0 3.08 16.484L2 20.5l4.123-1.084a10.094 10.094 0 0 0 4.82 1.229h.004c5.53 0 10.03-4.5 10.03-10.03A10.08 10.08 0 0 0 13.6 2.326zM10.944 18.66h-.003a8.63 8.63 0 0 1-4.392-1.2l-.315-.187-2.445.642.652-2.384-.205-.327a8.606 8.606 0 0 1-1.317-4.58c.003-4.745 3.866-8.607 8.613-8.607a8.59 8.59 0 0 1 6.103 2.527 8.59 8.59 0 0 1 2.515 6.109c-.003 4.746-3.867 8.607-8.606 8.607zm4.742-6.448c-.26-.13-1.54-.757-1.778-.843-.238-.087-.411-.13-.584.13-.173.26-.671.843-.823 1.016-.152.173-.303.195-.563.065-.26-.13-1.098-.404-2.093-1.29-.774-.69-1.296-1.54-1.448-1.8-.152-.26-.016-.401.114-.531.117-.117.26-.303.39-.455.13-.152.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.584-1.407-.8-1.926-.21-.504-.423-.436-.584-.444h-.498c-.173 0-.455.065-.693.325-.238.26-.909.888-.909 2.166s.931 2.513 1.06 2.686c.13.173 1.833 2.798 4.44 3.925.62.268 1.104.428 1.48.548.622.198 1.188.17 1.636.103.499-.074 1.54-.629 1.756-1.237.217-.607.217-1.128.152-1.236-.065-.108-.238-.173-.498-.303z" />
                      </svg>
                    </span>
                    <span>{selectedAgency.mobile}</span>
                  </a>
                ) : null}
                {selectedAgency.email ? (
                  <a href={`mailto:${selectedAgency.email}`} className="contact-info-link">
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M4 5h16a2 2 0 0 1 2 2v.2l-10 6.25L2 7.2V7a2 2 0 0 1 2-2Zm18 4.55V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.55l9.47 5.92a1 1 0 0 0 1.06 0Z" />
                      </svg>
                    </span>
                    <span>{selectedAgency.email}</span>
                  </a>
                ) : null}
                {selectedAgency.mapUrl ? (
                  <a href={selectedAgency.mapUrl} className="contact-agency-map" target="_blank" rel="noreferrer">
                    Localiser l'agence
                  </a>
                ) : null}
              </div>
            </article>

          </aside>

          <div className="contact-form-panel reveal-on-scroll">
            <h2>Demande de devis ou d'assistance</h2>
            <p className="contact-form-note">
              Complétez ce formulaire. Un conseiller Universal PF vous contacte très rapidement.
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
                Téléphone
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
              <label className="contact-form-subject">
                Objet de contact
                <select
                  name="contactSubject"
                  value={formData.contactSubject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choisissez un sujet
                  </option>
                  <option value="Demande d'assistance urgente">Demande d'assistance urgente</option>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Information sur une agence">Information sur une agence</option>
                  <option value="Suivi de dossier">Suivi de dossier</option>
                  <option value="Partenariat entreprise">Partenariat entreprise</option>
                </select>
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
            <iframe name="formsubmit_iframe" title="FormSubmit transport" style={{ display: 'none' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage


