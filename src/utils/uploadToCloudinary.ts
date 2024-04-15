import cloudinary from '@/utils/cloudinary';

export async function uploadToCloudinary(images: File[], userId: string) {
  try {
    const imageUploadPromises = [];
    for (const image of images) {
      const arrayBuffer = await image.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const buffer = Buffer.from(uint8Array);
      const base64String = buffer.toString('base64');
      const result = await cloudinary.uploader.upload(
        `data:${image.type};base64,${base64String}`,
        { folder: `df/${userId}` }
      );
      imageUploadPromises.push(result.secure_url);
    }

    const uploadedImages = await Promise.all(imageUploadPromises);
    return uploadedImages;
  } catch (error) {
    console.error('🔺 ~ uploadToCloudinary.ts ~ 🔺', error);
    throw new Error('Failed to upload images');
  }
}

const RESULT_EXAMPLE = {
  asset_id: 'b9c802c044e752fa702739ada1e2e1dd',
  public_id: 'darkroomfinder/unubdzckygwxosmsjkyg',
  version: 1712598906,
  version_id: '5ec60ab718ce8ab6d923178548d13b32',
  signature: '2b9fa15471e3f284a256cb24fe744b28e1a2e6ed',
  width: 800,
  height: 513,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2024-04-08T17:55:06Z',
  tags: [],
  bytes: 254680,
  type: 'upload',
  etag: '4f394763e2c50f962351e01821c29995',
  placeholder: false,
  url: 'http://res.cloudinary.com/dkcktxuww/image/upload/v1712598906/darkroomfinder/unubdzckygwxosmsjkyg.jpg',
  secure_url:
    'https://res.cloudinary.com/dkcktxuww/image/upload/v1712598906/darkroomfinder/unubdzckygwxosmsjkyg.jpg',
  folder: 'darkroomfinder',
  api_key: '347677978731958'
};
