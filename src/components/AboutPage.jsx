import Header from './Header';
import Footer from './Footer';
import AttorneyPortrait from './AttorneyPortrait';
import ConsultationCTA from './ConsultationCTA';
import { Arrow } from './Shared';
import { aboutPageContent, attorneys, image } from '../data/siteData';

export default function AboutPage({ menuOpen, setMenuOpen }) {
  const { confirmedFacts, provisionalCopy } = aboutPageContent;
  const leaders = confirmedFacts.leadershipSlugs
    .map((slug) => attorneys.find((attorney) => attorney.slug === slug))
    .filter(Boolean);

  return (
    <div className="about-page">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section className="about-page-hero">
          <div className="about-page-hero-media">
            <img src={image('about-team.jpeg')} alt="The R. Mackay Advocates team" fetchPriority="high" decoding="async" />
            <span className="image-caption">{confirmedFacts.firmName.toUpperCase()} / {confirmedFacts.location.toUpperCase()}</span>
          </div>
          <div className="about-page-hero-copy">
            <p className="eyebrow dark reveal-item">ABOUT THE FIRM</p>
            <h1 className="reveal-stagger">
            {provisionalCopy.heroHeading.map((line, index) => (
              <span className="reveal-line reveal-item" key={line}>{index === 1 ? <em>{line}</em> : line}</span>
            ))}
          </h1>
            <p className="about-page-lead reveal-item">{provisionalCopy.heroIntro}</p>
          </div>
        </section>

        <section className="about-page-who" id="who-we-are">
          <div className="about-page-section-heading">
            <p className="eyebrow dark">WHO WE ARE</p>
            <h2>A Kampala-based law firm.</h2>
          </div>
          <div className="about-page-who-copy">
            <p>{confirmedFacts.conciseIntroduction}</p>
            <p className="about-page-fact">{confirmedFacts.firmName}<span>{confirmedFacts.location}</span></p>
          </div>
        </section>

        <section className="about-page-approach" id="our-approach">
          <div className="about-page-content">
            <p className="eyebrow dark">OUR APPROACH</p>
            <h2>Thoughtful counsel, with the wider context in view.</h2>
            <div className="about-approach-list">
              {provisionalCopy.approach.map((item, index) => (
                <article className="about-approach-item" key={item.title}>
                  <span className="about-approach-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-leadership" id="leadership">
          <div className="about-page-content">
            <div className="about-page-leadership-heading">
              <div><p className="eyebrow dark">LEADERSHIP</p><h2>Managing Partners</h2></div>
              <p>Meet the firm's leadership.</p>
            </div>
            <div className="about-leaders-grid">
              {leaders.map((attorney, index) => (
                <a className={`about-leader-card${index === 0 ? ' about-leader-card--lead' : ''}`} href={`/people/${attorney.slug}`} key={attorney.slug}>
                  <AttorneyPortrait attorney={attorney} variant="card" />
                  <span className="about-leader-details">
                    <span className="about-leader-role">{attorney.role}</span>
                    <strong>{attorney.name}</strong>
                    <span className="about-leader-link">View Profile <Arrow /></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-people" id="our-people">
          <div className="about-page-people-copy">
            <p className="eyebrow dark">OUR PEOPLE</p>
            <h2>A wider legal team.</h2>
            <p>{provisionalCopy.peopleIntro}</p>
          </div>
          <a className="line-link" href="/people">Meet Our People <Arrow /></a>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
