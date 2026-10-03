import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { useTheme } from './hooks.js'
import { content } from './content/index.js'
import { matchRoute, pagePath, translatedPath } from './routes.js'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import Privacy from './pages/Privacy.jsx'
import Realisation from './pages/Realisation.jsx'
import NotFound from './pages/NotFound.jsx'

const PAGES = { home: Home, legal: Legal, privacy: Privacy, realisation: Realisation, notFound: NotFound }

function Background() {
  return <div className="bg" aria-hidden="true" />
}

// `path` comes from the prerender script at build time, from the URL in the browser.
// The language is part of the URL (/fr, /en).
export default function App({ path }) {
  const [theme, toggleTheme] = useTheme()
  const route = matchRoute(path)
  const t = content[route.lang]
  const Page = PAGES[route.name]

  // Already set by the prerender in production; needed in dev.
  useEffect(() => {
    document.documentElement.lang = route.lang
  }, [route.lang])

  // Legal notices used to open in the footer at /#mentions-legales: keep old links working.
  useEffect(() => {
    if (route.name === 'home' && window.location.hash === '#mentions-legales') {
      window.location.replace(pagePath('legal', route.lang))
    }
  }, [route.name, route.lang])

  const altHref = translatedPath(route, route.lang === 'fr' ? 'en' : 'fr')

  return (
    <>
      <Background />
      <Analytics />
      <Nav t={t} theme={theme} toggleTheme={toggleTheme} altHref={altHref} />
      <main>
        <Page t={t} route={route} />
      </main>
      <Footer t={t} />
    </>
  )
}
