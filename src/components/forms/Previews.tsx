import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type PreviewsProps = {
  files: (File & { preview: string })[];
  setFiles: Dispatch<SetStateAction<(File & { preview: string })[]>>;
  savedImages?: string[];
  setSavedImages?: Dispatch<SetStateAction<string[]>>;
  setToBeDeletedImages?: Dispatch<SetStateAction<string[]>>;
};

export default function Previews({
  files,
  setFiles,
  savedImages = [],
  setSavedImages,
  setToBeDeletedImages
}: PreviewsProps) {
  function handleDeleteFile(i: number) {
    const nextFiles = [...files];
    nextFiles.splice(i, 1);
    setFiles(nextFiles);
  }

  function handleDeleteSavedImage(i: number) {
    if (!setToBeDeletedImages || !setSavedImages) return;
    setToBeDeletedImages((prev) => [...prev, savedImages[i]]);
    const nextImages = [...savedImages];
    nextImages.splice(i, 1);
    setSavedImages(nextImages);
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {savedImages.length > 0 &&
        savedImages.map((url, index) => (
          <li
            key={url}
            className="group relative flex h-[85px] w-32 cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-gray-dark-900 hover:border-gray-dark-1100"
            onClick={() => handleDeleteSavedImage(index)}
          >
            <Image
              src={url || ''}
              fill
              className="object-cover group-hover:brightness-50"
              alt="Preview"
              sizes="128px"
            />
            <Overlay />
          </li>
        ))}

      {files.length > 0 &&
        files.map((file, index) => (
          <li
            key={index + file.name}
            className="group relative flex h-[85px] w-32 cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-gray-dark-900 hover:border-gray-dark-1100"
            onClick={() => handleDeleteFile(index)}
          >
            <Image
              src={file.preview || ''}
              fill
              className="object-cover group-hover:brightness-50"
              alt="Preview"
              onLoad={() => URL.revokeObjectURL(file.preview)}
              unoptimized
            />
            <Overlay />
          </li>
        ))}
    </ul>
  );
}

function Overlay() {
  return (
    <div className="absolute inset-0 hidden select-none items-center justify-center group-hover:flex">
      remove
    </div>
  );
}
