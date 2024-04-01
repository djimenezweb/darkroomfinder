import Link from 'next/link';

export default function EditButton({ id }: { id: string }) {
  return (
    <Link href={`/edit/${id}`} className="block">
      <button
        type="button"
        className="bg-red-800 hover:bg-red-800/80 text-xs px-2.5 py-1 rounded-md font-normal border border-red-600">
        Edit
      </button>
    </Link>
  );
}
