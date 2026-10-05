const principles = [
  ['Commercial Perspective', 'Advice considered in the context of your broader commercial objectives.'],
  ['Responsive Counsel', 'Clear communication and practical guidance throughout the matter.'],
  ['Practical Solutions', 'Focused legal thinking designed around the issue at hand.'],
  ['Long-Term Relationships', 'Counsel built around continuity, understanding and trust.'],
];
export default function WhyChoose() { return <section className="section why-section"><div className="why-intro reveal"><p className="eyebrow dark">OUR APPROACH</p><h2>More than<br /><em>legal advice.</em></h2></div><div className="why-list reveal-stagger">{principles.map(([item, description], index) => <div className="why-row reveal-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><p>{description}</p></div>)}</div></section>; }
