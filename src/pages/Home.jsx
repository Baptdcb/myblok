import Hero from '../sections/Hero.jsx'
import Problem from '../sections/Problem.jsx'
import Offer from '../sections/Offer.jsx'
import Realisations from '../sections/Realisations.jsx'
import Process from '../sections/Process.jsx'
import About from '../sections/About.jsx'
import Faq from '../sections/Faq.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home({ t }) {
  return (
    <>
      <Hero t={t} />
      <Problem t={t} />
      <Offer t={t} />
      <Realisations t={t} />
      <Process t={t} />
      <About t={t} />
      <Faq t={t} />
      <Contact t={t} />
    </>
  )
}
