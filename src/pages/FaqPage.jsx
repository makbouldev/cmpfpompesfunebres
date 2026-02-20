import { useState } from 'react'

const faqItems = [
  {
    question: 'Quel est le delai pour organiser les obseques ?',
    answer:
      'Generalement entre 24h et 6 jours selon les obligations legales, administratives et familiales.',
  },
  {
    question: 'Pouvez-vous intervenir immediatement en cas d urgence ?',
    answer:
      'Oui, nos equipes sont disponibles 24h/24 et 7j/7 pour lancer la prise en charge des le premier appel.',
  },
  {
    question: 'Organisez-vous les obseques musulmanes et non musulmanes ?',
    answer:
      'Oui, nous accompagnons les familles pour les rites musulmans et non musulmans dans le respect des volontes.',
  },
  {
    question: 'Prenez-vous en charge les formalites administratives ?',
    answer:
      'Oui, nous gerons les declarations, autorisations et documents necessaires avec un suivi clair.',
  },
  {
    question: 'Proposez-vous des fleurs et services de marbrerie ?',
    answer:
      'Oui, nous proposons des fleurs funeraires, la marbrerie et des prestations personnalisees selon votre besoin.',
  },
  {
    question: 'Intervenez-vous dans toutes les villes du Maroc ?',
    answer:
      'Nous couvrons les principales villes du Maroc via notre reseau d agences et de coordination locale.',
  },
  {
    question: 'Peut-on vous contacter par WhatsApp ?',
    answer:
      'Oui, vous pouvez nous joindre rapidement par WhatsApp pour une orientation immediate.',
  },
  {
    question: 'Comment obtenir un devis rapide ?',
    answer:
      'Contactez CMPF par telephone, WhatsApp ou formulaire: nous vous envoyons un devis clair et detaille rapidement.',
  },
]

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section">
      <div className="container">
        <h1>Questions frequentes</h1>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article key={item.question} className={isOpen ? 'faq-item is-open' : 'faq-item'}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <h3>{item.question}</h3>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqPage

