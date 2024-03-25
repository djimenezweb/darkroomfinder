'use server';

import dbConnect from '@/utils/dbConnect';
import { Lab } from '@/models/Lab';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { User } from '@/models/User';
import { validateForm } from '@/utils/validateForm';
import { geocodeAddress } from '@/utils/geocodeAddress';

export async function addDarkroom(prevState: any, formData: FormData) {
  // Validate form fields with Zod
  const validatedForm = validateForm(formData);

  // If validation fails, send errors
  // If validation is successful, send data to Cloudinary and MongoDB
  if (!validatedForm.success) {
    return { ...validatedForm.error.flatten().fieldErrors };
  } else {
    try {
      // Geocode address
      const [longitude, latitude] = await geocodeAddress(formData);

      // Get session
      const session = await getServerSession(authOptions);

      // Connect to MongoDB and get userId
      await dbConnect();
      const user = await User.findOne({ email: session?.user.email });
      const userId = user._id.toString();

      // Get all images as an array of files
      const images = formData.getAll('images') as File[];
      // Upload images to Cloudinary and get URLs
      const imagesURL = await uploadToCloudinary(images);

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
          country: formData.get('country'),
          latitude,
          longitude
        },
        sizes: formData.getAll('sizes'),
        processes: formData.getAll('processes'),
        images: imagesURL
      });
      console.log('Darkroom added to db:', result);
      // Redirect user to newly created result
    } catch (error) {
      console.log(error);
    }
  }
}
