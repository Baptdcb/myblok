// Injects the server-rendered app into dist/index.html so crawlers and social
// previews see the full page content without executing JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist/index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const html = await readFile(htmlPath, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('prerender: <!--app-html--> placeholder not found')
await writeFile(htmlPath, html.replace('<!--app-html-->', render()))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html updated')
