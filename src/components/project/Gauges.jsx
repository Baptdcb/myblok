/* L'échelle de chaque barre est propre au produit : le seuil tombe toujours au
   même endroit relatif, ce qui rend « au-dessus / en dessous » lisible d'un coup d'œil. */
export default function Gauges({ g }) {
  return (
    <div className="glass gauges">
      <div className="flow-label">{g.title}</div>
      <ul>
        {g.items.map((item) => {
          const low = item.qty <= item.threshold
          const scale = Math.max(item.qty, item.threshold * 2.5)
          return (
            <li key={item.name} className={low ? 'gauge gauge-low' : 'gauge'}>
              <div className="gauge-top">
                <strong>{item.name}</strong>
                <span className="gauge-status">{low ? g.low : g.ok}</span>
              </div>
              <div className="gauge-track" aria-hidden="true">
                <span className="gauge-fill" style={{ width: `${(item.qty / scale) * 100}%` }} />
                <span className="gauge-mark" style={{ left: `${(item.threshold / scale) * 100}%` }} />
              </div>
              <div className="gauge-nums">
                {item.qty} {g.qtyLabel} · {g.thresholdLabel} {item.threshold}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
