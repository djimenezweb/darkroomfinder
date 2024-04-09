'use server';

import dbConnect from '@/utils/dbConnect';
import { Lab } from '@/models/Lab';
import { uploadToCloudinary } from '@/utils/uploadToCloudinary';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { User } from '@/models/User';
import { validateEditForm } from '@/utils/validateForm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { deleteFromCloudinary } from '@/utils/deleteFromCloudinary';

export async function editDarkroom(
  documentId: string,
  prevState: any,
  formData: FormData
) {
  const session = await getServerSession(authOptions);
  if (!session?.user.email) return;

  // Validate form
  // If validation fails, send errors
  // If validation is successful, send data to Cloudinary and MongoDB
  const validatedForm = validateEditForm(formData);
  if (!validatedForm.success) {
    return { ...validatedForm.error.flatten().fieldErrors };
  } else {
    try {
      // Connect to MongoDB and get userId
      await dbConnect();
      const user = await User.findOne({ email: session.user.email });
      if (!user) return;
      const userId = user._id.toString();

      const toBeDeletedImages = formData.getAll(
        'toBeDeletedImages'
      ) as string[];
      const destroyResult = await deleteFromCloudinary(toBeDeletedImages);

      // Get all images as an array of files
      const images = formData.getAll('images') as File[];
      // Upload images to Cloudinary and get URLs
      const imagesURL = await uploadToCloudinary(images, userId);
      const savedImages = formData.getAll('savedImages');

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
        images: [...savedImages, ...imagesURL]
      });
    } catch (error) {
      console.error('🔺 ~ editaddDarkroom.ts ~ 🔺', error);
      throw new Error('An error ocurred while trying to edit the darkroom');
    }

    // Revalidate and redirect user
    revalidatePath('/lab/' + documentId);
    redirect('/lab/' + documentId);
  }
}
