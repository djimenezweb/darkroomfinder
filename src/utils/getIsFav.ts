'use server';

import { User } from '@/models/User';
import dbConnect from './dbConnect';

export async function getIsFav(
  labId: string,
  email: string | null | undefined
) {
  if (!email) return false;
  try {
    await dbConnect();
    const user = await User.findOne({ email }).lean();
    if (!user) return false;
    const isFav = user.bookmarks.some(value => value.toString() === labId);
    return isFav;
  } catch (error) {
    console.error('🔺 ~ getIsFav.ts ~ will return false ~ 🔺', error);
    return false;
  }
}
