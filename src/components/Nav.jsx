import { useState } from 'react'
import { Icon } from './common.jsx'

export default function Nav({ t, theme, toggleTheme, lang, toggleLang }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="nav-wrap">
      <div className="container">
        <nav className="nav">
          <a href="#top" className="brand" aria-label="myblok">
            myblok<span className="brand-dot" aria-hidden="true" />
          </a>

          <div className={`nav-links ${open ? 'open' : ''}`}>
            {t.nav.links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>

          <div className="nav-right">
            <button className="icon-btn lang-btn" onClick={toggleLang} aria-label="Language / Langue">
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
            >
              {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
            </button>
            <a href="#contact" className="nav-cta">{t.nav.cta}</a>
            <button
              className="icon-btn nav-burger"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <Icon.menu />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
