import { Lab } from '@/models/Lab';
import { IUser } from '@/models/User';

export interface ILabWithOwner {
  _id: string;
  owner: {
    _id: string;
    username: string;
    email: string;
    bookmarks: string[];
    createdAt?: string;
    updatedAt?: string;
  };
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  sizes: string[];
  processes: string[];
  images: string[];
  isFeatured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export async function getLabById(id: string) {
  const data = await Lab.findById(id).populate<{ owner: IUser }>('owner');

  if (data) {
    const lab: ILabWithOwner = await JSON.parse(JSON.stringify(data));
    return lab;
  }
}

// Fixes "Only plain objects can be passed to Client Components from Server Components" error.
// Thanks to https://flaviocopes.com/nextjs-serialize-date-json/

//.populate<{ owner: IUser }>('owner');
