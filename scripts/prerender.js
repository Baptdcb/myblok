// Injects the server-rendered app into the built HTML so crawlers and social
// previews see the full page content without executing JavaScript.
// One file per page: dist/index.html for the home page, and
// dist/projets/<slug>.html for each project page (served as /projets/<slug>
// thanks to cleanUrls in vercel.json).
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const SITE = 'https://www.myblok.fr'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const htmlPath = path.join(distDir, 'index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render, projects } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await readFile(htmlPath, 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('prerender: <!--app-html--> placeholder not found')

const attr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

// Replaces one tag of the template; fails loudly if index.html changed shape.
function replaceOnce(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in index.html`)
  return html.replace(pattern, replacement)
}

// Per-page <head>: title, description, canonical and social previews.
function withMeta(html, { title, description, url }) {
  const t = attr(title)
  const d = attr(description)
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`)
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${d}" />`)
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${t}" />`)
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${d}" />`)
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${t}" />`)
  html = replaceOnce(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${d}" />`)
  return html
}

const withApp = (html, pagePath) => html.replace('<!--app-html-->', render(pagePath))

// Project pages first: they are built from the untouched template.
for (const [slug, project] of Object.entries(projects)) {
  const pagePath = `/projets/${slug}`
  const html = withApp(withMeta(template, { ...project.meta, url: `${SITE}${pagePath}` }), pagePath)
  await mkdir(path.join(distDir, 'projets'), { recursive: true })
  await writeFile(path.join(distDir, 'projets', `${slug}.html`), html)
  console.log(`prerender: dist/projets/${slug}.html written`)
}

await writeFile(htmlPath, withApp(template, '/'))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html updated')
