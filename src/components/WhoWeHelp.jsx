const clientGroups = [
  ['01', 'Businesses & Companies'],
  ['02', 'Institutions & Organisations'],
  ['03', 'Entrepreneurs & Investors'],
  ['04', 'Individuals & Families'],
];

export default function WhoWeHelp() {
  return (
    <section className="section who-section" id="who-we-help">
      <div className="who-intro">
        <p className="eyebrow dark reveal-item">WHO WE HELP</p>
        <h2 className="reveal-stagger">
          <span className="reveal-item">Counsel for</span>
          <span className="reveal-item"><em>people and organisations</em></span>
          <span className="reveal-item">moving forward.</span>
        </h2>
        <p className="who-copy reveal-item">We work with clients navigating commercial decisions, regulatory responsibilities, disputes, transactions and personal legal matters.</p>
      </div>
      <div className="who-list reveal-stagger">
        {clientGroups.map(([number, label]) => (
          <div className="who-row reveal-item" key={number}>
            <span>{number}</span><strong>{label}</strong><i aria-hidden="true">↗</i>
          </div>
        ))}
      </div>
    </section>
  );
}
