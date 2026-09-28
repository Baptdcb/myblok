import { Reveal } from '../ui/Reveal.jsx'
import { Icon } from '../ui/Icon.jsx'
import { SectionCta } from '../ui/SectionCta.jsx'

export default function Examples({ t }) {
  const { examples } = t
  return (
    <section id="exemples" className="section" aria-labelledby="examples-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="examples-title" className="section-title">{examples.title}</h2>
          <p className="section-intro">{examples.intro}</p>
        </Reveal>
        <div className="case-grid">
          {examples.items.map((ex, i) => (
            <Reveal key={i} className="glass case-card" delay={i + 1}>
              <span className="pricing-tag">{ex.tag}</span>
              <h3>{ex.title}</h3>
              <p>{ex.problem}</p>
              <div className="case-removed">{examples.removed.replace('{n}', ex.tasks.length)}</div>
              <ul className="case-tasks">
                {ex.tasks.map((task, j) => <li key={j}>{task}</li>)}
              </ul>
              <div className="case-label">{examples.after}</div>
              <p className="case-now">{ex.now}</p>
              <div className="case-gain">
                <span className="case-label">{examples.gain}</span>
                <strong>{ex.gain}</strong>
                <span className="case-basis">{ex.basis}</span>
              </div>
              {ex.slug && (
                <a href={`/projets/${ex.slug}`} className="case-more">{examples.more} <Icon.arrow /></a>
              )}
            </Reveal>
          ))}
        </div>
        <SectionCta cta={examples.cta} />
      </div>
    </section>
  )
}
