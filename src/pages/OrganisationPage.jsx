function OrganisationPage() {
  const steps = [
    'Premier appel et evaluation de la situation (hopital, domicile, maison de retraite).',
    'Constitution du dossier administratif et declaration de deces.',
    'préparation de la cérémonie et reservation des intervenants.',
    'Organisation du transport et de la mise en sepulture.',
    'Suivi post-obsèques et assistance pour les demarches restantes.',
  ]

  return (
    <section className="section">
      <div className="container">
        <h1>Organisation des obseques: etapes s</h1>
        <p className="page-intro">Un interlocuteur unique vous accompagne de A a Z.</p>
        <ol className="steps-list">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default OrganisationPage
