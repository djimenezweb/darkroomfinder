import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Introduce a name' }),
  description: z.string().optional(),
  address: z.string().min(1, { message: 'Introduce an address' }),
  city: z.string().min(1, { message: 'Introduce a city' }),
  state: z
    .string()
    .min(1, { message: 'Introduce a state, province or region' }),
  zipcode: z.string().min(1, { message: 'Introduce a postal code' }),
  country: z.string().min(1, { message: 'Introduce a country' }),
  sizes: z.string().array().nonempty({ message: 'Select at least one size' }),
  processes: z
    .string()
    .array()
    .nonempty({ message: 'Select at least one process' }),
  images: z
    .any()
    .array()
    .refine(files => files[0].size > 0, {
      message: 'Upload at least one picture'
    })
});

export function validateForm(formData: FormData) {
  const fieldsToValidate = {
    name: formData.get('name'),
    description: formData.get('description'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    zipcode: formData.get('zipcode'),
    country: formData.get('country'),
    sizes: formData.getAll('sizes'),
    processes: formData.getAll('processes'),
    images: formData.getAll('images')
  };

  return schema.safeParse(fieldsToValidate);
}
