export default function EmailPreview({ email }) {
  return (
    <div className="mail">
      <dl className="mail-head">
        <div><dt>{email.fromLabel}</dt><dd>{email.from}</dd></div>
        <div><dt>{email.toLabel}</dt><dd>{email.to}</dd></div>
        <div><dt>{email.subjectLabel}</dt><dd><strong>{email.subject}</strong></dd></div>
      </dl>
      <div className="mail-body">
        <div className="mail-company">{email.company}</div>
        <p>{email.greeting}</p>
        <p>{email.intro}</p>
        <div className="mail-table-wrap">
          <table className="mail-table">
            <thead>
              <tr>{email.columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {email.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
              <tr className="mail-total">
                <td colSpan={email.columns.length - 1}>{email.totalLabel}</td>
                <td>{email.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{email.outro}</p>
        <div className="mail-bank">
          <span>{email.bankLabel}</span>
          IBAN <strong>{email.iban}</strong><br />
          BIC <strong>{email.bic}</strong>
        </div>
        <p>{email.closing}</p>
        <p className="mail-sign">
          <strong>{email.signName}</strong><br />
          {email.signRole}
        </p>
      </div>
    </div>
  )
}
