import { useTheme, useLang } from './hooks.js'
import { content } from './content/site.js'
import { projects } from './content/projects/index.js'
import { projectSlug } from './routes.js'
import Background from './components/layout/Background.jsx'
import Nav from './components/layout/Nav.jsx'
import Contact from './components/layout/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/home/Hero.jsx'
import Problem from './components/home/Problem.jsx'
import Offer from './components/home/Offer.jsx'
import Examples from './components/home/Examples.jsx'
import Pricing from './components/home/Pricing.jsx'
import AISection from './components/home/AISection.jsx'
import Process from './components/home/Process.jsx'
import About from './components/home/About.jsx'
import ProjectPage from './components/project/ProjectPage.jsx'
import { Analytics } from "@vercel/analytics/react"

// `path` vient de window.location côté navigateur, et du prérendu au build.
export default function App({ path = '/' }) {
  const [theme, toggleTheme] = useTheme()
  const [lang, toggleLang] = useLang()
  const t = content[lang]
  const slug = projectSlug(path)
  // Sur une page projet, les ancres de la nav pointent vers l'accueil.
  const home = slug ? '/' : ''
  // Les cartes de l'accueil servent aussi de liens « autres exemples » en bas de page projet.
  const others = {
    title: t.examples.others,
    more: t.examples.more,
    items: t.examples.items.filter((ex) => ex.slug && ex.slug !== slug),
  }

  return (
    <>
      <Background />
      <Analytics />
      <Nav t={t} home={home} theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      {slug ? (
        <main>
          <ProjectPage p={projects[slug][lang]} others={others} />
          <Contact t={t} />
        </main>
      ) : (
        <main>
          <Hero t={t} />
          <Problem t={t} />
          <Offer t={t} />
          <Examples t={t} />
          <Pricing t={t} />
          <AISection t={t} />
          <Process t={t} />
          <About t={t} />
          <Contact t={t} />
        </main>
      )}
      <Footer t={t} home={home} />
    </>
  )
}
