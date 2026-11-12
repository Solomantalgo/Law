export const SITE_ORIGIN = 'https://rmackayadvocates.com';

export function canonicalUrl(pathname = '/') {
  const path = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}`;
  return `${SITE_ORIGIN}${path}`;
}

export function setCanonicalUrl(pathname = window.location.pathname) {
  const url = canonicalUrl(pathname);
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
  }
  canonical.href = url;

  let openGraphUrl = document.head.querySelector('meta[property="og:url"]');
  if (!openGraphUrl) {
    openGraphUrl = document.createElement('meta');
    openGraphUrl.setAttribute('property', 'og:url');
    document.head.append(openGraphUrl);
  }
  openGraphUrl.content = url;
}
