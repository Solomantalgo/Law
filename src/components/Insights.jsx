import { Arrow } from './Shared';
import { publishedInsights } from '../data/siteData';

export default function Insights() {
  const articles = publishedInsights.slice(0, 3);
  return <section className="section insights-section" id="insights" aria-labelledby="home-insights-title">
    <div className="section-heading reveal"><div><p className="eyebrow dark">LEGAL INSIGHTS</p><h2 id="home-insights-title">Insights <em>&amp; Perspectives</em></h2><p className="insights-home-intro">Clear perspectives on legal questions that shape business, institutions and everyday life.</p></div><a className="line-link insights-home-link" href="/insights">Explore Insights</a></div>
    {articles.length ? <div className="insights-grid reveal-stagger">{articles.map((article) => <a className="insight-card reveal-item" href={`/insights/${article.slug}`} key={article.id}><div><span>{article.category}</span>{article.publishedAt && <time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T12:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</time>}</div><h3>{article.title}</h3><Arrow /></a>)}</div> : <div className="insights-home-empty reveal"><p>Approved articles will appear here when available.</p></div>}
  </section>;
}
