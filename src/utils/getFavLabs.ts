import { User } from '@/models/User';
import { ILab, IUserWithLabs } from '@/types/types';
import dbConnect from './dbConnect';

export async function getFavLabs(email: string) {
  try {
    await dbConnect();
    const data = await User.findOne({ email })
      .populate<{ bookmarks: ILab[] }>({
        path: 'bookmarks',
        select: ['name', 'location.city', 'images']
      })
      .lean()
      .exec();
    if (data) {
      return data as IUserWithLabs;
    }
    return null;
  } catch (error) {
    console.error('🔺 ~ getFavLabs.ts ~ will return null ~ 🔺', error);
    return null;
  }

  //   if (data) {
  //     const userWithFavs: IUserWithLabs = await JSON.parse(JSON.stringify(data));
  //     return userWithFavs;
  //   }
}
