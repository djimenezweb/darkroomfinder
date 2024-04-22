const regex = /https?:\/\/(?:www\.)?(.*)/i;

export function formatURL(url: string) {
  const trimmedUrl = url.replace(/\/$/, '');
  const match = trimmedUrl.match(regex);
  if (match) return match[1];
  return trimmedUrl;
}
