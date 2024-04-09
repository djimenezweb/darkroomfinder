import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

export default function Previews({
  files,
  setFiles
}: {
  files: (File & { preview: string })[];
  setFiles: Dispatch<SetStateAction<(File & { preview: string })[]>>;
}) {
  function handleDelete(i: number) {
    const nextFiles = [...files];
    nextFiles.splice(i, 1);
    setFiles(nextFiles);
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {files.map((file, index) => (
        <li
          key={index + file.name}
          className="group w-32 h-[85px] relative cursor-pointer flex gap-2 items-center border border-gray-dark-900 rounded-md overflow-hidden hover:border-gray-dark-1100"
          onClick={() => handleDelete(index)}>
          <Image
            src={file.preview || ''}
            fill
            className="object-cover group-hover:brightness-50"
            alt="Preview"
            onLoad={() => URL.revokeObjectURL(file.preview)}
          />
          <div className="hidden group-hover:flex absolute inset-0 justify-center items-center select-none">
            remove
          </div>
        </li>
      ))}
    </ul>
  );
}
