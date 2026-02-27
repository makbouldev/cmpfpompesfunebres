function BlogPage() {
  const posts = [
    {
      title: 'Comment choisir une entreprise de pompes funeraires ?',
      summary:
        'Verifiez la transparence tarifaire, la disponibilite et l experience selon vos besoins.',
    },
    {
      title: 'Les premieres demarches apres un deces',
      summary:
        'Informer un medecin, obtenir le certificat de deces et contacter un operateur funeraire.',
    },
    {
      title: 'Inhumation ou cremation : points a connaitre',
      summary:
        'Comparer les aspects religieux, legaux, financiers et les delais pour prendre une decision.',
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <h1>Conseils et informations</h1>
        <p className="page-intro">Des ressources utiles pour accompagner les familles avec clarte.</p>
        <div className="cards-grid">
          {posts.map((post) => (
            <article className="card" key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPage
