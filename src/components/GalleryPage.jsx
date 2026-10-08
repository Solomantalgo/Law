import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import GalleryImageGrid from './GalleryImageGrid';
import { galleryImages } from '../data/siteData';

export default function GalleryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Our Gallery | R. Mackay Advocates';
    return () => { document.title = 'R. Mackay Advocates | Kampala, Uganda'; };
  }, []);

  return (
    <div className="gallery-page">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section className="gallery-page-hero">
          <div className="gallery-page-intro reveal-up">
            <p className="eyebrow dark">OUR GALLERY</p>
            <h1>A closer look at our firm.</h1>
            <p>Moments from the people and professional life of R. Mackay Advocates.</p>
          </div>
        </section>
        <section className="gallery-page-content" aria-label="Photographs from R. Mackay Advocates">
          <GalleryImageGrid items={galleryImages} variant="page" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
