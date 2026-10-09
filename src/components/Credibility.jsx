import { stats } from '../data/siteData';

export default function Credibility() {
  if (!stats.length) return null;
  return <section className="credibility reveal" id="credibility"><div className="section-kicker">A PRACTICE BUILT ON TRUST</div><div className="stats reveal-stagger">{stats.map(([value, label]) => <div className="stat reveal-item" key={label}><strong aria-label={value}>{value}</strong><span>{label}</span></div>)}</div></section>;
}
