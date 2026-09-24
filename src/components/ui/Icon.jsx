// Minimal inline icons (stroke = currentColor).
export const Icon = {
  sun: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  moon: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  arrow: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  pin: (p) => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.4" />
    </svg>
  ),
  menu: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  repeat: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M17 2.5 20 5.5 17 8.5M20 5.5H8a5 5 0 0 0-5 5v1M7 21.5 4 18.5 7 15.5M4 18.5h12a5 5 0 0 0 5-5v-1" />
    </svg>
  ),
  spark: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v3M12 18v3M4.5 12h3M16.5 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),
  puzzle: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 4.5h3.2a1.6 1.6 0 0 1 1.55 2 1.6 1.6 0 0 0 1.95 1.95 1.6 1.6 0 0 1 2 1.55V13h-1.2a1.9 1.9 0 1 0 0 3.8H19v3.2a1.5 1.5 0 0 1-1.5 1.5h-3.7v-1.3a1.9 1.9 0 1 0-3.8 0V21.5H6a1.5 1.5 0 0 1-1.5-1.5v-3.7h1.3a1.9 1.9 0 1 0 0-3.8H4.5V9a1.5 1.5 0 0 1 1.5-1.5h1.7A1.6 1.6 0 0 0 9 4.5Z" />
    </svg>
  ),
}
