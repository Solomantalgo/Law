import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const image = (name) => `/assets/images/${name}`;

const stats = [
  ['15+', 'Years of Experience'],
  ['250+', 'Matters Handled'],
  ['98%', 'Client Satisfaction'],
  ['06', 'Core Practice Areas'],
];

const practiceAreas = [
  ['01', 'Corporate & Commercial Law', 'Business-minded counsel for agreements, transactions and commercial decisions.'],
  ['02', 'Litigation & Dispute Resolution', 'Measured representation and practical strategies when disputes arise.'],
  ['03', 'Real Estate & Property', 'Clear guidance through property transactions, development and ownership matters.'],
  ['04', 'Banking & Finance', 'Thoughtful support for lending, security and financial services work.'],
  ['05', 'Employment Law', 'Balanced counsel for workplace relationships, policies and employment risk.'],
  ['06', 'Family & Private Client', 'Discreet, considered advice for personal, family and private client matters.'],
];

const attorneys = [
  ['Richard Mackay', 'Managing Partner', 'Managing Partner portrait.jpg'],
  ['Sarah N. Kato', 'Senior Advocate', 'Senior female advocate.jpg'],
  ['Daniel K. Mugisha', 'Corporate Counsel', 'Younger corporate lawyer.jpg'],
];

const insights = [
  ['LEGAL UPDATE', '12.06.24', 'Understanding Commercial Agreements in Uganda'],
  ['BUSINESS LAW', '28.05.24', 'What Businesses Should Consider Before Entering a Partnership'],
  ['PROPERTY', '09.05.24', 'Property Transactions: Key Legal Considerations'],
];

function Arrow({ className = '' }) {
  return <span className={`arrow ${className}`} aria-hidden="true">↗</span>;
}

function MenuIcon({ open }) {
  return <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>;
}

function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (id) => { setMenuOpen(false); document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
    <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); go('#home'); }}><span>R. MACKAY</span><small>ADVOCATES</small></a>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {['home', 'about', 'practice', 'attorneys', 'insights', 'contact'].map((id) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(`#${id}`); }}>{id === 'practice' ? 'Practice Areas' : id[0].toUpperCase() + id.slice(1)}</a>)}
    </nav>
    <a className="header-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('#contact'); }}>Book a Consultation <Arrow /></a>
    <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen} /></button>
    {menuOpen && <div className="mobile-nav" aria-label="Mobile navigation">
      {['home', 'about', 'practice', 'attorneys', 'insights', 'contact'].map((id) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(`#${id}`); }}>{id === 'practice' ? 'Practice Areas' : id[0].toUpperCase() + id.slice(1)}<Arrow /></a>)}
      <a className="mobile-nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); go('#contact'); }}>Book a Consultation <Arrow /></a>
    </div>}
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-image"><img src={image('Hero.jpg')} alt="Lawyers in conversation at R. Mackay Advocates" /></div>
    <div className="hero-overlay" />
    <div className="hero-content reveal-in"><p className="eyebrow">R. MACKAY ADVOCATES <b>•</b> KAMPALA, UGANDA</p><h1>Strategic legal counsel.<br /><em>Built around your success.</em></h1><p className="hero-copy">Providing thoughtful, commercially focused legal counsel to businesses, institutions and individuals navigating complex legal matters.</p><div className="hero-actions"><a className="button button-light" href="#contact">Book a Consultation <Arrow /></a><a className="text-button" href="#practice">Explore Our Expertise <Arrow /></a></div></div>
    <div className="hero-trust">Trusted counsel. Practical solutions. Lasting relationships.</div>
    <a className="scroll-cue" href="#credibility" aria-label="Scroll to credibility"><span />Scroll to explore</a>
  </section>;
}

function Credibility() { return <section className="credibility" id="credibility"><div className="section-kicker">A PRACTICE BUILT ON TRUST</div><div className="stats">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>; }

function About() { return <section className="section about-section" id="about"><div className="about-media"><img src={image('About.jpg')} alt="Contemporary legal office interior" /><span className="image-caption">R. MACKAY ADVOCATES / KAMPALA</span></div><div className="about-copy-block"><p className="eyebrow dark">ABOUT THE FIRM</p><h2>Legal insight.<br /><em>Commercial understanding.</em><br />Personal commitment.</h2><p>We are shaping a considered legal practice for clients who value clarity, responsiveness and counsel that understands the wider context of every decision.</p><a className="line-link" href="#contact">Discover Our Firm <Arrow /></a></div></section>; }

