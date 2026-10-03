// Renders every page of the site to static HTML at build time, so crawlers and
// social previews see the full content without executing JavaScript, and
// generates the sitemap from the same list of pages.
//   /fr                   -> dist/fr.html                    (served at the clean URL, see vercel.json)
//   /en/legal-notice      -> dist/en/legal-notice.html
//   any unknown URL       -> dist/404.html
// The <head> tags of each page are built in src/seo.js.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const templatePath = path.join(distDir, 'index.html')

const { render, allPaths, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await readFile(templatePath, 'utf8')
for (const marker of ['<html lang="fr">', '<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in index.html`)
}

async function writePage(routePath, outFile) {
  const { lang, head, html } = render(routePath)
  const page = template
    .replace('<html lang="fr">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
  const outPath = path.join(distDir, outFile)
  await mkdir(path.dirname(outPath), { recursive: true })
  await writeFile(outPath, page)
  console.log(`prerender: ${routePath} -> dist/${outFile}`)
}

const paths = allPaths()
for (const routePath of paths) await writePage(routePath, `${routePath.slice(1)}.html`)
// Any path that matches no page renders the 404 page.
await writePage('/__404__', '404.html')

// "/" redirects to /fr (vercel.json): the unrendered template must not be served.
await rm(templatePath)

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`
await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
console.log(`prerender: sitemap.xml (${paths.length} URLs)`)

await rm(ssrDir, { recursive: true, force: true })
