import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Introduce a name' }),
  //link: z.string().startsWith('http', {message: 'Must start with http:// or https://'}).url({message: 'Introduce a valid url'}).optional(),
  link: z.union([
    z.string().url({ message: 'Introduce a valid url' }).nullish(),
    z.literal('')
  ]),
  description: z.string().optional(),
  address: z.string().min(1, { message: 'Introduce an address' }),
  postalcode: z.string().min(1, { message: 'Introduce a postal code' }),
  city: z.string().min(1, { message: 'Introduce a city' }),
  country: z.string().min(1, { message: 'Introduce a country or state' }),
  sizes: z.string().array().nonempty({ message: 'Select at least one size' }),
  processes: z
    .string()
    .array()
    .nonempty({ message: 'Select at least one process' })
});

const schemaWithImages = schema.extend({
  images: z.any().array().nonempty({
    message: 'Upload at least one picture'
  })
});

const schemaWithGeoLocation = schema.extend({
  latitude: z.string(),
  longitude: z.string()
});

// Validate ADD NEW darkroom form
export function validateForm(formData: FormData) {
  const fieldsToValidate = {
    name: formData.get('name'),
    link: formData.get('link'),
    description: formData.get('description'),
    address: formData.get('address'),
    postalcode: formData.get('postalcode'),
    city: formData.get('city'),
    country: formData.get('country'),
    sizes: formData.getAll('sizes'),
    processes: formData.getAll('processes'),
    images: formData.getAll('images')
  };

  return schemaWithImages.safeParse(fieldsToValidate);
}

// Validate EDIT darkroom form
export function validateEditForm(formData: FormData) {
  const fieldsToValidate = {
    name: formData.get('name'),
    link: formData.get('link'),
    description: formData.get('description'),
    address: formData.get('address'),
    postalcode: formData.get('postalcode'),
    city: formData.get('city'),
    country: formData.get('country'),
    latitude: formData.get('latitude'),
    longitude: formData.get('longitude'),
    sizes: formData.getAll('sizes'),
    processes: formData.getAll('processes')
  };

  return schemaWithGeoLocation.safeParse(fieldsToValidate);
}
