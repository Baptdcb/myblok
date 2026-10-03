import { useState } from 'react'
import { Icon } from './common.jsx'
import { homeSection } from '../routes.js'
import { realisations } from '../content/index.js'

// `altHref`: the current page in the other language.
export default function Nav({ t, theme, toggleTheme, altHref }) {
  const [open, setOpen] = useState(false)
  const { lang } = t
  const altLang = lang === 'fr' ? 'en' : 'fr'
  const links = t.nav.links.filter((l) => l.id !== 'realisations' || realisations.length > 0)
  return (
    <div className="nav-wrap">
      <div className="container">
        <nav className="nav">
          <a href={homeSection(lang, 'top')} className="brand" aria-label="myblok">
            <img className="brand-mark" src="/logos/myblok.svg" alt="" aria-hidden="true" />
            <span>myblok</span>
          </a>

          <div className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <a key={l.id} href={homeSection(lang, l.id)} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>

          <div className="nav-right">
            <a className="icon-btn lang-btn" href={altHref} hrefLang={altLang} lang={altLang} aria-label={altLang === 'en' ? 'English version' : 'Version française'}>
              {altLang.toUpperCase()}
            </a>
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
            >
              {theme === 'dark' ? <Icon.sun /> : <Icon.moon />}
            </button>
            <a href={homeSection(lang, 'contact')} className="nav-cta">{t.nav.cta}</a>
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
