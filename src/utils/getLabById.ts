import { Lab } from '@/models/Lab';
import { ILabWithOwner, IUser } from '@/types/types';
import dbConnect from './dbConnect';

export async function getLabById(id: string) {
  await dbConnect();
  const data = await Lab.findById(id).populate<{ owner: IUser }>('owner');

  if (data) {
    const lab: ILabWithOwner = await JSON.parse(JSON.stringify(data));
    return lab;
  }
}

// Fixes "Only plain objects can be passed to Client Components from Server Components" error.
// Thanks to https://flaviocopes.com/nextjs-serialize-date-json/
