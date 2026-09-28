export default function BatchReport({ r }) {
  return (
    <div className="glass report">
      <div className="report-summary">
        {r.summary.map((s, i) => (
          <div key={i}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <ul className="report-rows">
        {r.rows.map((row) => (
          <li key={row.ref} className="report-row">
            <div className="report-id">
              <strong>{row.ref}</strong>
              <span>{row.client}</span>
            </div>
            <span className={row.ok ? 'report-status' : 'report-status report-ko'}>
              {row.ok ? r.okLabel : r.koLabel}
            </span>
            <div className="report-detail">
              <span className={row.ok ? 'report-file' : undefined}>{row.detail}</span>
              {row.warning && <span className="report-warn">{r.warnLabel} : {row.warning}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
