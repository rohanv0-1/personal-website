export function Section({ eyebrow, title, description, children }) {
  return (
    <section className="section">
      <div className="section-header">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {description && <p className="muted">{description}</p>}
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
