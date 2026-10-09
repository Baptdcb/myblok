import { Reveal, SectionCta } from '../components/common.jsx'

export default function Offer({ t }) {
  const { offer } = t
  return (
    <section id={t.anchors.offer} className="section" aria-labelledby="offer-title">
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
        <Reveal className="offer-pricing" delay={2}>
          <div>
            <span className="offer-pricing-label">{offer.pricing.label}</span>
            <p>{offer.pricing.note}</p>
          </div>
          <div className="offer-pricing-list">
            {offer.pricing.items.map((item) => (
              <div className="offer-price" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </Reveal>
        <SectionCta cta={offer.cta} lang={t.lang} />
      </div>
    </section>
  )
}
