const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function assetPath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!basePath || normalized === basePath || normalized.startsWith(`${basePath}/`)) return normalized;
  return `${basePath}${normalized}`;
}
