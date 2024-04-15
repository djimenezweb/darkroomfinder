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
    setToBeDeletedImages(prev => [...prev, savedImages[i]]);
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
            className="group w-32 h-[85px] relative cursor-pointer flex gap-2 items-center border border-gray-dark-900 rounded-md overflow-hidden hover:border-gray-dark-1100"
            onClick={() => handleDeleteSavedImage(index)}>
            <Image
              src={url || ''}
              fill
              className="object-cover group-hover:brightness-50"
              alt="Preview"
            />
            <Overlay />
          </li>
        ))}

      {files.length > 0 &&
        files.map((file, index) => (
          <li
            key={index + file.name}
            className="group w-32 h-[85px] relative cursor-pointer flex gap-2 items-center border border-gray-dark-900 rounded-md overflow-hidden hover:border-gray-dark-1100"
            onClick={() => handleDeleteFile(index)}>
            <Image
              src={file.preview || ''}
              fill
              className="object-cover group-hover:brightness-50"
              alt="Preview"
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <Overlay />
          </li>
        ))}
    </ul>
  );
}

function Overlay() {
  return (
    <div className="hidden group-hover:flex absolute inset-0 justify-center items-center select-none">
      remove
    </div>
  );
}
