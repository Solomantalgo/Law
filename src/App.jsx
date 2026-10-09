import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import About from './components/About';
import AboutPage from './components/AboutPage';
import PracticeAreas from './components/PracticeAreas';
import WhoWeHelp from './components/WhoWeHelp';
import CorporateSection from './components/CorporateSection';
import Attorneys from './components/Attorneys';
import AttorneyProfilePage from './components/AttorneyProfilePage';
import AttorneyDirectoryPage from './components/AttorneyDirectoryPage';
import { PracticeAreaNotFoundPage, PracticeAreaPage, PracticeAreasDirectoryPage } from './components/PracticeAreaPages';
import WhyChoose from './components/WhyChoose';
import Insights from './components/Insights';
import { InsightsListingPage, InsightArticlePage } from './components/InsightsPages';
import GalleryPreview from './components/GalleryPreview';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from './components/Footer';
import { attorneys, practiceAreas } from './data/siteData';

const getProfileSlug = () => {
  const match = window.location.pathname.match(/^\/people\/([^/]+)\/?$/);
  const slug = match?.[1] || (window.location.hash.startsWith('#attorneys/') ? window.location.hash.slice('#attorneys/'.length) : null);
  return attorneys.some((attorney) => attorney.slug === slug) ? slug : null;
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileId, setProfileId] = useState(getProfileSlug);

  useEffect(() => {
    const handleLocationChange = () => {
      setProfileId(getProfileSlug());
      if (window.location.hash === '#attorneys') {
        setTimeout(() => document.querySelector('#attorneys')?.scrollIntoView({ behavior: 'smooth' }), 60);
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (!profileId && window.location.hash && window.location.hash !== '#' && window.location.hash !== '#consultation') {
      const targetId = window.location.hash.slice(1);
      window.setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
      }, 250);
    }
  }, [profileId]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal, .reveal-item, .reveal-up, .reveal-left');
    const showAll = () => items.forEach((item) => item.classList.add('is-visible'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll();
      return undefined;
    }
    if (typeof IntersectionObserver === 'undefined') {
      showAll();
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );
    document.documentElement.classList.add('reveal-ready');
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
    };
  }, [profileId]);

  if (profileId) {
    return (
      <AttorneyProfilePage
        attorneyId={profileId}
      />
    );
  }

  if (window.location.pathname === '/people' || window.location.pathname === '/people/') {
    return <AttorneyDirectoryPage onSelectAttorney={(id) => {
      window.history.pushState({}, '', `/people/${id}`);
      setProfileId(id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }} />;
  }

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  if (currentPath === '/insights') return <InsightsListingPage />;
  if (currentPath.startsWith('/insights/')) return <InsightArticlePage slug={decodeURIComponent(currentPath.slice('/insights/'.length))} />;
  if (currentPath === '/about') return <AboutPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
  if (currentPath === '/gallery') return <GalleryPage />;
  if (currentPath === '/contact') return <ContactPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
  if (currentPath === '/practice-areas') return <PracticeAreasDirectoryPage />;
  if (currentPath.startsWith('/practice-areas/')) {
    const slug = decodeURIComponent(currentPath.slice('/practice-areas/'.length));
    const practiceArea = practiceAreas.find((area) => area.slug === slug);
    return practiceArea ? <PracticeAreaPage area={practiceArea} /> : <PracticeAreaNotFoundPage />;
  }

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Credibility />
        <About />
        <PracticeAreas />
        <WhoWeHelp />
        <CorporateSection />
        <Attorneys
          preview
          onSelectAttorney={(id) => {
            window.history.pushState({}, '', `/people/${id}`);
            setProfileId(id);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        />
        <WhyChoose />
        <GalleryPreview />
        <Insights />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
