import { useState } from 'react';

function PhoneIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="m4 6 8 7 8-7" /></svg>; }
function PinIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>; }
function LinkedInIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.08 1.4-2.08 2.85V21H9z" /></svg>; }
function FacebookIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg>; }
function XIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L5 22H2l8.1-9.3L1.5 2h7l4.8 6.3zM17.6 20h1.7L7.5 4h-1.8z" /></svg>; }

const socials = [
  ['LinkedIn', LinkedInIcon],
  ['Facebook', FacebookIcon],
  ['X (Twitter)', XIcon],
];

export default function Footer() {
  const [toast, setToast] = useState(null);

  const handleSocialClick = (name) => {
    setToast(`${name} page — coming soon once the firm provides their profile link.`);
    window.clearTimeout(handleSocialClick._t);
    handleSocialClick._t = window.setTimeout(() => setToast(null), 3200);
  };

  return (
    <footer>
      <div className="footer-main">
        <a className="footer-badge" href="#home" aria-label="R. Mackay Advocates home"><img src="/assets/images/rmackay-full-badge-transparent.png" alt="R. Mackay Advocates" /></a>
        <p>Strategic legal counsel for businesses, institutions and individuals navigating complex decisions.</p>
        <div className="footer-socials">
          {socials.map(([name, Icon]) => (
            <button type="button" key={name} className="social-icon" aria-label={name} onClick={() => handleSocialClick(name)}><Icon /></button>
          ))}
        </div>
      </div>
      <div><h4>Firm</h4><a href="#about">About</a><a href="#attorneys">Attorneys</a><a href="#insights">Insights</a></div>
      <div><h4>Expertise</h4><a href="#practice">Tax</a><a href="#practice">Criminal</a><a href="#practice">Corporate and Commercial Practice</a><a href="#practice">Conveyancing</a><a href="#practice">Corporate Compliance</a></div>
      <div>
        <h4>Contact</h4>
        <p className="footer-contact-line"><span className="footer-contact-icon"><PinIcon /></span>3rd Flr Suite 310, BMK House<br />Plot 4-5 Nyabong Rd, Wampewo Avenue<br />P.O Box 27674, Kampala, Uganda</p>
        <p className="footer-contact-line"><span className="footer-contact-icon"><PhoneIcon /></span>+256 393 216 316</p>
        <p className="footer-contact-line"><span className="footer-contact-icon"><MailIcon /></span>rmackay@rmackayadvocates.com</p>
        <p className="footer-meta">Reg. No. 20499 · Offices in Kenya &amp; Uganda</p>
      </div>
      <div className="footer-bottom"><span>© 2026 R. Mackay Advocates.</span><span>Confidentiality · Integrity · Counsel</span></div>
      <div className={`demo-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">{toast}</div>
    </footer>
  );
}
