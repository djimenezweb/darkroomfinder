'use server';

import { Lab } from '@/models/Lab';
import { User } from '@/models/User';
import { authOptions } from '@/utils/authOptions';
import dbConnect from '@/utils/dbConnect';
import { deleteFromCloudinary } from '@/utils/deleteFromCloudinary';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function deleteDarkroom(
  documentId: string,
  email: string,
  images: string[]
) {
  const session = await getServerSession(authOptions);
  if (!session?.user.email) return;

  try {
    // Connect to MongoDB and get userId
    await dbConnect();
    const user = await User.findOne({ email: session.user.email });
    if (!user) return;

    if (user.email !== email) {
      throw new Error('Unauthorized');
    }

    const deletedImages = await deleteFromCloudinary(images);
    const deletedLab = await Lab.findByIdAndDelete(documentId);
  } catch (error) {
    console.error('🔺 ~ deleteDarkroom.ts ~ 🔺', error);
    throw new Error('An error ocurred while trying to delete the darkroom');
  }

  // Redirect user
  redirect('/labs');
}
