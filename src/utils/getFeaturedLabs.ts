import dbConnect from './dbConnect';
import { ILab } from '@/types/types';
import { Lab } from '@/models/Lab';

export async function getFeaturedLabs() {
  try {
    await dbConnect();
    const data = await Lab.find({ isFeatured: true })
      .select([
        'name',
        'location.city',
        'images',
        'isFeatured',
        'sizes',
        'processes'
      ])
      .lean()
      .exec();
    if (data) {
      return data as ILab[];
    }
    return null;
  } catch (error) {
    console.error('🔺 ~ getFeaturedLabs.ts ~ will return null ~ 🔺', error);
    return null;
  }
}
