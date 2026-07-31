import { Icon } from './common.jsx'

export default function Hero({ t }) {
  const { hero } = t
  return (
    <header id="top" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">{hero.tag}</span>
          <h1 className="hero-title">
            {hero.pre} <span className="grad">{hero.grad}</span> {hero.post}
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">{hero.ctaPrimary} <Icon.arrow /></a>
            <a href="#process" className="btn btn-ghost">{hero.ctaSecondary}</a>
          </div>
        </div>
      </div>
    </header>
  )
}
