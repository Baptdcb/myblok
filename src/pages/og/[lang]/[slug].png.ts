// Share image of each example (/og/<lang>/<slug>.png), drawn at build time in the
// style of public/og-image.png: logo, category, title, the gain, gradient band.
// satori lays the text out (fonts from @fontsource), sharp turns its SVG into a PNG.
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { APIRoute } from 'astro'
import satori from 'satori'
import sharp from 'sharp'
import { articles, content, LANGS, type Article, type Lang } from '../../../content'

export function getStaticPaths() {
  return LANGS.flatMap((lang) => articles.map((article) => ({ params: { lang, slug: article.slug }, props: { article } })))
}

// From the project root: the build moves this code elsewhere, so no path relative to this file.
const font = (path: string) => readFile(resolve('node_modules/@fontsource', path))
const [archivo, hanken, hankenBold, logo] = await Promise.all([
  font('archivo/files/archivo-latin-800-normal.woff'),
  font('hanken-grotesk/files/hanken-grotesk-latin-600-normal.woff'),
  font('hanken-grotesk/files/hanken-grotesk-latin-800-normal.woff'),
  readFile(resolve('public/icon-192.png')),
])

// Minimal element helper: satori takes React-like objects, no JSX needed.
type Node = { type: string; props: Record<string, unknown> }
const el = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
})

export const GET: APIRoute = async ({ params, props }) => {
  const lang = params.lang as Lang
  const { article } = props as { article: Article }
  const t = content[lang]
  const a = article[lang]

  const tree = el(
    'div',
    { width: 1200, height: 630, display: 'flex', flexDirection: 'column', background: '#f4f2ec', padding: '64px 80px 0', fontFamily: 'Hanken' },
    [
      el('div', { display: 'flex', alignItems: 'center', gap: 4 }, [
        el('img', { width: 76, height: 76, margin: '-14px 0 -14px -14px' }, undefined, {
          src: `data:image/png;base64,${logo.toString('base64')}`,
        }),
        el('span', { fontFamily: 'Archivo', fontSize: 38, letterSpacing: -1.5, color: '#141210' }, 'myblok'),
      ]),
      el('div', { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }, [
        el('span', { fontFamily: 'HankenBold', fontSize: 20, letterSpacing: 2, color: '#ff3b23', textTransform: 'uppercase' }, t.examples.tags[article.tag]),
        el('span', { marginTop: 18, fontFamily: 'Archivo', fontSize: 60, lineHeight: 1.04, letterSpacing: -2.4, color: '#141210' }, a.title),
        el('span', { marginTop: 28, fontSize: 27, lineHeight: 1.35, color: '#4a463d' }, a.proof),
      ]),
      el('div', { display: 'flex', height: 18, margin: '0 -80px', backgroundImage: 'linear-gradient(100deg, #ff3b23, #ff8a34)' }),
    ],
  )

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Archivo', data: archivo, weight: 800, style: 'normal' },
      { name: 'Hanken', data: hanken, weight: 600, style: 'normal' },
      { name: 'HankenBold', data: hankenBold, weight: 800, style: 'normal' },
    ],
  })
  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } })
}
