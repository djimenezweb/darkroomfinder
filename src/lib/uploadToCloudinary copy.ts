import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadToCloudinary(images: File[]) {
  const imageUploadPromises = [];

  for (const image of images) {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const imageBase64 = buffer.toString('base64');

    const result = await cloudinary.uploader.upload(
      `data:${image.type};base64,${imageBase64}`,
      { folder: 'darkroomfinder' }
    );

    imageUploadPromises.push(result.secure_url);
  }

  const uploadedImages = await Promise.all(imageUploadPromises);
  return uploadedImages;
}

// const imagePromises = await Promise.allSettled(images.map( async image => {
//     const arrayBuffer = await image.arrayBuffer();
//     const buffer = new Uint8Array(arrayBuffer);

// }))

// for (const image of images) {
// const arrayBuffer = await image.arrayBuffer();
// const buffer = new Uint8Array(arrayBuffer);

// await new Promise((resolve, reject) => {
//   cloudinary.uploader
//     .upload_stream({ folder: 'darkroomfinder' }, function (error, result) {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(result);
//     })
//     .end(buffer);
// });
// }

// const uploadedImages = await Promise.allSettled(imagePromises);
// console.log(uploadedImages);

// return uploadedImages;
