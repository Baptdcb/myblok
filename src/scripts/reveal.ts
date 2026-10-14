// Reveal on scroll: adds .in to each .reveal element when it enters the viewport, once.
const elements = document.querySelectorAll<HTMLElement>('.reveal')

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  elements.forEach((el) => el.classList.add('in'))
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    },
    // Triggers as soon as an element peeks in, so content is there when the eye gets to it.
    { threshold: 0.04 },
  )
  elements.forEach((el) => io.observe(el))
}
