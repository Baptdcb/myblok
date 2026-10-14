// Migration check: compares the current build (dist/) with the reference build
// of the Vite version (../baseline-vite-dist). For each page found in both, it
// compares the SEO <head> tags and the visible text. Pages present in only one
// build are listed, not treated as errors (URLs may change during the migration).
//   node scripts/compare-build.mjs [referenceDir] [newDir]
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const refDir = path.resolve(process.argv[2] ?? path.join(root, '..', 'baseline-vite-dist'))
const newDir = path.resolve(process.argv[3] ?? path.join(root, 'dist'))

// /fr, /fr/, /fr.html and /fr/index.html are all the same page.
async function pages(dir) {
  const found = new Map()
  async function walk(sub) {
    for (const entry of await readdir(path.join(dir, sub), { withFileTypes: true })) {
      const rel = path.posix.join(sub, entry.name)
      if (entry.isDirectory()) await walk(rel)
      else if (entry.name.endsWith('.html')) {
        const url = '/' + rel.replace(/(\/?index)?\.html$/, '')
        found.set(url === '/' ? '/' : url.replace(/\/$/, ''), path.join(dir, rel))
      }
    }
  }
  await walk('')
  return found
}

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'))
  return m ? decode(m[2] ?? m[3]) : null
}

// The SEO-relevant part of the head, as sorted "key = value" lines.
function seo(html) {
  const out = []
  const lang = html.match(/<html[^>]*>/i)?.[0]
  out.push(`html lang = ${lang ? attr(lang, 'lang') : '(none)'}`)
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  out.push(`title = ${title ? decode(title[1].trim()) : '(none)'}`)
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const key = attr(tag, 'name') ?? attr(tag, 'property')
    if (key && !['viewport', 'generator'].includes(key)) out.push(`meta ${key} = ${attr(tag, 'content')}`)
  }
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const rel = attr(tag, 'rel')
    if (rel === 'canonical') out.push(`canonical = ${attr(tag, 'href')}`)
    if (rel === 'alternate' && attr(tag, 'hreflang')) out.push(`hreflang ${attr(tag, 'hreflang')} = ${attr(tag, 'href')}`)
  }
  for (const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { out.push(`json-ld = ${JSON.stringify(JSON.parse(m[1]))}`) } catch { out.push('json-ld = (invalid JSON)') }
  }
  return out.sort()
}

// Visible text of the body, one block of text per line.
function text(html) {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html
  return decode(
    body
      .replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<(br|\/p|\/h\d|\/li|\/div|\/section|\/a|\/button|\/label|\/dt|\/dd|\/summary)\b[^>]*>/gi, '\n')
      .replace(/<[^>]+>/g, ' '),
  )
    .split('\n')
    .map((l) => l.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}

// Lines present on one side only (order ignored, duplicates counted).
function diff(a, b) {
  const count = new Map()
  for (const l of b) count.set(l, (count.get(l) ?? 0) + 1)
  const removed = []
  for (const l of a) {
    if (count.get(l)) count.set(l, count.get(l) - 1)
    else removed.push(l)
  }
  const added = [...count].flatMap(([l, n]) => Array(n).fill(l))
  return { removed, added }
}

async function sitemap(dir) {
  try {
    const xml = await readFile(path.join(dir, 'sitemap.xml'), 'utf8')
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  } catch {
    // Astro's sitemap integration writes sitemap-index.xml + sitemap-0.xml.
    try {
      const xml = await readFile(path.join(dir, 'sitemap-0.xml'), 'utf8')
      return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
    } catch { return null }
  }
}

const refPages = await pages(refDir)
const newPages = await pages(newDir)
let issues = 0
const section = (title) => console.log(`\n=== ${title}`)
const show = (label, { removed, added }) => {
  if (!removed.length && !added.length) return
  issues++
  console.log(`  ${label}`)
  for (const l of removed) console.log(`    - ${l.length > 200 ? l.slice(0, 200) + '…' : l}`)
  for (const l of added) console.log(`    + ${l.length > 200 ? l.slice(0, 200) + '…' : l}`)
}

section(`Pages (reference: ${refPages.size}, new: ${newPages.size})`)
for (const url of refPages.keys()) if (!newPages.has(url)) console.log(`  only in reference: ${url}`)
for (const url of newPages.keys()) if (!refPages.has(url)) console.log(`  only in new build: ${url}`)

section('Sitemap')
const [refMap, newMap] = [await sitemap(refDir), await sitemap(newDir)]
if (!newMap) { issues++; console.log('  no sitemap in the new build') }
else show('URLs', diff(refMap ?? [], newMap))

for (const [url, refFile] of refPages) {
  const newFile = newPages.get(url)
  if (!newFile) continue
  const [a, b] = await Promise.all([readFile(refFile, 'utf8'), readFile(newFile, 'utf8')])
  const before = issues
  section(url)
  show('head (SEO)', diff(seo(a), seo(b)))
  show('visible text', diff(text(a), text(b)))
  if (issues === before) console.log('  OK')
}

console.log(issues ? `\n${issues} difference(s) found.` : '\nNo difference.')
process.exitCode = issues ? 1 : 0
