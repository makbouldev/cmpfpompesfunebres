function FuneralTypePage({ title, intro, services, sections = [] }) {
  return (
    <section className="section">
      <div className="container">
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
        <div className="card">
          <h3>Prestations incluses</h3>
          <ul className="check-list">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        {sections.map((section) => (
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
      </div>
    </section>
  )
}

export default FuneralTypePage