function PracticeAreas() { return <section className="section practice-section" id="practice"><div className="section-heading"><div><p className="eyebrow dark">OUR EXPERTISE</p><h2>Legal expertise for<br /><em>complex decisions.</em></h2></div><p className="heading-note">Focused advice for the matters<br />that move people and business forward.</p></div><div className="practice-list">{practiceAreas.map(([number, title, description]) => <a className="practice-row" href="#contact" key={title}><span className="practice-number">{number}</span><span className="practice-title">{title}</span><span className="practice-description">{description}</span><Arrow /></a>)}</div></section>; }

function CorporateSection() { return <section className="corporate-section"><div className="corporate-image"><img src={image('coperate.jpg')} alt="Corporate legal meeting" /></div><div className="corporate-content"><p className="eyebrow">THE WIDER VIEW</p><h2>Counsel that sees<br /><em>the bigger picture.</em></h2><p>Legal decisions rarely exist in isolation. We consider commercial objectives, risk and long-term consequences alongside the immediate matter.</p><div className="principles"><span><b>01</b>Strategic Thinking</span><span><b>02</b>Clear Communication</span><span><b>03</b>Client-Focused Counsel</span></div></div></section>; }

function Attorneys() { return <section className="section attorneys-section" id="attorneys"><div className="section-heading"><div><p className="eyebrow dark">OUR PEOPLE</p><h2>Experience<br /><em>you can trust.</em></h2></div><p className="heading-note">A demo team presentation.<br />Names and profiles to be confirmed.</p></div><div className="attorney-grid">{attorneys.map(([name, role, photo]) => <article className="attorney-card" key={name}><div className="attorney-photo"><img src={image(photo)} alt={`${name}, ${role}`} /><span><Arrow /></span></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>; }

function WhyChoose() { return <section className="section why-section"><div className="why-intro"><p className="eyebrow dark">OUR APPROACH</p><h2>More than<br /><em>legal advice.</em></h2></div><div className="why-list">{['Commercial Perspective', 'Responsive Counsel', 'Practical Solutions', 'Long-Term Relationships'].map((item, index) => <div className="why-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><p>Thoughtful, practical support aligned with what matters most.</p></div>)}</div></section>; }

function Testimonial() { return <section className="quote-section"><div className="quote-mark">“</div><blockquote>The strongest legal relationships are built on clarity, trust and an understanding of what truly matters to the client.</blockquote><p>— Client testimonial <span>Corporate Client</span></p></section>; }

function Insights() { return <section className="section insights-section" id="insights"><div className="section-heading"><div><p className="eyebrow dark">LEGAL INSIGHTS</p><h2>Perspectives for<br /><em>important decisions.</em></h2></div><a className="line-link" href="#contact">View all insights <Arrow /></a></div><div className="insights-grid">{insights.map(([category, date, title]) => <a className="insight-card" href="#contact" key={title}><div><span>{category}</span><time>{date}</time></div><h3>{title}</h3><Arrow /></a>)}</div></section>; }

function ConsultationCTA() { return <section className="consultation-section" id="contact"><div><p className="eyebrow">START A CONVERSATION</p><h2>When the matter is important,<br /><em>the right counsel matters.</em></h2><p>Speak with our team about your legal needs.</p></div><div className="consultation-actions"><a className="button button-light" href="mailto:client@example.com">Book a Consultation <Arrow /></a><a className="button button-outline-light" href="mailto:client@example.com">Contact the Firm</a></div></section>; }

function Footer() { return <footer><div className="footer-main"><a className="wordmark footer-wordmark" href="#home"><span>R. MACKAY</span><small>ADVOCATES</small></a><p>Strategic legal counsel for businesses, institutions and individuals navigating complex decisions.</p></div><div><h4>Firm</h4><a href="#about">About</a><a href="#attorneys">Attorneys</a><a href="#insights">Insights</a></div><div><h4>Expertise</h4><a href="#practice">Corporate & Commercial</a><a href="#practice">Litigation</a><a href="#practice">Property</a><a href="#practice">Banking & Finance</a></div><div><h4>Contact</h4><p>Kampala, Uganda</p><p>Phone: [Client phone]</p><p>Email: [Client email]</p><small>Demo contact details — replace with verified firm information</small></div><div className="footer-bottom"><span>© 2024 R. Mackay Advocates. Demo website.</span><span>Confidentiality · Integrity · Counsel</span></div></footer>; }

function App() { const [menuOpen, setMenuOpen] = useState(false); useEffect(() => { document.body.classList.toggle('no-scroll', menuOpen); return () => document.body.classList.remove('no-scroll'); }, [menuOpen]); return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><main><Hero /><Credibility /><About /><PracticeAreas /><CorporateSection /><Attorneys /><WhyChoose /><Testimonial /><Insights /><ConsultationCTA /></main><Footer /></>; }

createRoot(document.getElementById('root')).render(<App />);
