import { Arrow } from './Shared';
import { aboutPageContent, image } from '../data/siteData';

export default function About() {
  const { provisionalCopy } = aboutPageContent;
  return (
    <section className="section about-section" id="about">
      <div className="about-media reveal reveal-left">
        <img src={image('about-team.jpeg')} alt="The R. Mackay Advocates team standing together" loading="lazy" decoding="async" />
        <span className="image-caption">R. MACKAY ADVOCATES / KAMPALA</span>
      </div>
      <div className="about-copy-block">
        <p className="eyebrow dark reveal-item">ABOUT THE FIRM</p>
        <h2 className="reveal-stagger">
          {provisionalCopy.heroHeading.map((line, index) => (
            <span className="reveal-line reveal-item" key={line}>{index === 1 ? <em>{line}</em> : line}</span>
          ))}
        </h2>
        <p className="reveal-item">{provisionalCopy.heroIntro}</p>
        <a className="line-link reveal-item" href="/about">Discover Our Firm <Arrow /></a>
      </div>
    </section>
  );
}
