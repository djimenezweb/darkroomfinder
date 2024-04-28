'use client';

import { styles } from '@/styles/styles';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function CancelButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={twMerge(
        styles.button.xs,
        styles.button.gray,
        'p-2.5 font-normal lg:px-2.5 lg:py-1'
      )}
    >
      Cancel
    </button>
  );
}
