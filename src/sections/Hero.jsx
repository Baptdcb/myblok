import { Icon } from '../components/common.jsx'
import { realisations } from '../content/index.js'

export default function Hero({ t }) {
  const { hero } = t
  // Until a project is published, the secondary button points to the method instead.
  const secondary = realisations.length > 0
    ? { href: '#realisations', label: hero.ctaRealisations }
    : { href: '#process', label: hero.ctaProcess }
  return (
    <header id="top" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            {hero.pre} <span className="grad">{hero.grad}</span> {hero.post}
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">{hero.ctaPrimary} <Icon.arrow /></a>
            <a href={secondary.href} className="btn btn-ghost">{secondary.label}</a>
          </div>
          <p className="hero-note">{hero.note}</p>
        </div>
      </div>
    </header>
  )
}
