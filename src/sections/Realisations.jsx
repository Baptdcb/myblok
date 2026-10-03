import { Reveal, Icon, SectionCta } from '../components/common.jsx'
import { realisations } from '../content/index.js'
import { pagePath } from '../routes.js'

// Project cards, each linking to its detail page. Hidden while there is none.
export default function Realisations({ t }) {
  if (realisations.length === 0) return null
  const { realisations: section, realisation: labels, lang } = t
  return (
    <section id={t.anchors.realisations} className="section" aria-labelledby="realisations-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="realisations-title" className="section-title">{section.title}</h2>
          <p className="section-intro">{section.intro}</p>
        </Reveal>
        <div className="case-grid">
          {realisations.map((r, i) => {
            const p = r[lang]
            return (
              <Reveal key={r.slug} as="article" className="glass case-card" delay={(i % 3) + 1}>
                <span className="case-sector">{p.sector}</span>
                <h3>{p.title}</h3>
                <dl className="case-lines">
                  <dt>{labels.problem}</dt>
                  <dd>{p.card.problem}</dd>
                  <dt>{labels.solution}</dt>
                  <dd>{p.card.solution}</dd>
                  <dt>{labels.result}</dt>
                  <dd>{p.card.result}</dd>
                </dl>
                <a className="case-link" href={pagePath('realisation', lang, r.slug)}>
                  {section.link} <Icon.arrow />
                </a>
              </Reveal>
            )
          })}
        </div>
        <SectionCta cta={section.cta} lang={lang} />
      </div>
    </section>
  )
}
