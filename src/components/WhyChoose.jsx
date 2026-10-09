// These are provisional descriptions of the firm's approach, pending client approval.
const principles = [
  ['Commercial context', 'We take commercial objectives into account when advising on a matter.'],
  ['Clear communication', 'We explain the legal issues and next steps in plain language.'],
  ['Focused analysis', 'We assess the issue and the options available.'],
  ['Personal attention', 'We keep the client’s circumstances in view.'],
];
export default function WhyChoose() { return <section className="section why-section"><div className="why-intro reveal"><p className="eyebrow dark">OUR APPROACH</p><h2>How we work.</h2></div><div className="why-list reveal-stagger">{principles.map(([item, description], index) => <div className="why-row reveal-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><p>{description}</p></div>)}</div></section>; }
