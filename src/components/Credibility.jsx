import { stats } from '../data/siteData';
export default function Credibility() { return <section className="credibility reveal" id="credibility"><div className="section-kicker">A PRACTICE BUILT ON TRUST</div><div className="stats">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>; }
