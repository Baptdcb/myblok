import { CONTACT_EMAIL, LEGAL, realisations } from '../content/index.js'
import { pagePath, homeSection } from '../routes.js'

export default function Footer({ t }) {
  const { footer, lang } = t
  const navLabel = (key) => t.nav.links.find((l) => l.key === key)?.label
  const sections = ['offer', ...(realisations.length > 0 ? ['realisations'] : []), 'faq']

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
            <p className="footer-contact">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <span>{footer.location}</span>
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            {sections.map((key) => (
              <a key={key} href={homeSection(lang, key)}>{navLabel(key)}</a>
            ))}
            <a href={homeSection(lang, 'contact')}>{footer.contactLink}</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-made">© {new Date().getFullYear()} myblok — {LEGAL.name}, {footer.owner}</p>
          <p className="footer-legal">
            <a href={pagePath('legal', lang)}>{footer.legalLink}</a>
            <a href={pagePath('privacy', lang)}>{footer.privacyLink}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
