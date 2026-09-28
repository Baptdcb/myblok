import { Reveal } from '../ui/Reveal.jsx'

export default function Pricing({ t }) {
  const { pricing } = t
  return (
    <section id="tarifs" className="section" aria-labelledby="pricing-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="pricing-title" className="section-title">{pricing.title}</h2>
          <p className="section-intro">{pricing.intro}</p>
        </Reveal>
        <div className="pricing-grid">
          {pricing.blocks.map((block, i) => (
            <Reveal key={i} className="glass pricing-card" delay={i + 1}>
              <span className="pricing-tag">{block.title}</span>
              <ul>
                {block.points.map((point, j) => <li key={j}>{point}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="pricing-note" delay={2}>
          <span>{pricing.note}</span>
        </Reveal>
      </div>
    </section>
  )
}
