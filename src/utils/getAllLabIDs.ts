import { Lab } from '@/models/Lab';
import dbConnect from './dbConnect';

export async function getAllLabIDs() {
  try {
    await dbConnect();
    const results = await Lab.find({}).select('id').lean();
    return results;
  } catch (error) {
    console.error('🔺 ~ getAllLabIDs.ts ~ will return null ~ 🔺', error);
    return null;
  }
}
