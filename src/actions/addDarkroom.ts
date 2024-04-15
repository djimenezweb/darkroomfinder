'use server';

import { Lab } from '@/models/Lab';
import { User } from '@/models/User';
import { authOptions } from '@/utils/authOptions';
import dbConnect from '@/utils/dbConnect';
import { geocodeAddress } from '@/utils/geocodeAddress';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import { validateForm } from '@/utils/validateForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function addDarkroom(prevState: any, formData: FormData) {
  let documentId;
  const session = await getServerSession(authOptions);
  if (!session?.user.email) return;

  // Validate form
  // If validation fails, send errors
  // If validation is successful, send data to Cloudinary and MongoDB
  const validatedForm = validateForm(formData);
  if (!validatedForm.success) {
    return { ...validatedForm.error.flatten().fieldErrors };
  } else {
    try {
      // Connect to MongoDB and get userId
      await dbConnect();
      const user = await User.findOne({ email: session.user.email });
      if (!user) return;
      const userId = user._id.toString();

      // Get all images as an array of files
      const images = formData.getAll('images') as File[];
      // Upload images to Cloudinary and get URLs
      const imagesURL = await uploadToCloudinary(images, userId);

      // Geocode address
      const [longitude, latitude] = await geocodeAddress(formData);

      // Send data to MongoDB
      const result = await Lab.create({
        owner: userId,
        name: formData.get('name'),
        description: formData.get('description'),
        link: formData.get('link'),
        location: {
          address: formData.get('address'),
          postalcode: formData.get('postalcode'),
          city: formData.get('city'),
          country: formData.get('country'),
          latitude,
          longitude
        },
        sizes: formData.getAll('sizes'),
        processes: formData.getAll('processes'),
        images: imagesURL
      });
      documentId = result._id.toString();
    } catch (error) {
      console.error('🔺 ~ addDarkroom.ts ~ 🔺', error);
      throw new Error('An error ocurred while trying to add a new darkroom');
    }
    redirect('/lab/' + documentId);
  }
}
