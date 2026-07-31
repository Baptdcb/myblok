import { Icon } from './common.jsx'

// all blocks filled except the top-right ("+ votre besoin"); 2·5·6 are darker for variation
const BLOKS = ['fill', 'fill dk', 'dash', 'fill', 'fill dk', 'fill dk', 'fill', 'fill', 'fill']

export default function Hero({ t }) {
  const { hero } = t
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
            <a href="#process" className="btn btn-ghost">{hero.ctaSecondary}</a>
          </div>
        </div>

        <div className="hero-blocks" aria-hidden="true">
          {BLOKS.map((v, i) => (
            <span key={i} className={`blk ${v}`}>
              {v === 'dash' && <span>{hero.tag}</span>}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
