import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MenuIcon } from './Shared';
export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const context = pathname === '/people' ? 'directory' : /^\/people\/[^/]+$/.test(pathname) ? 'profile' : pathname === '/practice-areas' || pathname.startsWith('/practice-areas/') ? 'practice' : pathname === '/about' ? 'about' : pathname === '/gallery' ? 'gallery' : pathname === '/contact' ? 'contact' : pathname === '/insights' || pathname.startsWith('/insights/') ? 'insights' : 'home';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    const sentinel = document.createElement('span');
    sentinel.className = 'site-header-scroll-sentinel';
    sentinel.setAttribute('aria-hidden', 'true');
    document.body.append(sentinel);
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer?.observe(sentinel);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      observer?.disconnect();
      sentinel.remove();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;
    const updateHeight = () => document.documentElement.style.setProperty('--global-header-height', `${header.getBoundingClientRect().height}px`);
    updateHeight();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateHeight);
    observer?.observe(header);
    window.addEventListener('resize', updateHeight);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.removeProperty('--global-header-height');
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const alreadyLocked = document.body.classList.contains('no-scroll');
    document.body.classList.add('no-scroll');
    return () => { if (!alreadyLocked) document.body.classList.remove('no-scroll'); };
  }, [menuOpen]);
  const go = (id) => {
    setMenuOpen(false);
    if (id === '#about') { window.location.href = '/about'; return; }
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else if (id === '#practice') window.location.href = '/practice-areas';
    else if (id === '#home') window.location.href = '/';
    else if (id === '#attorneys') window.location.href = '/people';
    else if (id === '#contact') window.location.href = '/contact#consultation';
    else if (id === '#insights') window.location.href = '/insights';
    else window.location.href = `/${id}`;
  };
  const links = ['home', 'about', 'practice', 'attorneys', 'gallery', 'insights', 'contact'];
  const label = (id) => id === 'practice' ? 'Practice Areas' : id[0].toUpperCase() + id.slice(1);
  const href = (id) => id === 'about' ? '/about' : id === 'gallery' ? '/gallery' : id === 'insights' ? '/insights' : id === 'contact' ? '/contact' : `#${id}`;
  const onNavigationClick = (event, id) => {
    if (id === 'about' || id === 'gallery' || id === 'insights' || id === 'contact') { setMenuOpen(false); return; }
    event.preventDefault();
    go(`#${id}`);
  };
  return <header ref={headerRef} className={`site-header site-header--${context} ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
    <a className="wordmark wordmark-icon" href="#home" onClick={(e) => { e.preventDefault(); go('#home'); }} aria-label="R. Mackay Advocates home">
      <img src="/assets/images/rmackay-full-badge-transparent.png" alt="R. Mackay Advocates badge" aria-hidden="true" />
      <span className="wordmark-text"><strong>R. MACKAY</strong><small>ADVOCATES</small></span>
    </a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map((id) => <a key={id} href={href(id)} className={(id === 'gallery' && pathname === '/gallery') || (id === 'contact' && pathname === '/contact') ? 'is-current' : undefined} aria-current={(id === 'gallery' && pathname === '/gallery') || (id === 'contact' && pathname === '/contact') ? 'page' : undefined} onClick={(event) => onNavigationClick(event, id)}>{label(id)}</a>)}</nav>
    <a className="header-cta" href="/contact#consultation">Book a Consultation</a>
    <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen} /></button>
    {menuOpen && <div className="mobile-nav" aria-label="Mobile navigation">{links.map((id) => <a key={id} href={href(id)} className={(id === 'gallery' && pathname === '/gallery') || (id === 'contact' && pathname === '/contact') ? 'is-current' : undefined} aria-current={(id === 'gallery' && pathname === '/gallery') || (id === 'contact' && pathname === '/contact') ? 'page' : undefined} onClick={(event) => onNavigationClick(event, id)}>{label(id)}</a>)}<a className="mobile-nav-cta" href="/contact#consultation">Book a Consultation</a></div>}
  </header>;
}
