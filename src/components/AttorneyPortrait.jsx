import { image } from '../data/siteData';

export default function AttorneyPortrait({ attorney, variant = 'card' }) {
  if (!attorney.image) {
    const initials = attorney.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('');
    return (
      <div className={`attorney-portrait attorney-portrait-${variant} attorney-portrait-placeholder`} role="img" aria-label={`${attorney.name}, ${attorney.role}. Portrait pending.`}>
        <span aria-hidden="true">{initials}</span>
        <small>PORTRAIT PENDING</small>
      </div>
    );
  }

  return (
    <div className={`attorney-portrait attorney-portrait-${variant}`}>
      <img
        src={image(attorney.image)}
        alt={attorney.imageAlt || `${attorney.name}, ${attorney.role}`}
        style={{ objectPosition: attorney.imagePosition || '50% 24%', '--portrait-scale': variant === 'profile' ? 1 : attorney.imageScale || 1 }}
        loading={variant === 'profile' ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
