import { Reveal, Icon } from './common.jsx'

/* ---------------- Problem ---------------- */
export function Problem({ t }) {
  const { problem } = t
  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="problem-title" className="section-title">{problem.title}</h2>
        </Reveal>
        <div className="problem-list">
          {problem.items.map((item, i) => (
            <Reveal key={i} className="glass problem-item" delay={i + 1}>
              <span className="p-mark" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="problem-foot" delay={2}>
          <span dangerouslySetInnerHTML={{ __html: problem.foot }} />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Offer ---------------- */
export function Offer({ t }) {
  const { offer } = t
  return (
    <section id="offre" className="section" aria-labelledby="offer-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="offer-title" className="section-title">{offer.title}</h2>
          <p className="section-intro">{offer.intro}</p>
        </Reveal>
        <div className="offer-grid">
          {offer.blocks.map((b, i) => (
            <Reveal key={i} className="glass offer-card" delay={i + 1}>
              <span className="oc-tag">{b.tag}</span>
              <h3>{b.title}</h3>
              <p className="oc-desc">{b.desc}</p>
              <p className="oc-ex">{b.example}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Process ---------------- */
export function Process({ t }) {
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
      </div>
    </section>
  )
}

/* ---------------- About ---------------- */
export function About({ t }) {
  const { about } = t
  return (
    <section id="apropos" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <h2 id="about-title" className="section-title" style={{ marginBottom: 18 }}>{about.title}</h2>
          <p className="about-lead"><span className="accent">{about.lead}</span></p>
          <div className="about-body">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
        <Reveal className="glass about-side" delay={1}>
          <div className="about-points">
            {about.points.map((pt, i) => (
              <div className="about-point" key={i}>
                <div className="ap-k">{pt.k}</div>
                <div className="ap-v">{pt.v}</div>
              </div>
            ))}
          </div>
          <div className="about-loc">
            <span className="pin"><Icon.pin /></span>
            <span>{about.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
