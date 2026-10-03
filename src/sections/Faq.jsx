import { Reveal } from '../components/common.jsx'

// Native <details> accordion: accessible, works without JavaScript.
export default function Faq({ t }) {
  const { faq } = t
  return (
    <section id={t.anchors.faq} className="section" aria-labelledby="faq-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="faq-title" className="section-title">{faq.title}</h2>
        </Reveal>
        <Reveal className="faq-list" delay={1}>
          {faq.items.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
