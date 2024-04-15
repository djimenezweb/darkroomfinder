const regex = /(?:https?:\/\/)?(?:www\.)?(.*)(\/)/i;

export function formatURL(url: string) {
  const match = url.match(regex);
  if (match) return match[1];
  return url;
}
