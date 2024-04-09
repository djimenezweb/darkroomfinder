import { config, geocoding } from '@maptiler/client';
// import type { Geometry } from 'geojson'

if (typeof process.env.NEXT_PUBLIC_MAPTILER_API_KEY === 'undefined') {
  throw new Error(
    'Environment variable NEXT_PUBLIC_MAPTILER_API_KEY is undefined'
  );
}

config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

export async function geocodeAddress(formData: FormData) {
  // Save full address in a single string
  const fullAdress = `${formData.get('address')} ${formData.get(
    'city'
  )} ${formData.get('zipcode')} ${formData.get('state')} ${formData.get(
    'country'
  )}`;

  try {
    // Get result from geocoding client
    const geocodingResult = await geocoding.forward(fullAdress);
    if (!geocodingResult.features[0].center) {
      return [0, 0];
    }
    const [longitude, latitude] = geocodingResult.features[0].center;
    return [longitude, latitude];
  } catch (error) {
    // console.error(error);
    // If error, return coordinates [0, 0]
    return [0, 0];
  }
}
