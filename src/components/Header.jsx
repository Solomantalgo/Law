import { useEffect, useState } from 'react';
import { Arrow, MenuIcon } from './Shared';
export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  const go = (id) => { setMenuOpen(false); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const links = ['home', 'about', 'practice', 'attorneys', 'insights', 'contact'];
  const label = (id) => id === 'practice' ? 'Practice Areas' : id[0].toUpperCase() + id.slice(1);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
    <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); go('#home'); }}><span>R. MACKAY</span><small>ADVOCATES</small></a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map((id) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(`#${id}`); }}>{label(id)}</a>)}</nav>
    <a className="header-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('#contact'); }}>Book a Consultation <Arrow /></a>
    <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen} /></button>
    {menuOpen && <div className="mobile-nav" aria-label="Mobile navigation">{links.map((id) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(`#${id}`); }}>{label(id)}<Arrow /></a>)}<a className="mobile-nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('#contact'); }}>Book a Consultation <Arrow /></a></div>}
  </header>;
}
