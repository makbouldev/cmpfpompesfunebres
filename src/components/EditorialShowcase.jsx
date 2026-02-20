function EditorialShowcase({ heading, accent, points, cards, className = '' }) {
  return (
    <section className={`section editorial-showcase-section ${className}`.trim()}>
      <div className="container editorial-showcase-wrap reveal-on-scroll">
        <div className="editorial-showcase-top">
          {points.map((item) => (
            <article key={item.title} className="editorial-showcase-point">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="editorial-showcase-head">
          <h2>{heading}</h2>
          <p>{accent}</p>
        </div>

        <div className="editorial-showcase-cards">
          {cards.map((item) => (
            <article key={item.title} className="editorial-showcase-card">
              <img src={item.image} alt={item.alt || item.title} />
              <div>{item.title}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditorialShowcase
