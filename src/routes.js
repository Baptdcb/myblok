import { projects } from './content/projects/index.js'

export const PROJECT_BASE = '/projets/'

// Chemin → slug du projet, ou null pour la page d'accueil. Tolère le slash
// final et le suffixe .html (URL du fichier prérendu, servie telle quelle en local).
export function projectSlug(path) {
  if (!path || !path.startsWith(PROJECT_BASE)) return null
  const slug = path.slice(PROJECT_BASE.length).replace(/\/+$/, '').replace(/\.html$/, '')
  return projects[slug] ? slug : null
}
