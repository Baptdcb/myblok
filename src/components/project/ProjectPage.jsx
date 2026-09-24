import { Reveal } from '../ui/Reveal.jsx'
import { Icon } from '../ui/Icon.jsx'
import { SectionHead } from '../ui/SectionHead.jsx'
import Flow from './Flow.jsx'
import EmailPreview from './EmailPreview.jsx'
import PlainEmail from './PlainEmail.jsx'
import Gauges from './Gauges.jsx'
import BatchReport from './BatchReport.jsx'

export default function ProjectPage({ p, others }) {
  return (
    <article className="project">
      {/* En-tête */}
      <header id="top" className="section project-hero">
        <div className="container">
          <Reveal>
            <a href="/#exemples" className="project-back">← {p.back}</a>
            <span className="pricing-tag project-tag">{p.tag}</span>
            <h1 className="project-title">{p.title}</h1>
            <p className="project-lead">{p.lead}</p>
          </Reveal>
          <div className="project-facts">
            {p.facts.map((f, i) => (
              <Reveal key={i} className="glass project-fact" delay={i + 1}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </header>

      {/* Le problème */}
      <section className="section project-sec" aria-labelledby="pb-title">
        <div className="container project-problem">
          <Reveal>
            <h2 id="pb-title" className="section-title">{p.problem.title}</h2>
          </Reveal>
          <Reveal className="project-prose" delay={1}>
            {p.problem.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
          </Reveal>
        </div>
      </section>

      {/* Avant / maintenant */}
      <section className="section project-sec" aria-labelledby="flows-title">
        <div className="container">
          <SectionHead id="flows-title" title={p.flows.title} intro={p.flows.intro} />
          <Reveal className="flow-block">
            <div className="flow-label">{p.flows.before.label}</div>
            <Flow nodes={p.flows.before.nodes} variant="manual" />
          </Reveal>
          <Reveal className="flow-block" delay={1}>
            <div className="flow-label flow-label-auto">{p.flows.after.label}</div>
            <Flow nodes={p.flows.after.nodes} variant="auto" />
          </Reveal>
        </div>
      </section>

      {/* Étapes clés (facultatif) : paliers de relance, cycle d'une alerte… */}
      {p.tiers && (
        <section className="section project-sec" aria-labelledby="tiers-title">
          <div className="container">
            <SectionHead id="tiers-title" title={p.tiers.title} intro={p.tiers.intro} />
            <ol className="tiers">
              {p.tiers.items.map((t, i) => (
                <Reveal as="li" key={i} className="glass tier" delay={i + 1}>
                  <span className="tier-when">{t.when}</span>
                  <h3>{t.name}</h3>
                  <p>{t.desc}</p>
                </Reveal>
              ))}
            </ol>
            {p.tiers.note && <Reveal className="tiers-note" delay={2}>{p.tiers.note}</Reveal>}
          </div>
        </section>
      )}

      {/* Aperçu : chaque projet montre le résultat sous la forme qui lui parle le plus. */}
      <section className="section project-sec" aria-labelledby="preview-title">
        <div className="container project-preview">
          <SectionHead id="preview-title" title={p.preview.title} intro={p.preview.intro} />
          <Reveal delay={1}>
            <div className={p.preview.gauges && p.preview.plain ? 'preview-grid' : undefined}>
              {p.preview.email && <EmailPreview email={p.preview.email} />}
              {p.preview.gauges && <Gauges g={p.preview.gauges} />}
              {p.preview.plain && <PlainEmail email={p.preview.plain} />}
              {p.preview.report && <BatchReport r={p.preview.report} />}
            </div>
            <p className="mail-caption">{p.preview.caption}</p>
          </Reveal>
        </div>
      </section>

      {/* Garanties */}
      <section className="section project-sec" aria-labelledby="guar-title">
        <div className="container">
          <SectionHead id="guar-title" title={p.guarantees.title} />
          <div className="guarantees">
            {p.guarantees.items.map((g, i) => (
              <Reveal key={i} className="glass guarantee" delay={(i % 3) + 1}>
                <span className="guarantee-check" aria-hidden="true">✓</span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sous le capot */}
      <section className="section project-sec project-tech" aria-labelledby="tech-title">
        <div className="container">
          <SectionHead id="tech-title" title={p.tech.title} intro={p.tech.intro} />

          <Reveal className="flow-block">
            <div className="flow-label">{p.tech.diagramLabel}</div>
            <Flow nodes={p.tech.nodes} variant="arch" arrows={p.tech.arrows} />
          </Reveal>

          <Reveal className="flow-block">
            <div className="flow-label">{p.tech.passTitle}</div>
          </Reveal>
          <ol className="pass">
            {p.tech.pass.map((s, i) => (
              <Reveal as="li" key={i} className="glass pass-step" delay={(i % 3) + 1}>
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </ol>

          <div className="tech-grid">
            <Reveal className="glass tech-stack">
              <div className="flow-label">{p.tech.stackTitle}</div>
              <ul className="stack">
                {p.tech.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
            <Reveal className="glass tech-why" delay={1}>
              <div className="flow-label">{p.tech.whyTitle}</div>
              {p.tech.why.map((w, i) => (
                <div key={i} className="why">
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Chez vous */}
      <section className="section project-sec" aria-labelledby="adapt-title">
        <div className="container">
          <SectionHead id="adapt-title" title={p.adapt.title} intro={p.adapt.intro} />
          <Reveal as="ul" className="glass adapt" delay={1}>
            {p.adapt.items.map((item, i) => <li key={i}>{item}</li>)}
          </Reveal>
          <Reveal className="section-cta" delay={2}>
            <span>{p.cta.text}</span>
            <a href="#contact" className="btn btn-primary">{p.cta.button} <Icon.arrow /></a>
          </Reveal>
        </div>
      </section>

      {/* Les autres exemples */}
      {others.items.length > 0 && (
        <section className="section project-sec" aria-labelledby="others-title">
          <div className="container">
            <Reveal className="flow-label others-title" id="others-title" as="h2">{others.title}</Reveal>
            <div className="others">
              {others.items.map((o, i) => (
                <Reveal as="a" key={o.slug} href={`/projets/${o.slug}`} className="glass other" delay={i + 1}>
                  <span className="pricing-tag">{o.tag}</span>
                  <strong>{o.title}</strong>
                  <span className="case-more">{others.more} <Icon.arrow /></span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
