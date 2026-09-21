import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import CorporateSection from './components/CorporateSection';
import Attorneys from './components/Attorneys';
import AttorneyProfilePage from './components/AttorneyProfilePage';
import WhyChoose from './components/WhyChoose';
import Testimonial from './components/Testimonial';
import Insights from './components/Insights';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileId, setProfileId] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#attorneys/')) {
      return hash.replace('#attorneys/', '');
    }
    return null;
  });

  const handleBackToAttorneys = () => {
    window.location.hash = '#attorneys';
    setProfileId(null);
    setTimeout(() => {
      document.querySelector('#attorneys')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#attorneys/')) {
        setProfileId(hash.replace('#attorneys/', ''));
      } else {
        setProfileId(null);
        if (hash === '#attorneys') {
          setTimeout(() => {
            document.querySelector('#attorneys')?.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    if (profileId) return;
    const items = document.querySelectorAll('.reveal');
    const showAll = () => {
      items.forEach((item) => item.classList.add('is-visible'));
    };
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
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    const timeoutId = window.setTimeout(showAll, 4000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, [profileId]);

  if (profileId) {
    return (
      <AttorneyProfilePage
        attorneyId={profileId}
        onBack={handleBackToAttorneys}
      />
    );
  }

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Credibility />
        <About />
        <PracticeAreas />
        <CorporateSection />
        <Attorneys
          onSelectAttorney={(id) => {
            window.location.hash = `#attorneys/${id}`;
            setProfileId(id);
          }}
        />
        <WhyChoose />
        <Testimonial />
        <Insights />
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
