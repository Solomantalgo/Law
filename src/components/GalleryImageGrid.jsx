import { useCallback, useRef, useState } from 'react';
import { image } from '../data/siteData';
import GalleryLightbox from './GalleryLightbox';

export default function GalleryImageGrid({ items, variant = 'page' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const openerRef = useRef(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => setActiveIndex((current) => (current + items.length - 1) % items.length), [items.length]);
  const next = useCallback(() => setActiveIndex((current) => (current + 1) % items.length), [items.length]);

  return (
    <>
      <div className={`gallery-grid gallery-grid--${variant} reveal-stagger`}>
        {items.map((item, index) => (
          <button
            className={`gallery-tile gallery-tile--${item.orientation}${variant === 'preview' && index === 0 ? ' gallery-tile--featured' : ''} reveal-item`}
            key={item.id}
            type="button"
            aria-label={`Open photograph ${index + 1}: ${item.alt}`}
            aria-haspopup="dialog"
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
          >
            <img
              src={image(item.image)}
              width={item.width}
              height={item.height}
              alt={item.alt}
              loading={variant === 'page' && index < 3 ? 'eager' : 'lazy'}
              fetchPriority={variant === 'page' && index === 0 ? 'high' : 'auto'}
              decoding="async"
            />
            <span className="gallery-tile-open" aria-hidden="true">View photograph <span>↗</span></span>
          </button>
        ))}
      </div>
      {activeIndex !== null && items[activeIndex] && (
        <GalleryLightbox
          item={items[activeIndex]}
          index={activeIndex}
          count={items.length}
          onClose={close}
          onPrevious={previous}
          onNext={next}
          returnFocusRef={openerRef}
        />
      )}
    </>
  );
}
