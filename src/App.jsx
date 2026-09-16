import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import CorporateSection from './components/CorporateSection';
import Attorneys from './components/Attorneys';
import WhyChoose from './components/WhyChoose';
import Testimonial from './components/Testimonial';
import Insights from './components/Insights';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle('no-scroll', menuOpen); return () => document.body.classList.remove('no-scroll'); }, [menuOpen]);
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const showAll = () => {
      items.forEach((item) => item.classList.add('is-visible'));
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { items.forEach((item) => item.classList.add('is-visible')); return undefined; }
    if (typeof IntersectionObserver === 'undefined') { showAll(); return undefined; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    const timeoutId = window.setTimeout(showAll, 4000);
    return () => { observer.disconnect(); window.clearTimeout(timeoutId); };
  }, []);
  return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><Credibility /><About /><PracticeAreas /><CorporateSection /><Attorneys /><WhyChoose /><Testimonial /><Insights /><ConsultationCTA /></main><Footer /></>;
}
