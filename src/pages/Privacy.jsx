import { LegalList } from '../components/common.jsx'

export default function Privacy({ t }) {
  const { privacy } = t.legal
  return (
    <section className="section page" aria-labelledby="page-title">
      <div className="container">
        <h1 id="page-title" className="section-title">{privacy.title}</h1>
        <p className="legal-intro">{privacy.intro}</p>
        <div className="glass legal">
          <LegalList lines={privacy.lines} />
        </div>
      </div>
    </section>
  )
}
