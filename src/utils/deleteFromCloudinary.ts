import cloudinary from '@/utils/cloudinary';
import { getPublicId } from './getPublicId';

export async function deleteFromCloudinary(urls: string[]) {
  try {
    const promises = [];
    for (const url of urls) {
      const publicId = getPublicId(url);
      if (publicId) {
        const result = await cloudinary.uploader.destroy(publicId);
        promises.push(result);
      }
    }
    const destroyResult = await Promise.all(promises);
  } catch (error) {
    console.error('🔺 ~ deleteFromCloudinary.ts ~ 🔺', error);
    throw new Error('Failed to delete images');
  }
}
