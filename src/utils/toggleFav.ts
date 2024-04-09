'use server';

import { User } from '@/models/User';
import dbConnect from './dbConnect';
//import { Types } from 'mongoose';

// Según Traversy esto puede funcionar en local pero da fallos en Vercel
// Si da fallos se corrige con export const dynamic = 'force-dynamic'

const artificialDelay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function toggleFav(
  labId: string,
  email: string | null | undefined
) {
  if (!email) return;
  try {
    await artificialDelay(600);
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
  } catch (error) {
    console.error('🔺 ~ toggleFav.ts ~ 🔺', error);
    throw new Error('Failed to save favorite into database');
  }
}
