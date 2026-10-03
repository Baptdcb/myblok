import { pagePath, homeSection } from '../routes.js'

export default function Footer({ t }) {
  const { footer, lang } = t
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
            <a href={homeSection(lang, 'offre')}>{navLabel('offre')}</a>
            <a href={homeSection(lang, 'process')}>{navLabel('process')}</a>
            <a href={homeSection(lang, 'contact')}>{t.nav.cta}</a>
            <a href={pagePath('legal', lang)}>{footer.legalLink}</a>
            <a href={pagePath('privacy', lang)}>{footer.privacyLink}</a>
          </div>
        </div>

        <p className="footer-made">© {new Date().getFullYear()} myblok · {footer.madeIn}</p>
      </div>
    </footer>
  )
}
