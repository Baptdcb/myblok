import { useState } from 'react'

export default function Footer({ t }) {
  const [legalOpen, setLegalOpen] = useState(false)
  const { footer, legal } = t
  const navLabel = (id) => t.nav.links.find((l) => l.id === id)?.label
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="brand">
              <img className="brand-mark" src="/logos/myblok.svg" alt="" aria-hidden="true" />
              <span>myblok</span>
            </div>
            <p className="footer-tag">{footer.tagline}</p>
          </div>
          <div className="footer-links">
            <a href="#offre">{navLabel('offre')}</a>
            <a href="#process">{navLabel('process')}</a>
            <a href="#contact">{t.nav.cta}</a>
            <button onClick={() => setLegalOpen((o) => !o)} aria-expanded={legalOpen}>
              {footer.legalToggle}
            </button>
          </div>
        </div>

        {legalOpen && (
          <div className="glass legal">
            <h3>{legal.title}</h3>
            <dl>
              {legal.lines.map(([k, v], i) => (
                <div key={i} style={{ display: 'contents' }}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <p className="footer-made">© {new Date().getFullYear()} myblok · {footer.madeIn}</p>
      </div>
    </footer>
  )
}
