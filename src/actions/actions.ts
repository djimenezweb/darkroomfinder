'use server';

import dbConnect from '@/lib/dbConnect';
import { Lab } from '@/models/Lab';
import { z } from 'zod';
import { uploadToCloudinary } from '@/lib/uploadToCloudinary';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { User } from '@/models/User';

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

export async function addDarkroom(prevState: any, formData: FormData) {
  // Get all images as an array of filies
  const images = formData.getAll('images') as File[];

  // Create an objet to be validated
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

  // Validate form fields with Zod
  const validatedForm = schema.safeParse(fieldsToValidate);

  // If validation fails, send errors
  // If validation is successful, send data to Cloudinary and MongoDB
  if (!validatedForm.success) {
    return { ...validatedForm.error.flatten().fieldErrors };
  } else {
    try {
      // Get userId from session
      const session = await getServerSession(authOptions);
      const user = await User.findOne({ email: session?.user.email });
      const userId = user._id.toString();
      //const userId = session?.id
      // Upload images to Cloudinary and get URLs
      const imagesURL = await uploadToCloudinary(images);
      console.log(imagesURL);
      //Connect to MongoDB
      await dbConnect();
      // Send data to MongoDB
      const result = await Lab.create({
        owner: userId,
        name: formData.get('name'),
        description: formData.get('description'),
        location: {
          address: formData.get('address'),
          city: formData.get('city'),
          state: formData.get('state'),
          zipcode: formData.get('zipcode'),
          country: formData.get('country')
        },
        sizes: formData.getAll('sizes'),
        processes: formData.getAll('processes'),
        images: imagesURL
      });
      console.log(result);
      // Redirect user to newly created result
    } catch (error) {
      console.log(error);
    }
  }
}
