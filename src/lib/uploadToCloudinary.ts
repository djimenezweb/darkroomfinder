import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadToCloudinary(images: File[]) {
  const imageUploadPromises = [];

  for (const image of images) {
    const public_id = image.name.split('.')[0];
    const arrayBuffer = await image.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const buffer = Buffer.from(uint8Array);
    const base64String = buffer.toString('base64');
    const result = await cloudinary.uploader.upload(
      `data:${image.type};base64,${base64String}`,
      { folder: 'darkroomfinder', public_id }
    );
    imageUploadPromises.push(result.secure_url);
  }

  const uploadedImages = await Promise.all(imageUploadPromises);
  return uploadedImages;
}

// https://cloudinary.com/documentation/node_image_and_video_upload
//
// const byteArrayBuffer = ????
// const uploadResult = await new Promise((resolve) => {
// cloudinary.uploader.upload_stream((error, uploadResult) => {
// return resolve(uploadResult)
// }).end(byteArrayBuffer)
// })

// const uploadResult = await new Promise(resolve => {
//   cloudinary.uploader
//     .upload_stream({folder: 'darkroomfinder', use_filename: true}, (error: UploadApiErrorResponse | undefined, uploadResult: UploadApiResponse | undefined) => {
//       return resolve(uploadResult);
//     })
//     .end(byteArrayBuffer);
// });

const resultSample = {
  asset_id: '1a613a3d9994680c6d6bf48ff6ca998c',
  public_id: 'dkkpxw5yx35hr8laxiwg',
  version: 1710717175,
  version_id: '52b443ddf6a5669561c0384f49586d4c',
  signature: '6853f25c6db273f9bf51b677c1b91f40cc65849b',
  width: 498,
  height: 387,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2024-03-17T23:12:55Z',
  tags: [],
  bytes: 3933,
  type: 'upload',
  etag: '42a7cf705ef4b75f51b6b3c3f744bdb2',
  placeholder: false,
  url: 'http://res.cloudinary.com/dkcktxuww/image/upload/v1710717175/dkkpxw5yx35hr8laxiwg.jpg',
  secure_url:
    'https://res.cloudinary.com/dkcktxuww/image/upload/v1710717175/dkkpxw5yx35hr8laxiwg.jpg',
  folder: '',
  original_filename: 'file',
  api_key: '347677978731958'
};
