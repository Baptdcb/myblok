import { Fragment } from 'react'
import { Icon } from '../ui/Icon.jsx'

/* Schéma générique : des blocs reliés par des flèches. Horizontal sur grand
   écran, vertical sur mobile (voir .flow dans styles.css). Tout le texte vient
   des données, donc le schéma suit la langue et le thème sans rien de plus. */
export default function Flow({ nodes, variant, arrows = [] }) {
  return (
    <div className={`flow flow-${variant}`}>
      {nodes.map((node, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <div className="flow-arrow" aria-hidden="true">
              {arrows[i - 1] && <span className="flow-arrow-label">{arrows[i - 1]}</span>}
              <Icon.arrow />
            </div>
          )}
          <div className="flow-node">
            {variant === 'manual' && <span className="flow-mark" aria-hidden="true">×</span>}
            {variant === 'auto' && <span className="flow-blok" aria-hidden="true" />}
            {node.role && <span className="flow-role">{node.role}</span>}
            <strong>{node.title}</strong>
            {node.sub && <span className="flow-sub">{node.sub}</span>}
            {node.items && (
              <ul>
                {node.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  )
}
