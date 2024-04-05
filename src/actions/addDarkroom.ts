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
      const imagesURL = await uploadToCloudinary(images);

      // Geocode address
      const [longitude, latitude] = await geocodeAddress(formData);

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
      console.log(result);
      documentId = result._id.toString();
    } catch (error) {
      console.log(error);
    }
    redirect('/lab/' + documentId);
  }
}
