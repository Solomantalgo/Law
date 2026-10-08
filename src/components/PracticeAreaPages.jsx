import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AttorneyPortrait from './AttorneyPortrait';
import PracticeAreas from './PracticeAreas';
import { Arrow } from './Shared';
import { attorneys, practiceAreas } from '../data/siteData';

function usePracticePageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return { menuOpen, setMenuOpen };
}

export function PracticeAreasDirectoryPage() {
  const header = usePracticePageHeader();
  return (
    <div className="practice-directory-page">
      <Header {...header} />
      <main><PracticeAreas fullPage /></main>
      <Footer />
    </div>
  );
}

export function PracticeAreaPage({ area }) {
  const header = usePracticePageHeader();
  const relatedAttorneys = (area.relatedAttorneys || [])
    .map((slug) => attorneys.find((attorney) => attorney.slug === slug))
    .filter(Boolean);
  const services = (area.services || []).filter(Boolean);
  const otherAreas = practiceAreas.filter((item) => item.slug !== area.slug);

  useEffect(() => {
    document.title = area.seoTitle || `${area.title} | R. Mackay Advocates`;
    if (!area.seoDescription) return undefined;
    let description = document.querySelector('meta[name="description"]');
    const created = !description;
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    const previous = description.content;
    description.content = area.seoDescription;
    return () => {
      if (created) description.remove();
      else description.content = previous;
    };
  }, [area]);

  return (
    <div className="practice-area-page">
      <Header {...header} />
      <main>
        <section className="practice-area-hero">
          <div className="practice-area-hero-inner">
            <a className="practice-back-link" href="/practice-areas">&larr; Back to Practice Areas</a>
            <p className="eyebrow">PRACTICE AREA</p>
            <h1>
              <span className="practice-title-desktop">{area.title}</span>
              {area.mobileTitleLines && <span className="practice-title-mobile">{area.mobileTitleLines.map((line) => <span key={line}>{line}</span>)}</span>}
              {!area.mobileTitleLines && <span className="practice-title-mobile">{area.title}</span>}
            </h1>
            {(area.introduction || area.summary) && <p className="practice-area-intro">
              <span className="practice-title-desktop">{area.introduction || area.summary}</span>
              <span className="practice-title-mobile">{(area.mobileSummaryLines || [area.introduction || area.summary]).map((line) => <span key={line}>{line}</span>)}</span>
            </p>}
          </div>
        </section>

        {area.overview && (
          <section className="practice-area-content practice-area-overview">
            <h2>Overview</h2>
            <div>{area.overview}</div>
          </section>
        )}

        {services.length > 0 && (
          <section className="practice-area-content practice-area-services">
            <h2>How We Can Help</h2>
            <ul>{services.map((service, index) => <li key={service.slug || service.title || service.name || index}>{typeof service === 'string' ? service : service.title || service.name}</li>)}</ul>
          </section>
        )}

        {relatedAttorneys.length > 0 && (
          <section className="practice-area-related">
            <div className="practice-area-content">
              <h2>Related Attorneys</h2>
              <div className="practice-related-grid">
                {relatedAttorneys.map((attorney) => (
                  <a className="practice-related-attorney" href={`/people/${attorney.slug}`} key={attorney.slug}>
                    <AttorneyPortrait attorney={attorney} variant="card" />
                    <span><strong>{attorney.name}</strong><small>{attorney.role}</small></span>
                    <Arrow />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="practice-area-explore">
          <div className="practice-area-content">
            <p className="eyebrow dark">OUR EXPERTISE</p>
            <h2>Explore Other Practice Areas</h2>
            <nav className="practice-explore-list" aria-label="Other practice areas">
              {otherAreas.map((item) => (
                <a className="practice-explore-row" href={`/practice-areas/${item.slug}`} key={item.slug}>
                  <span className="practice-explore-number">{item.number}</span>
                  <span className="practice-explore-title">{item.title}</span>
                  <Arrow />
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="practice-area-cta">
          <div>
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>Need guidance on a legal matter?</h2>
            <p className="practice-cta-body"><span className="practice-title-desktop">Speak with our team about your situation and the legal support you may need.</span><span className="practice-title-mobile"><span>Speak with our team about your situation and</span><span>the legal support you may need.</span></span></p>
          </div>
          <a className="button button-light" href="/#contact">Discuss your matter <Arrow /></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function PracticeAreaNotFoundPage() {
  const header = usePracticePageHeader();
  return (
    <div className="practice-area-page practice-area-not-found">
      <Header {...header} />
      <main className="practice-not-found">
        <p className="eyebrow dark">PRACTICE AREAS</p>
        <h1>Practice area not found</h1>
        <p>This practice area is not available.</p>
        <a className="button button-dark" href="/practice-areas">Back to Practice Areas <Arrow /></a>
      </main>
      <Footer />
    </div>
  );
}
