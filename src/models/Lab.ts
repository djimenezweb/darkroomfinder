import { ILab } from '@/types/types';
import { Schema, model, models } from 'mongoose';

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
      country: String,
      latitude: Number,
      longitude: Number
    },
    sizes: [{ type: String }],
    processes: [{ type: String }],
    images: [{ type: String }],
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const LabModel = () => model<ILab>('Lab', labSchema, 'labs');

export const Lab = (models.Lab ||
  model<ILab>('Lab', labSchema, 'labs')) as ReturnType<typeof LabModel>;

// export const Lab = models.Lab || model<ILab>('Lab', labSchema, 'labs');

// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose/68670166#68670166
