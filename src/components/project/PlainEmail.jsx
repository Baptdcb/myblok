export default function PlainEmail({ email }) {
  return (
    <div className="mail">
      <dl className="mail-head">
        <div><dt>{email.fromLabel}</dt><dd>{email.from}</dd></div>
        <div><dt>{email.toLabel}</dt><dd>{email.to}</dd></div>
        <div><dt>{email.subjectLabel}</dt><dd><strong>{email.subject}</strong></dd></div>
      </dl>
      <div className="mail-body mail-plain">
        {email.lines.map((line, i) => <p key={i}>{line}</p>)}
      </div>
    </div>
  )
}
