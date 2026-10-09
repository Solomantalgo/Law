import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ConsultationCTA from './ConsultationCTA';
import { Arrow } from './Shared';
import { publishedInsights } from '../data/siteData';

function useMeta(title, description, path) {
  useEffect(() => {
    document.title = title;
    const set = (selector, attr, value, create) => {
      let node = document.head.querySelector(selector);
      if (!node && create) { node = document.createElement(create); document.head.append(node); }
      if (node && value) node.setAttribute(attr, value);
    };
    set('meta[name="description"]', 'content', description, 'meta');
    const url = `${window.location.origin}${path}`;
    set('link[rel="canonical"]', 'href', url, 'link');
    set('meta[property="og:title"]', 'content', title, 'meta');
    set('meta[property="og:description"]', 'content', description, 'meta');
    set('meta[property="og:type"]', 'content', path.startsWith('/insights/') ? 'article' : 'website', 'meta');
    set('meta[property="og:url"]', 'content', url, 'meta');
  }, [title, description, path]);
}

function Shell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{children}<Footer /></>;
}

export function InsightsListingPage() {
  const [category, setCategory] = useState('All');
  const categories = [...new Set(publishedInsights.map((item) => item.category).filter(Boolean))];
  const filtered = useMemo(() => category === 'All' ? publishedInsights : publishedInsights.filter((item) => item.category === category), [category]);
  useMeta('Insights & Perspectives | R. Mackay Advocates', 'Legal insights and perspectives from R. Mackay Advocates.', '/insights');
  return <Shell><main className="insights-page"><header className="insights-hero"><div className="insights-container"><p className="eyebrow dark">KNOWLEDGE & PERSPECTIVE</p><h1>Insights <em>&amp;<br className="insights-mobile-break" /> Perspectives</em></h1><p className="insights-intro">Clear perspectives on legal questions that shape business, institutions and everyday life.</p></div></header>
    <section className="insights-container insights-results" aria-label="Legal insights">
      {categories.length > 1 && <div className="insights-filters" role="group" aria-label="Filter insights by category"><button type="button" aria-pressed={category === 'All'} onClick={() => setCategory('All')}>All topics</button>{categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>}
      {filtered.length ? <><div className="insights-page-grid">{filtered.map((article, index) => <ArticleCard article={article} key={article.id} featured={index === 0 && !category} />)}</div></> : <div className="insights-empty"><span className="insights-rule" /><h2>No articles are available yet.</h2><p>Approved articles will appear here when available. Contact our team if you need guidance on a legal matter.</p><a className="line-link" href="/contact#consultation">Speak with our team</a></div>}
    </section></main><ConsultationCTA /></Shell>;
}

function ArticleCard({ article, featured }) {
  return <article className={`insights-article-card ${featured ? 'is-featured' : ''}`}><a href={`/insights/${article.slug}`}><div className="article-card-meta"><span>{article.category}</span>{article.publishedAt && <time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>}</div><h2>{article.title}</h2>{article.excerpt && <p>{article.excerpt}</p>}<span className="article-read">Read article <Arrow /></span></a></article>;
}

function ArticleBody({ content = [] }) {
  return content.map((block, index) => {
    if (block.type === 'heading') return <h2 key={index}>{block.text}</h2>;
    if (block.type === 'list') return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
    if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>;
    return <p key={index}>{block.text}</p>;
  });
}

export function InsightArticlePage({ slug }) {
  const article = publishedInsights.find((item) => item.slug === slug);
  const description = article?.excerpt || (article ? `${article.title}. Insights from R. Mackay Advocates.` : 'The requested insight could not be found.');
  useMeta(article ? `${article.title} | R. Mackay Advocates` : 'Insight not found | R. Mackay Advocates', description, `/insights/${slug}`);
  if (!article) return <Shell><main className="insight-not-found"><p className="eyebrow dark">INSIGHTS &amp; PERSPECTIVES</p><h1>This article is unavailable.</h1><p>It may have moved or may not yet be published.</p><a className="line-link" href="/insights">Back to Insights <Arrow /></a></main><ConsultationCTA /></Shell>;
  const related = publishedInsights.filter((item) => item.id !== article.id).slice(0, 3);
  return <Shell><main className="insight-article-page"><nav className="insight-breadcrumb" aria-label="Breadcrumb"><a href="/insights">Insights</a><span aria-hidden="true">/</span><span>{article.category}</span></nav><article className="insight-reading"><header><p className="eyebrow dark">{article.category}</p><h1>{article.title}</h1>{article.excerpt && <p className="insight-deck">{article.excerpt}</p>}<div className="insight-byline">{article.author && <span>{article.author}</span>}{article.author && article.publishedAt && <span aria-hidden="true">·</span>}{article.publishedAt && <time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>}</div></header>{article.image && <figure className="insight-hero-image"><img src={article.image} alt={article.imageAlt || ''} /></figure>}<div className="insight-body"><ArticleBody content={article.content} /></div><a className="line-link insight-back" href="/insights"><Arrow className="arrow-back" /> Back to Insights</a></article>{related.length > 0 && <section className="insight-related insights-container"><p className="eyebrow dark">CONTINUE READING</p><h2>Related perspectives</h2><div className="insights-page-grid">{related.map((item) => <ArticleCard article={item} key={item.id} />)}</div></section>}</main><ConsultationCTA /></Shell>;
}
