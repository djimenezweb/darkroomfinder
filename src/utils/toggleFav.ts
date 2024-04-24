'use server';

import { User } from '@/models/User';
import dbConnect from './dbConnect';
import { artificialDelay } from './artificialDelay';

export async function toggleFav(
  labId: string,
  email: string | null | undefined
) {
  if (!email) return;
  try {
    await artificialDelay(300);
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) return;
    const isFav = user.bookmarks.some(value => value.toString() === labId);

    if (isFav) {
      user.bookmarks.pull(labId);
    } else {
      user.bookmarks.push(labId);
    }

    await user.save();
    return !isFav;
  } catch (error) {
    console.error('🔺 ~ toggleFav.ts ~ 🔺', error);
    throw new Error('Failed to save favorite into database');
  }
}
