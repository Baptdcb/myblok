import { useEffect, useRef, useState } from 'react'

// Reveal-on-scroll: adds .in when the element enters the viewport once.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { el.classList.add('in'); return }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

// localStorage read that is safe during build-time prerendering (no window).
function readStored(key) {
  if (typeof window === 'undefined') return null
  try { return window.localStorage.getItem(key) } catch { return null }
}

// Persisted theme, light by default.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return readStored('myblok-theme') || 'light'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('myblok-theme', theme) } catch { /* ignore */ }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#15140e' : '#f4f2ec')
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

// Language, FR by default, persisted; also drives <html lang>.
export function useLang() {
  const [lang, setLang] = useState(() => {
    return readStored('myblok-lang') || 'fr'
  })
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try { localStorage.setItem('myblok-lang', lang) } catch { /* ignore */ }
  }, [lang])
  return [lang, () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))]
}
