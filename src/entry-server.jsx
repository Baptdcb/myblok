import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time only (scripts/prerender.js) to ship real HTML to crawlers.
export function render() {
  return renderToString(<App />)
}
