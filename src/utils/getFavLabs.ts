import { User } from '@/models/User';
import { ILab, IUserWithLabs } from '@/types/types';

export async function getFavLabs(email: string) {
  const data = await User.findOne({ email })
    .populate<{ bookmarks: ILab[] }>({
      path: 'bookmarks',
      select: ['name', 'location.city', 'images']
    })
    .lean()
    .exec();

  console.log(data);
  return (data || []) as IUserWithLabs;

  //   if (data) {
  //     const userWithFavs: IUserWithLabs = await JSON.parse(JSON.stringify(data));
  //     return userWithFavs;
  //   }
}
