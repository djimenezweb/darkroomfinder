import { Schema, Types, model, models } from 'mongoose';

// Create an interface representing a document in MongoDB.
export interface ILab {
  _id: string;
  owner: Types.ObjectId;
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
  //enlargers: number;
  //features: string[];
  sizes: string[];
  processes: string[];
  // rates: {
  //   hour?: number;
  //   session?: number;
  //   day?: number;
  //   week?: number;
  // };
  images: string[];
  isFeatured: boolean;
}

// Create a Schema corresponding to the document interface.
const labSchema = new Schema<ILab>(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    location: {
      address: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    // enlargers: { type: Number },
    // features: [{ type: String }],
    sizes: [{ type: String }],
    processes: [{ type: String }],
    // rates: {
    //   hour: Number,
    //   session: Number,
    //   day: Number,
    //   week: Number
    // },
    images: [{ type: String }],
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Lab = models.Lab || model<ILab>('Lab', labSchema, 'labs');
