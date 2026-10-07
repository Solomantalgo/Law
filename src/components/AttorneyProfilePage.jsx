import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Arrow } from './Shared';
import { attorneys } from '../data/siteData';
import AttorneyPortrait from './AttorneyPortrait';

const hasValue = (value) => {
  if (typeof value === 'string') return value.trim().length > 0;
  if (!value || typeof value !== 'object') return Boolean(value);
  return Object.values(value).some((part) => typeof part === 'string' ? part.trim().length > 0 : Boolean(part));
};
const asList = (value) => (Array.isArray(value) ? value : value ? [value] : []).filter(hasValue);
const itemText = (item) => (typeof item === 'string' ? item : item?.title || item?.name || item?.role || item?.label || item?.degree || '');
const itemDescription = (item) => typeof item === 'object' ? item.description || item.summary || '' : '';
const keepNavItemVisible = (nav, link, behavior) => {
  if (!nav || !link || window.innerWidth > 800) return;
  const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 0;
  const navRect = nav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  if (navRect.top > headerBottom + 2 || linkRect.left >= navRect.left && linkRect.right <= navRect.right) return;
  link.scrollIntoView({ block: 'nearest', inline: 'center', behavior });
};

function Biography({ entries }) {
  let previousHeading = '';
  return <div className="profile-biography">{entries.map((entry, index) => {
    if (typeof entry === 'string') return <p key={index}>{entry}</p>;
    const heading = entry.heading?.trim();
    const showHeading = heading && heading.toLowerCase() !== previousHeading.toLowerCase();
    if (heading) previousHeading = heading;
    const text = entry.text || entry.paragraph || entry.body;
    return <section className="profile-biography-subsection" key={index}>{showHeading && <h3>{heading}</h3>}{text && <p>{text}</p>}</section>;
  })}</div>;
}

function ProfilePanel({ section, attorney }) {
  return <section id={section.id} className="profile-content-section profile-content-panel reveal-up" aria-labelledby={`${section.id}-heading`}>
    <h2 id={`${section.id}-heading`} className="profile-panel-heading">{section.label}</h2>
    {section.id === 'biography' && <Biography entries={section.items} />}
    {section.id === 'experience' && <ol className="profile-timeline">{section.items.map((item, index) => <li key={index}><h3>{itemText(item)}</h3>{typeof item === 'object' && (item.organization || item.period) && <p className="profile-detail-meta">{[item.organization, item.period].filter(Boolean).join(' · ')}</p>}{itemDescription(item) && <p>{itemDescription(item)}</p>}</li>)}</ol>}
    {section.id === 'education' && <div className="profile-credentials">
      {asList(attorney.education).length > 0 && <ul className="profile-credential-list">{asList(attorney.education).map((item, index) => <li key={`edu-${index}`}><strong>{typeof item === 'string' ? item : item.degree || item.title || item.name}</strong>{typeof item === 'object' && item.institution && <span>{item.institution}</span>}</li>)}</ul>}
      {asList(attorney.qualifications).length > 0 && <><h3>Professional qualifications</h3><ul className="profile-list">{asList(attorney.qualifications).map((item, index) => <li key={`qual-${index}`}>{itemText(item)}{itemDescription(item) && <span> — {itemDescription(item)}</span>}</li>)}</ul></>}
    </div>}
    {section.id === 'representative-matters' && <ul className="profile-matters-list">{section.items.map((item, index) => <li key={index}><h3>{itemText(item)}</h3>{itemDescription(item) && <p>{itemDescription(item)}</p>}</li>)}</ul>}
    {section.id === 'memberships' && <div className="profile-memberships">
      {asList(attorney.professionalMemberships).length > 0 && <ul className="profile-list">{asList(attorney.professionalMemberships).map((item, index) => <li key={`member-${index}`}><strong>{itemText(item)}</strong>{itemDescription(item) && <span> — {itemDescription(item)}</span>}</li>)}</ul>}
      {asList(attorney.admissions).length > 0 && <><h3>Admissions</h3><ul className="profile-list">{asList(attorney.admissions).map((item, index) => <li key={`admission-${index}`}>{itemText(item)}</li>)}</ul></>}
    </div>}
    {section.id === 'practice-areas' && <ul className="profile-practice-links">{section.items.map((area, index) => <li key={index}>{typeof area === 'string' || !area.href ? <span>{itemText(area)}</span> : <a href={area.href}>{itemText(area)} <span aria-hidden="true">↗</span></a>}</li>)}</ul>}
    {section.id === 'languages' && <ul className="profile-list">{section.items.map((item, index) => <li key={index}>{itemText(item)}</li>)}</ul>}
    {section.id === 'related-insights' && <ul className="profile-list">{section.items.map((item, index) => <li key={index}>{typeof item === 'string' || !item.href ? itemText(item) : <a href={item.href}>{itemText(item)}</a>}{itemDescription(item) && <p>{itemDescription(item)}</p>}</li>)}</ul>}
  </section>;
}

