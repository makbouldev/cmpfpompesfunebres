function ProductCategoryPage({
  title,
  description,
  highlights = [],
  extraSections = [],
  contactNote = 'Recevez une proposition detaillee en moins de 30 minutes.',
}) {
  return (
    <section className="section">
      <div className="container split-layout">
        <div>
          <h1>{title}</h1>
          <p className="page-intro">{description}</p>
          {highlights.length > 0 && (
            <div className="card">
              <h3>Prestations</h3>
              <ul className="check-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {extraSections.map((section) => (
            <div className="card" key={section.title}>
              <h3>{section.title}</h3>
              {section.text && <p>{section.text}</p>}
              {section.items && (
                <ul className="check-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="card">
            <h3>Conseil personnalise</h3>
            <p>
              Nos conseillers vous orientent selon votre budget, vos attentes esthetiques
              et les exigences du cimetiere ou de la ceremonie.
            </p>
          </div>
        </div>
        <aside className="info-panel">
          <h3>Demande rapide</h3>
          <p>{contactNote}</p>
          <p><strong>Telephone:</strong> +212 522 49 16 16</p>
          <p><strong>E-mail:</strong> cmpfcasa@cmpfassistance.ma</p>
        </aside>
      </div>
    </section>
  )
}

export default ProductCategoryPage


