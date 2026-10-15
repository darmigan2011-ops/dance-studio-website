const base = import.meta.env.BASE_URL;

export function img(path: string): string {
  return base + path.replace(/^\/+/, '');
}
