import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Arrow } from './Shared';
import { attorneys, image } from '../data/siteData';

export default function AttorneyProfilePage({ attorneyId, onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const attorney = attorneys.find((a) => a.id === attorneyId) || attorneys[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveTab('overview');
  }, [attorneyId]);

  const handleContactChambers = () => {
    onBack();
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="attorney-profile-page">
      <Header menuOpen={false} setMenuOpen={() => {}} />

      {/* Profile Page Hero / Banner */}
      <section className="profile-hero">
        <div className="profile-hero-inner">
          <a href="#attorneys" onClick={(e) => { e.preventDefault(); onBack(); }} className="back-link">
            &larr; Back to Our People
          </a>

          <div className="profile-hero-content">
            <div className="profile-hero-photo">
              <img src={image(attorney.photo)} alt={`${attorney.name}, ${attorney.role}`} />
            </div>
            <div className="profile-hero-details">
              <p className="eyebrow dark" style={{ color: '#8fc5e4' }}>ATTORNEY PROFILE</p>
              <h1>{attorney.name}</h1>
              <p className="profile-title">{attorney.title}</p>
              {attorney.qualifications && (
                <div className="profile-qualifications-badge">
                  {attorney.qualifications}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section Navigation Tabs */}
      <nav className="profile-nav-tabs-bar" aria-label="Profile Sections Navigation">
        <div className="profile-nav-tabs-inner">
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === 'overview' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview &amp; Biography
          </button>
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === 'experience' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Areas of Experience
          </button>
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === 'memberships' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('memberships')}
          >
            Education &amp; Memberships
          </button>
          <button
            type="button"
            className={`profile-tab-btn ${activeTab === 'full' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('full')}
          >
            Full Profile View
          </button>
        </div>
      </nav>

      {/* Main Profile Body */}
      <main className="profile-main-content">
        <div className="profile-container">
          <div className="profile-grid">
            {/* Main Content Column */}
            <div className="profile-body-column">
              {/* TAB 1: OVERVIEW & BIOGRAPHY */}
              {(activeTab === 'overview' || activeTab === 'full') && (
                <>
                  {attorney.sections?.overview && (
                    <section className="profile-section">
                      <h2>Biography &amp; Overview</h2>
                      {attorney.sections.overview.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  )}

                  {attorney.sections?.legalEducation && (
                    <section className="profile-section">
                      <h2>Legal Education &amp; Professional Leadership</h2>
                      {attorney.sections.legalEducation.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  )}
                </>
              )}

              {/* TAB 2: AREAS OF EXPERIENCE */}
              {(activeTab === 'experience' || activeTab === 'full') && (
                <>
                  {attorney.sections?.internationalCriminalLaw && (
                    <section className="profile-section">
                      <h2>International Criminal Law</h2>
                      {attorney.sections.internationalCriminalLaw.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  )}

                  {attorney.sections?.antiCorruption && (
                    <section className="profile-section">
                      <h2>Anti-Corruption &amp; Financial Crime</h2>
                      {attorney.sections.antiCorruption.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      <h3>Practice Focus Includes:</h3>
                      <ul className="styled-list grid-list">
                        {attorney.sections.antiCorruption.practiceItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {attorney.sections?.cybercrime && (
                    <section className="profile-section">
                      <h2>Cybercrime &amp; Complex Investigations</h2>
                      {attorney.sections.cybercrime.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  )}

                  {attorney.sections?.commercialAdvisory && (
                    <section className="profile-section">
                      <h2>Commercial &amp; Corporate Advisory</h2>
                      {attorney.sections.commercialAdvisory.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </section>
                  )}

                  {attorney.sections?.areasOfPractice && (
                    <section className="profile-section">
                      <h2>Areas of Practice</h2>
                      <ul className="styled-list grid-list practice-areas-grid">
                        {attorney.sections.areasOfPractice.map((area, i) => (
                          <li key={i}>{area}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </>
              )}

              {/* TAB 3: MEMBERSHIPS & EDUCATION */}
              {(activeTab === 'memberships' || activeTab === 'full') && (
                <>
                  {attorney.sections?.memberships && (
                    <section className="profile-section">
                      <h2>Professional Memberships &amp; Leadership</h2>
                      <p>{attorney.name} is a member of:</p>
                      <ul className="styled-list">
                        {attorney.sections.memberships.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <p className="committee-note">{attorney.sections.memberships.committees}</p>
                    </section>
                  )}

                  {attorney.sections?.education && (
                    <section className="profile-section">
                      <h2>Education &amp; Professional Training</h2>
                      <div className="degree-list">
                        {attorney.sections.education.degrees.map((deg, i) => (
                          <div className="degree-card" key={i}>
                            <strong>{deg.degree}</strong>
                            <span>{deg.institution}</span>
                          </div>
                        ))}
                      </div>
                      <p className="training-note">{attorney.sections.education.specialistTraining}</p>
                    </section>
                  )}
                </>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="profile-sidebar">
              <div className="sidebar-card chambers-card">
                <h3>Instructions &amp; Enquiries</h3>
                <p>Professional enquiries and instructions may be directed directly to chambers.</p>
                <button type="button" className="button header-cta" onClick={handleContactChambers}>
                  Book a Consultation <Arrow />
                </button>
              </div>

              <div className="sidebar-card info-card">
                <h4>Chambers Contact</h4>
                <p><strong>R. Mackay Advocates</strong></p>
                <p>Kampala, Uganda</p>
                <hr className="card-divider" />
                <a href="#attorneys" onClick={(e) => { e.preventDefault(); onBack(); }} className="back-button-link">
                  &larr; Return to All Attorneys
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
