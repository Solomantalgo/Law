import { galleryImages } from '../data/siteData';
import GalleryImageGrid from './GalleryImageGrid';

export default function GalleryPreview() {
  const featured = galleryImages.filter((item) => item.homepageFeatured).slice(0, 5);
  return (
    <section className="section gallery-preview" aria-labelledby="gallery-preview-title">
      <div className="gallery-preview-heading reveal-up">
        <div>
          <p className="eyebrow dark">OUR GALLERY</p>
          <h2 id="gallery-preview-title">Inside R. Mackay Advocates</h2>
        </div>
        <p>A glimpse into the people and moments behind our practice.</p>
      </div>
      <GalleryImageGrid items={featured} variant="preview" />
      <a className="line-link gallery-preview-link reveal-up" href="/gallery">Explore Our Gallery</a>
    </section>
  );
}
