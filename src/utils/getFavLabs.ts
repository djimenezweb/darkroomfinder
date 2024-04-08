import { User } from '@/models/User';
import { ILab, IUserWithLabs } from '@/types/types';

export async function getFavLabs(email: string) {
  try {
    const data = await User.findOne({ email })
      .populate<{ bookmarks: ILab[] }>({
        path: 'bookmarks',
        select: ['name', 'location.city', 'images']
      })
      .lean()
      .exec();

    console.log(data);
    return (data || []) as IUserWithLabs;
  } catch (error) {
    return [];
  }

  //   if (data) {
  //     const userWithFavs: IUserWithLabs = await JSON.parse(JSON.stringify(data));
  //     return userWithFavs;
  //   }
}
