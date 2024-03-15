import { Schema, model, models } from 'mongoose';

// Create an interface representing a document in MongoDB.
interface IUser {
  username: string;
  email: string;
  bookmarks: string[];
}

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

export const User = models.User || model<IUser>('User', userSchema, 'users');
