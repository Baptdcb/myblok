import { Reveal } from '../ui/Reveal.jsx'
import { SectionCta } from '../ui/SectionCta.jsx'

export default function Process({ t }) {
  const { process } = t
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="process-title" className="section-title">{process.title}</h2>
          <p className="section-intro">{process.intro}</p>
        </Reveal>
        <div className="process-track">
          {process.steps.map((s, i) => (
            <Reveal key={i} className="glass step" delay={(i % 4) + 1}>
              <span className="step-n">{s.n}</span>
              <h3>{s.name}</h3>
              <p className="step-desc">{s.desc}</p>
              {s.badge && <span className="step-badge">{s.badge}</span>}
              <span className="step-connector" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
        <SectionCta cta={process.cta} />
      </div>
    </section>
  )
}
