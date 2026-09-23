import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time only (scripts/prerender.js) to ship real HTML to crawlers.
export function render(path) {
  return renderToString(<App path={path} />)
}

// Le prérendu en a besoin pour générer une page HTML par projet.
export { projects } from './projects.js'
