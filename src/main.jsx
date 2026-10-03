import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
