import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { matchRoute, allPaths } from './routes.js'
import { headTags, SITE_URL } from './seo.js'

export { allPaths, SITE_URL }

// Used at build time only (scripts/prerender.js) to ship real HTML to crawlers.
export function render(path) {
  const route = matchRoute(path)
  return {
    lang: route.lang,
    head: headTags(route),
    html: renderToString(<App path={path} />),
  }
}
