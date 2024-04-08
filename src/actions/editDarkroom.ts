'use server';

import dbConnect from '@/utils/dbConnect';
import { Lab } from '@/models/Lab';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { User } from '@/models/User';
import { validateEditForm } from '@/utils/validateForm';
import { geocodeAddress } from '@/utils/geocodeAddress';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function editDarkroom(
  documentId: string,
  prevState: any,
  formData: FormData
) {
  // Validate form fields with Zod
  const validatedForm = validateEditForm(formData);

  // If validation fails, send errors
  // If validation is successful, send data to Cloudinary and MongoDB
  if (!validatedForm.success) {
    return { ...validatedForm.error.flatten().fieldErrors };
  } else {
    try {
      // Connect to MongoDB
      await dbConnect();

      // Get all images as an array of files
      const images = formData.getAll('images') as File[];
      // Upload images to Cloudinary and get URLs
      const imagesURL = await uploadToCloudinary(images);

      // Send data to MongoDB
      const result = await Lab.findByIdAndUpdate(documentId, {
        name: formData.get('name'),
        description: formData.get('description'),
        location: {
          address: formData.get('address'),
          city: formData.get('city'),
          state: formData.get('state'),
          zipcode: formData.get('zipcode'),
          country: formData.get('country'),
          latitude: formData.get('latitude'),
          longitude: formData.get('longitude')
        },
        sizes: formData.getAll('sizes'),
        processes: formData.getAll('processes'),
        images: imagesURL
      });
      //console.log('Darkroom added to db:', result);
    } catch (error) {
      console.log(error);
      throw new Error('An error ocurred while trying to edit the darkroom');
    }

    // Revalidate and redirect user
    revalidatePath('/lab/' + documentId);
    redirect('/lab/' + documentId);
  }
}
