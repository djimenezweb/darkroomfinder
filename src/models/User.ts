import { IUser } from '@/types/types';
import { Schema, model, models } from 'mongoose';

// Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: [true, 'Please enter a username'] },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Lab'
      }
    ]
  },
  { timestamps: true }
);

const UserModel = () => model<IUser>('User', userSchema, 'users');

export const User = (models.User ||
  model<IUser>('User', userSchema, 'users')) as ReturnType<typeof UserModel>;

// export const User = models?.User || model<IUser>('User', userSchema, 'users');
