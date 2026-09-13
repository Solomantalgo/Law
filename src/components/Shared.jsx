export function Arrow({ className = '' }) { return <span className={`arrow ${className}`} aria-hidden="true">↗</span>; }
export function MenuIcon({ open }) { return <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>; }
