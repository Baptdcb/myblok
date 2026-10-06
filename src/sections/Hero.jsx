import { useEffect, useState } from 'react'
import { Icon } from '../components/common.jsx'

// The hero's one authored motion: an order travelling through an automation, step by step.
// Prerendered (and with reduced motion) in its finished state.
function HeroFlow({ flow }) {
  const total = flow.steps.length
  const [step, setStep] = useState(total)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let current = 0
    setStep(0)
    const id = window.setInterval(() => {
      // Hold the finished state for two ticks before starting over.
      current = current >= total + 2 ? 0 : current + 1
      setStep(Math.min(current, total))
    }, 1300)
    return () => window.clearInterval(id)
  }, [total])

  return (
    <div className="hero-flow glass" aria-label={flow.label}>
      <div className="hf-head">
        <span className="hf-label">{flow.label}</span>
        <span className="hf-caption">{flow.caption}</span>
      </div>
      <ol className="hf-steps">
        {flow.steps.map((s, i) => (
          <li key={i} className={`hf-step ${i < step ? 'is-done' : ''} ${i === step ? 'is-active' : ''}`}>
            <span className="hf-blok" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            <span className="hf-text">
              <strong>{s.t}</strong>
              <span>{s.d}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className={`hf-done ${step >= total ? 'is-on' : ''}`}>
        <span className="hf-dot" aria-hidden="true" />
        {flow.done}
      </div>
    </div>
  )
}

export default function Hero({ t }) {
  const { hero } = t
  return (
    <header id={t.anchors.top} className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            {hero.pre} <span className="grad">{hero.grad}</span> {hero.post}
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-cta">
            <a href={`#${t.anchors.contact}`} className="btn btn-primary">{hero.ctaPrimary} <Icon.arrow /></a>
            <a href={`#${t.anchors.examples}`} className="btn btn-ghost">{hero.ctaExamples}</a>
          </div>
          <p className="hero-note">{hero.note}</p>
        </div>
        <HeroFlow flow={hero.flow} />
      </div>
    </header>
  )
}
