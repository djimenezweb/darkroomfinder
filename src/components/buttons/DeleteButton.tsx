'use client';

import { useFormStatus } from 'react-dom';
import SpinnerSVG from '../logos/Spinner';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={twMerge(
        'flex min-w-32 items-center justify-center',
        styles.button.xs,
        styles.button.warning
      )}
    >
      {pending ? (
        <SpinnerSVG className="h-4 w-4 animate-spin" />
      ) : (
        'Delete darkroom'
      )}
    </button>
  );
}
