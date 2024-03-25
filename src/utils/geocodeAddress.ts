import { config, geocoding } from '@maptiler/client';

config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

export async function geocodeAddress(formData: FormData) {
  // Save full address in a single string
  const fullAdress = `${formData.get('address')} ${formData.get(
    'city'
  )} ${formData.get('zipcode')} ${formData.get('state')} ${formData.get(
    'country'
  )}`;

  // Get result from geocoding client
  const geocodingResult = await geocoding.forward(fullAdress);

  // Return coordinates from result
  const [longitude, latitude] =
    geocodingResult.features[0].geometry.coordinates;
  console.log(longitude, latitude);

  return [longitude, latitude];
}
