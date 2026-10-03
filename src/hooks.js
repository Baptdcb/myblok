import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// useLayoutEffect warns during build-time prerendering (no DOM); fall back there.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

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

// Theme, light by default, remembered in localStorage. The first render always
// uses 'light' so it matches the prerendered HTML (hydration); the stored theme
// is applied right after, before the browser paints. The inline script in
// index.html has already set it on <html>, so nothing flashes.
const THEME_KEY = 'myblok-theme'

export function useTheme() {
  const [theme, setTheme] = useState('light')
  useIsomorphicLayoutEffect(() => {
    try {
      const stored = window.localStorage.getItem(THEME_KEY)
      if (stored) setTheme(stored)
    } catch { /* storage unavailable: keep the default */ }
  }, [])
  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#15140e' : '#f4f2ec')
  }, [theme])
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try { window.localStorage.setItem(THEME_KEY, next) } catch { /* ignore */ }
    setTheme(next)
  }
  return [theme, toggle]
}
