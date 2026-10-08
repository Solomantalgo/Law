import { useEffect, useRef } from 'react';
import { image } from '../data/siteData';

export default function GalleryLightbox({ item, index, count, onClose, onPrevious, onNext, returnFocusRef }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        onNext();
      } else if (event.key === 'Tab') {
        const controls = [...(dialogRef.current?.querySelectorAll('button:not(:disabled)') || [])];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [onClose, onNext, onPrevious, returnFocusRef]);

  return (
    <div className="gallery-lightbox-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" ref={dialogRef}>
        <div className="gallery-lightbox-topline">
          <span className="gallery-lightbox-count" aria-live="polite">{String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
          <button className="gallery-lightbox-close" type="button" onClick={onClose} ref={closeRef} aria-label="Close image viewer">×</button>
        </div>
        <button className="gallery-lightbox-control gallery-lightbox-previous" type="button" onClick={onPrevious} aria-label="Previous photograph">‹</button>
        <figure className="gallery-lightbox-figure">
          <img src={image(item.image)} width={item.width} height={item.height} alt={item.alt} decoding="async" />
          {item.caption && <figcaption>{item.caption}</figcaption>}
        </figure>
        <button className="gallery-lightbox-control gallery-lightbox-next" type="button" onClick={onNext} aria-label="Next photograph">›</button>
        <p className="visually-hidden">Use the left and right arrow keys to browse photographs. Press Escape to close.</p>
      </section>
    </div>
  );
}
