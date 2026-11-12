import { useEffect } from 'react';
import { firmContact } from '../data/siteData';

export default function ConnectPage() {
  useEffect(() => {
    document.title = 'Connect | R. Mackay Advocates';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Contact R. Mackay Advocates in Kampala by phone, email or directions to the office.');
  }, []);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firmContact.address.join(', '))}`;

  return <main className="connect-page">
    <section className="connect-card" aria-label="R. Mackay Advocates contact details">
      <header className="connect-brand">
        <img src="/assets/images/rmackay-logo-mark.png" alt="" />
        <p className="connect-wordmark">R. MACKAY <span>ADVOCATES</span></p>
        <p className="connect-tagline">Helping Clients. Seeking Justice.</p>
      </header>

      <div className="connect-partners" aria-label="Partners">
        <div><strong>Robert Mackay</strong><span>Founding Partner</span></div>
        <div><strong>Richard Rugambwa</strong><span>Managing Partner</span></div>
      </div>

      <nav className="connect-actions" aria-label="Contact options">
        <a className="connect-action connect-action-call" href={`tel:${firmContact.phone.replace(/\s/g, '')}`}>
          <span className="connect-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
          <span className="connect-action-copy"><strong>Call the office</strong><small>{firmContact.phone}</small></span>
          <span className="connect-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="connect-action" href={`mailto:${firmContact.email}`}>
          <span className="connect-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></svg></span>
          <span className="connect-action-copy"><strong>Email the firm</strong><small>{firmContact.email}</small></span>
          <span className="connect-arrow" aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="connect-secondary-actions">
        <a href={mapsUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span> Directions</a>
        <a href="/assets/r-mackay-advocates.vcf" download><span aria-hidden="true">↓</span> Save contact</a>
      </div>

      <address className="connect-address">
        <span>3rd Flr Suite 310, BMK House</span>
        <span>Plot 4-5 Nyabong Rd, Wampewo Avenue</span>
        <span>Kampala, Uganda</span>
      </address>
      <a className="connect-home-link" href="/">Visit the main site <span aria-hidden="true">↗</span></a>
    </section>
  </main>;
}
