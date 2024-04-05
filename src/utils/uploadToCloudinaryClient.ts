import cloudinary from '@/utils/cloudinary';

export async function uploadToCloudinaryClient(images: File[]) {
  // const blobs = []
  const formData = new FormData();

  for (const image of images) {
    const blob = new Blob([image], { type: image.type });
    formData.append('images', blob, image.name);
  }

  console.log('formData', formData);
}
