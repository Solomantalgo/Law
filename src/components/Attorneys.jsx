import { Arrow } from './Shared';
import { attorneys, image } from '../data/siteData';

export default function Attorneys({ onSelectAttorney }) {
  const handleProfileClick = (e, attorneyId) => {
    e.preventDefault();
    if (onSelectAttorney) {
      onSelectAttorney(attorneyId);
    } else {
      window.location.hash = `#attorneys/${attorneyId}`;
    }
  };

  return (
    <section className="section attorneys-section" id="attorneys">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow dark">OUR PEOPLE</p>
          <h2>Experience<br /><em>you can trust.</em></h2>
        </div>
        <p className="heading-note">Meet the advocate and legal team behind our<br />considered, client-focused practice.</p>
      </div>

      <div className="attorney-grid">
        {attorneys.map((attorney) => {
          const isFeatured = attorney.isFeatured;
          const profileHref = `#attorneys/${attorney.id}`;

          return (
            <article
              className={`attorney-card reveal ${isFeatured ? 'featured-attorney' : ''}`}
              key={attorney.id}
            >
              {isFeatured && (
                <div className="featured-badge">
                  <span>{attorney.highlightTag || 'MANAGING PARTNER'}</span>
                </div>
              )}
              <a
                href={profileHref}
                className="attorney-photo"
                onClick={(e) => handleProfileClick(e, attorney.id)}
              >
                <img src={image(attorney.photo)} alt={`${attorney.name}, ${attorney.role}`} />
                <span><Arrow /></span>
              </a>
              <div className="attorney-info">
                <h3>{attorney.name}</h3>
                <p className="attorney-role">{attorney.role}</p>
                {attorney.qualifications && (
                  <p className="attorney-qualifications">{attorney.qualifications}</p>
                )}
                {attorney.summary && (
                  <p className="attorney-summary-snippet">{attorney.summary}</p>
                )}
                <a
                  href={profileHref}
                  className={`view-profile-link ${isFeatured ? 'highlighted-btn' : ''}`}
                  onClick={(e) => handleProfileClick(e, attorney.id)}
                >
                  View Full Profile <Arrow />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
