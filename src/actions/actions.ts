'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Introduce a name' }),
  description: z.string().optional(),
  address: z.string().min(1, { message: 'Introduce an address' }),
  city: z.string().min(1, { message: 'Introduce a city' }),
  state: z
    .string()
    .min(1, { message: 'Introduce a state, province or region' }),
  zip: z.string().min(1, { message: 'Introduce a postal code' }),
  country: z.string().min(1, { message: 'Introduce a country' }),
  sizes: z.string().array().nonempty({ message: 'Select at least one size' }),
  processes: z
    .string()
    .array()
    .nonempty({ message: 'Select at least one process' })
});

export async function addDarkroom(prevState: any, formData: FormData) {
  const files = formData.getAll('uploadedPictures');
  console.log('files', files);
  // console.log('- - - - - - formData: ', formData);
  // console.log('- - - - - - sizes: ', formData.getAll('sizes'));
  // console.log('- - - - - - processes: ', formData.getAll('processes'));
  // console.log('- - - - - - images: ', formData.getAll('images'));
  // console.log('- - - - - - pictures: ', formData.getAll('pictures'));
  const newLab = {
    name: formData.get('name'),
    description: formData.get('description'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    zip: formData.get('zip'),
    country: formData.get('country'),
    sizes: formData.getAll('sizes'),
    processes: formData.getAll('processes')
  };

  const validatedForm = schema.safeParse(newLab);

  if (!validatedForm.success) {
    return { ...validatedForm.error.flatten().fieldErrors };
  }
}
