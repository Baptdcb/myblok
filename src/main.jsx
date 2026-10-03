import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Fonts served from the site itself (no request to Google: privacy, and faster).
import '@fontsource/archivo/700.css'
import '@fontsource/archivo/800.css'
import '@fontsource/hanken-grotesk/400.css'
import '@fontsource/hanken-grotesk/500.css'
import '@fontsource/hanken-grotesk/600.css'
import '@fontsource/hanken-grotesk/700.css'
import '@fontsource/hanken-grotesk/800.css'
import './styles.css'

// "/" is redirected to /fr by Vercel (vercel.json); same thing in dev.
if (window.location.pathname === '/') window.location.replace('/fr' + window.location.hash)

// The HTML is prerendered at build time: hydrate it instead of re-rendering from scratch.
// In dev there is no prerendered HTML, so we render normally.
const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App path={window.location.pathname} />
  </React.StrictMode>
)

if (root.firstElementChild) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
