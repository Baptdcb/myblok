import { useEffect, useState } from 'react'

function LegalList({ lines }) {
  return (
    <dl>
      {lines.map(([k, v], i) => (
        <div key={i} style={{ display: 'contents' }}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function Footer({ t }) {
  const [legalOpen, setLegalOpen] = useState(false)
  const { footer, legal } = t

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#mentions-legales') setLegalOpen(true)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

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
            <a href="#offre">{t.nav.links[0].label}</a>
            <a href="#process">{t.nav.links[1].label}</a>
            <a href="#contact">{t.nav.cta}</a>
            <button onClick={() => setLegalOpen((o) => !o)} aria-expanded={legalOpen} aria-controls="legal-panel">
              {footer.legalToggle}
            </button>
          </div>
        </div>

        {/* Ancre stable : elle existe même panneau fermé, pour que #mentions-legales scrolle. */}
        <div id="mentions-legales">
          {legalOpen && (
            <div className="glass legal" id="legal-panel">
              <h3>{legal.title}</h3>
              <LegalList lines={legal.lines} />

              <div className="legal-block">
                <h3>{legal.privacy.title}</h3>
                <p className="legal-intro">{legal.privacy.intro}</p>
                <LegalList lines={legal.privacy.lines} />
              </div>
            </div>
          )}
        </div>

        <p className="footer-made">© {new Date().getFullYear()} myblok · {footer.madeIn}</p>
      </div>
    </footer>
  )
}
