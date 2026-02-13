/**
 * Build base-path-safe static asset URLs for deployed previews.
 * In production builds hosted under subpaths, this ensures assets load correctly.
 */
export function assetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, Vite serves from root
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base URL from Vite config
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
