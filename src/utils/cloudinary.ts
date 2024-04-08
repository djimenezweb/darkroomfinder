import { v2 as cloudinary } from 'cloudinary';

if (typeof process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME === 'undefined') {
  throw new Error(
    'Environment variable NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is undefined'
  );
}
if (typeof process.env.CLOUDINARY_API_KEY === 'undefined') {
  throw new Error('Environment variable CLOUDINARY_API_KEY is undefined');
}
if (typeof process.env.CLOUDINARY_API_SECRET === 'undefined') {
  throw new Error('Environment variable CLOUDINARY_API_SECRET is undefined');
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default cloudinary;