export default function AttorneyProfilePage({ attorneyId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('');
  const tabsRef = useRef(null);
  const sectionRegionRef = useRef(null);
  const navItemRefs = useRef(new Map());
  const attorney = attorneys.find((item) => item.slug === attorneyId);

  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = attorney ? `${attorney.name} | R. Mackay Advocates` : 'Our People | R. Mackay Advocates';
    return () => { document.title = 'R. Mackay Advocates'; };
  }, [attorney]);

  const tabs = useMemo(() => {
    if (!attorney) return [];
    const groups = [
      { id: 'biography', label: 'Biography', items: asList(attorney.biography) },
      { id: 'experience', label: 'Experience', items: asList(attorney.experience) },
      { id: 'education', label: 'Education & Qualifications', items: [...asList(attorney.education), ...asList(attorney.qualifications)] },
      { id: 'representative-matters', label: 'Representative Matters', items: asList(attorney.representativeMatters) },
      { id: 'memberships', label: 'Memberships & Admissions', items: [...asList(attorney.professionalMemberships), ...asList(attorney.admissions)] },
      { id: 'practice-areas', label: 'Practice Areas', items: asList(attorney.practiceAreas) },
      { id: 'languages', label: 'Languages', items: asList(attorney.languages) },
      { id: 'related-insights', label: 'Related Insights', items: asList(attorney.relatedInsights) },
    ];
    return groups.filter((group) => group.items.length > 0);
  }, [attorney]);
  const activeSection = tabs.find((section) => section.id === activeSectionId) || tabs[0];
  const motionBehavior = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';

  const scrollToSection = (sectionId, behavior = 'instant') => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const nav = tabsRef.current;
    const navTop = nav ? Number.parseFloat(window.getComputedStyle(nav).top) || 0 : 0;
    const stickyOffset = navTop + (nav?.getBoundingClientRect().height || 0) + 12;
    const top = window.scrollY + target.getBoundingClientRect().top - stickyOffset;
    window.scrollTo({ top, behavior });
  };

  useEffect(() => {
    const requestedSection = decodeURIComponent(window.location.hash.slice(1));
    const initialSection = tabs.find((section) => section.id === requestedSection) || tabs[0];
    setActiveSectionId(initialSection?.id || '');
    if (requestedSection && tabs.some((section) => section.id === requestedSection)) {
      const initialScroll = window.setTimeout(() => {
        scrollToSection(requestedSection, 'instant');
        setActiveSectionId(requestedSection);
      }, 320);
      return () => window.clearTimeout(initialScroll);
    }
  }, [attorneyId, tabs]);

  useEffect(() => {
    const readPosition = () => {
      const region = sectionRegionRef.current;
      const nav = tabsRef.current;
      if (!region || !nav || !tabs.length) return;
      const header = document.querySelector('.site-header');
      const activeLineGap = window.innerWidth <= 800 ? 36 : 16;
      const readLine = Math.max(header?.getBoundingClientRect().bottom || 0, nav.getBoundingClientRect().bottom) + activeLineGap;
      let current = tabs[0];
      for (const section of tabs) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= readLine) current = section;
        else break;
      }
      const last = tabs[tabs.length - 1];
      const lastElement = document.getElementById(last.id);
      const regionBottom = region.getBoundingClientRect().bottom;
      if (lastElement && (lastElement.getBoundingClientRect().top <= readLine || regionBottom <= readLine)) current = last;
      setActiveSectionId((previous) => previous === current.id ? previous : current.id);
    };
    readPosition();
    const topInset = 157;
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(readPosition, { rootMargin: `-${topInset}px 0px -65% 0px`, threshold: 0 });
    tabs.forEach((section) => { const element = document.getElementById(section.id); if (element) observer?.observe(element); });
    window.addEventListener('scroll', readPosition, { passive: true });
    window.addEventListener('scrollend', readPosition, { passive: true });
    window.addEventListener('resize', readPosition);
    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', readPosition);
      window.removeEventListener('scrollend', readPosition);
      window.removeEventListener('resize', readPosition);
    };
  }, [attorneyId, tabs]);

  useEffect(() => {
    const nav = tabsRef.current;
    const activeLink = navItemRefs.current.get(activeSection?.id);
    if (!nav || !activeLink) return;
    const keepVisible = () => keepNavItemVisible(nav, activeLink, 'instant');
    keepVisible();
    window.addEventListener('scroll', keepVisible, { passive: true });
    window.addEventListener('resize', keepVisible);
    return () => {
      window.removeEventListener('scroll', keepVisible);
      window.removeEventListener('resize', keepVisible);
    };
  }, [activeSection?.id]);

  useEffect(() => {
    const handleLocation = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (tabs.some((section) => section.id === id)) requestAnimationFrame(() => scrollToSection(id, motionBehavior()));
    };
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, [tabs]);

  if (!attorney) return null;
  const hasProfileContent = tabs.length > 0;

  return (
    <div className="attorney-profile-page">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section className={`profile-hero ${hasProfileContent ? 'profile-hero-detailed' : 'profile-hero-limited'}`}>
          <div className="profile-hero-inner">
            <a href="/people" className="back-link">&larr; Back to Our People</a>
            <div className="profile-hero-content">
              <div className="profile-hero-photo reveal reveal-left"><AttorneyPortrait attorney={attorney} variant="profile" /></div>
              <div className="profile-hero-details reveal-up">
                <p className="eyebrow profile-eyebrow">OUR PEOPLE</p>
                <h1>{attorney.name}</h1>
                <p className="profile-title">{attorney.role}</p>
                {attorney.shortBio && <p className="profile-intro">{attorney.shortBio}</p>}
                {(attorney.email || attorney.phone) && <div className="profile-contact-actions">
                  {attorney.email && <a href={`mailto:${attorney.email}`}>Email <Arrow /></a>}
                  {attorney.phone && <a href={`tel:${attorney.phone}`}>Call <Arrow /></a>}
                </div>}
              </div>
            </div>
          </div>
        </section>

        {activeSection && <div className="profile-content-region" ref={sectionRegionRef}>
          <nav className="profile-tabs" ref={tabsRef} aria-label={`${attorney.name} profile sections`}>
            {tabs.map((section) => <a
              key={section.id}
              ref={(node) => { if (node) navItemRefs.current.set(section.id, node); else navItemRefs.current.delete(section.id); }}
              className="profile-tab"
              href={`#${section.id}`}
              aria-current={activeSection.id === section.id ? 'location' : undefined}
            >{section.label}</a>)}
          </nav>
          <div className="profile-main-content profile-content-column">
            {tabs.map((section) => <ProfilePanel key={section.id} section={section} attorney={attorney} />)}
          </div>
        </div>}

        <section className="profile-consultation">
          <p className="eyebrow">NEED LEGAL GUIDANCE?</p>
          <h2>Let’s discuss<br /><em>your matter.</em></h2>
          <a className="button button-light" href="/#contact">Contact the firm <Arrow /></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
