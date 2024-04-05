import Image from 'next/image';

export default function Previews({
  files,
  handleDelete
}: {
  files: (File & { preview: string })[];
  handleDelete: (i: number) => void;
}) {
  return (
    <ul className="space-y-2">
      {files.map((file, index) => (
        <li key={index + file.name} className="flex gap-2 items-center">
          <div
            className="group w-24 h-16 relative cursor-pointer"
            onClick={() => handleDelete(index)}>
            <Image
              src={file.preview || ''}
              fill
              className="object-contain group-hover:brightness-50"
              alt="Preview"
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <div className="hidden group-hover:flex absolute inset-0 justify-center items-center select-none">
              remove
            </div>
          </div>
          <span>
            {file.name} ({file.size} bytes)
          </span>
        </li>
      ))}
    </ul>
  );
}
