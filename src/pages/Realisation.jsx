import { SectionCta } from '../components/common.jsx'
import { homeSection } from '../routes.js'

const BLOCKS = ['context', 'problem', 'solution', 'result']

// Detail page of a project, filled from src/content/realisations.js.
export default function Realisation({ t, route }) {
  const r = route.realisation[t.lang]
  const labels = t.realisation
  return (
    <article className="section page" aria-labelledby="page-title">
      <div className="container">
        <a href={homeSection(t.lang, 'realisations')} className="page-back">← {labels.back}</a>
        {r.sector && <p className="page-kicker">{r.sector}</p>}
        <h1 id="page-title" className="section-title">{r.title}</h1>
        {BLOCKS.map((key) => (
          <section key={key} className="page-block">
            <h2>{labels[key]}</h2>
            <p>{r[key]}</p>
          </section>
        ))}
        {r.duration && (
          <section className="page-block">
            <h2>{labels.duration}</h2>
            <p>{r.duration}</p>
          </section>
        )}
        {r.quote && (
          <blockquote className="page-quote">
            <p>« {r.quote.text} »</p>
            <footer>— {r.quote.author}</footer>
          </blockquote>
        )}
        <SectionCta cta={labels.cta} lang={t.lang} />
      </div>
    </article>
  )
}
