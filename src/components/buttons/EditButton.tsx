import { PencilSquareIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { Types } from 'mongoose';

export default function EditButton({ id }: { id: string }) {
  return (
    <Link href={`/edit/${id}`} className="block">
      <button
        type="button"
        className="flex gap-2 justify-center items-center text-xs px-2.5 py-1 bg-red-800 hover:bg-red-800/80 rounded-md font-normal border border-red-600">
        <PencilSquareIcon className="size-4" />
        Edit
      </button>
    </Link>
  );
}
