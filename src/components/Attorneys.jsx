import { Arrow } from './Shared';
import { attorneys } from '../data/siteData';
import AttorneyPortrait from './AttorneyPortrait';

const leadership = attorneys.filter((attorney) => attorney.leadershipGroup === 'Managing Partners');
const otherPartners = attorneys.filter((attorney) => !attorney.leadershipGroup && attorney.role === 'Partner');
const otherAttorneys = attorneys.filter((attorney) => !attorney.leadershipGroup && attorney.role !== 'Partner');

export default function Attorneys({ onSelectAttorney, preview = false }) {
  const groups = [
    { title: 'Managing Partners', members: leadership },
    ...(!preview ? [
      { title: 'Other Partners', members: otherPartners },
      { title: 'Other Attorneys', members: otherAttorneys },
    ] : []),
  ].filter((group) => group.members.length);

  return (
    <section className="section attorneys-section" id="attorneys">
      <div className="section-heading reveal-up">
        <div>
          <p className="eyebrow dark">ATTORNEY DIRECTORY</p>
          <h2>Our People</h2>
        </div>
        <p className="heading-note">Profiles for the firm’s legal team.</p>
      </div>

      {groups.map((group) => (
        <div className={`attorney-groups attorney-group-${group.title === 'Managing Partners' ? 'leadership' : 'others'}`} key={group.title}>
          <h3 className="attorney-group-title reveal-up">{group.title}</h3>
          <div className={`attorney-grid attorney-grid-count-${group.members.length} reveal-stagger`}>
            {group.members.map((attorney) => (
              <article
                className={`attorney-card reveal-item ${attorney.featured ? 'featured-attorney' : ''} ${attorney.leadershipGroup ? 'leadership-attorney' : ''} ${!attorney.image ? 'attorney-card-placeholder' : ''}`}
                key={attorney.slug}
              >
                <a
                  href={`/people/${attorney.slug}`}
                  className="attorney-photo"
                  onClick={(event) => {
                    event.preventDefault();
                    onSelectAttorney?.(attorney.slug);
                  }}
                  aria-label={`View ${attorney.name}'s profile`}
                >
                  <AttorneyPortrait attorney={attorney} variant="card" />
                  <span aria-hidden="true"><Arrow /></span>
                </a>
                <div className="attorney-info">
                  <h3>{attorney.name}</h3>
                  <p className="attorney-role">{attorney.role}</p>
                  <a
                    href={`/people/${attorney.slug}`}
                    className="view-profile-link"
                    onClick={(event) => {
                      event.preventDefault();
                      onSelectAttorney?.(attorney.slug);
                    }}
                  >
                    View Profile
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
      {preview && <div className="attorneys-directory-link reveal-up"><a href="/people">Meet Our People</a></div>}
    </section>
  );
}
