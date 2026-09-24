import { useTheme, useLang } from './hooks.js'
import { content } from './content/site.js'
import { projects } from './content/projects/index.js'
import { projectSlug } from './routes.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { Problem, Offer, Examples, PricingSection, Process, About } from './components/Sections.jsx'
import AISection from './components/AISection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import { Analytics } from "@vercel/analytics/react"

function Background() {
  return <div className="bg" aria-hidden="true" />
}

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
          <PricingSection t={t} />
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
