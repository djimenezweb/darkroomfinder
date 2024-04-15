// Función para obtener public_id de una url de Cloudinary

const regex: RegExp = /(?:.*)\/df\/(.*)\.(?:.*)/i;

export function getPublicId(url: string) {
  const match = url.match(regex);
  if (match) return 'df/' + match[1];
  return null;
}
