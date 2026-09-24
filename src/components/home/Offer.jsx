import { Reveal } from '../ui/Reveal.jsx'
import { SectionCta } from '../ui/SectionCta.jsx'

export default function Offer({ t }) {
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
        <SectionCta cta={offer.cta} />
      </div>
    </section>
  )
}
