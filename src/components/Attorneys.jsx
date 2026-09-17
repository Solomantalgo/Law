import { useState } from 'react';
import { Arrow } from './Shared';
import { attorneys, image } from '../data/siteData';

export default function Attorneys() {
  const [toast, setToast] = useState(null);

  const handleViewProfile = (name) => {
    setToast(`Full profile for ${name} — coming soon in the live site.`);
    window.clearTimeout(handleViewProfile._t);
    handleViewProfile._t = window.setTimeout(() => setToast(null), 3200);
  };

  return (
    <section className="section attorneys-section" id="attorneys">
      <div className="section-heading reveal">
        <div><p className="eyebrow dark">OUR PEOPLE</p><h2>Experience<br /><em>you can trust.</em></h2></div>
        <p className="heading-note">Meet the people behind our considered,<br />client-focused approach.</p>
      </div>
      <div className="attorney-grid">
        {attorneys.map(([name, role, photo]) => (
          <article className="attorney-card reveal" key={name}>
            <div className="attorney-photo"><img src={image(photo)} alt={`${name}, ${role}`} /><span><Arrow /></span></div>
            <h3>{name}</h3>
            <p>{role}</p>
            <button type="button" className="view-profile-link" onClick={() => handleViewProfile(name)}>View Profile <Arrow /></button>
          </article>
        ))}
      </div>
      <div className={`demo-toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">{toast}</div>
    </section>
  );
}
