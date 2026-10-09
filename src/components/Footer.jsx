import { firmContact } from '../data/siteData';

function PhoneIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>; }
function MailIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="m4 6 8 7 8-7" /></svg>; }
function PinIcon() { return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>; }
export default function Footer() {
  return (
    <footer className="reveal reveal-fade">
      <div className="footer-main">
        <a className="footer-badge" href="#home" aria-label="R. Mackay Advocates home"><img src="/assets/images/rmackay-full-badge-transparent.png" alt="R. Mackay Advocates" /></a>
        <p>Legal counsel for businesses, institutions and individuals in Kampala.</p>
      </div>
      <div><h4>Firm</h4><a href="/about">About</a><a href="/people">Attorneys</a><a href="/gallery">Gallery</a><a href="/insights">Insights</a><a href="/contact">Contact</a></div>
      <div><h4>Expertise</h4><a href="/practice-areas/tax">Tax</a><a href="/practice-areas/criminal">Criminal</a><a href="/practice-areas/corporate-commercial">Corporate and Commercial Practice</a><a href="/practice-areas/conveyancing">Conveyancing</a><a href="/practice-areas/corporate-compliance">Corporate Compliance</a></div>
      <div>
        <h4>Contact</h4>
        <p className="footer-contact-line"><span className="footer-contact-icon"><PinIcon /></span><span>{firmContact.address.map((line) => <span className="footer-address-line" key={line}>{line}</span>)}</span></p>
        <p className="footer-contact-line"><span className="footer-contact-icon"><PhoneIcon /></span><a href={`tel:${firmContact.phone.replace(/\s/g, '')}`}>{firmContact.phone}</a></p>
        <p className="footer-contact-line"><span className="footer-contact-icon"><MailIcon /></span><a href={`mailto:${firmContact.email}`}>{firmContact.email}</a></p>
      </div>
      <div className="footer-bottom"><span>© 2026 R. Mackay Advocates.</span></div>
    </footer>
  );
}
