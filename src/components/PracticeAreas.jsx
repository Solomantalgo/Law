import { Arrow } from './Shared';
import { practiceAreas } from '../data/siteData';

export default function PracticeAreas({ fullPage = false }) {
  return (
    <section className={`section practice-section ${fullPage ? 'practice-directory-section' : ''}`} id="practice">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow dark">OUR EXPERTISE</p>
          <h2>Legal expertise for<br /><em>complex decisions.</em></h2>
        </div>
        <p className="heading-note">Focused advice for the matters<br />that move people and business forward.</p>
      </div>
      <div className="practice-list reveal-stagger">
        {practiceAreas.map((area) => (
          <a className="practice-row reveal-item" href={`/practice-areas/${area.slug}`} key={area.slug}>
            <span className="practice-number">{area.number}</span>
            <span className="practice-title">{area.title}</span>
            <span className="practice-description">{area.summary}</span>
            <Arrow />
          </a>
        ))}
      </div>
      {fullPage && (
        <aside className="practice-directory-cta reveal-up" id="practice-directory-cta">
          <div>
            <h3>Not sure which area applies to your matter?</h3>
            <p><span className="practice-title-desktop">Speak with our team and we’ll help you identify the appropriate legal support.</span><span className="practice-title-mobile"><span>Speak with our team and we’ll help</span><span>you identify the appropriate legal support.</span></span></p>
          </div>
          <a href="/contact#consultation">Discuss your matter</a>
        </aside>
      )}
    </section>
  );
}
