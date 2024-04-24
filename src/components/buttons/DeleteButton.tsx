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
        'min-w-32 flex justify-center items-center',
        styles.button.xs,
        styles.button.warning
      )}>
      {pending ? (
        <SpinnerSVG className="w-4 h-4 animate-spin" />
      ) : (
        'Delete darkroom'
      )}
    </button>
  );
}
