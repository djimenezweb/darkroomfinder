import { Types } from 'mongoose';

interface IPlainUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILocation {
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface IPlainLab {
  _id: Types.ObjectId;
  name: string;
  description: string;
  location: ILocation;
  sizes: string[];
  processes: string[];
  images: string[];
  isFeatured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILab extends IPlainLab {
  owner: Types.ObjectId;
}

export interface ILabWithOwner extends IPlainLab {
  owner: IUser;
}

export interface IFetchedLabs {
  labs: ILab[];
  totalResults: number;
  showingFrom: number;
  showingTo: number;
}

export interface IUser extends IPlainUser {
  bookmarks: Types.Array<Types.ObjectId>;
}

export interface IUserWithLabs extends IPlainUser {
  bookmarks: ILab[];
}
