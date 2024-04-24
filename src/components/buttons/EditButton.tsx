import { PencilSquareIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';

export default function EditButton({ id }: { id: string }) {
  return (
    <Link href={`/edit/${id}`} className="block">
      <button
        type="button"
        className={twMerge(
          'flex gap-2 justify-center items-center font-normal',
          styles.button.xs,
          styles.button.brand
        )}>
        <PencilSquareIcon className="size-4" />
        Edit
      </button>
    </Link>
  );
}
