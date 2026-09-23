import { useTheme, useLang } from './hooks.js'
import { content } from './content.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { Problem, Offer, PricingSection, Process, About } from './components/Sections.jsx'
import AISection from './components/AISection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Background() {
  return <div className="bg" aria-hidden="true" />
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [lang, toggleLang] = useLang()
  const t = content[lang]

  return (
    <>
      <Background />
      <Nav t={t} theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Problem t={t} />
        <Offer t={t} />
        <PricingSection t={t} />
        <AISection t={t} />
        <Process t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}
