'use client';

import SpinnerSVG from '@/components/logos/Spinner';
import { styles } from '@/styles/styles';
import { twMerge } from 'tailwind-merge';

export default function SubmitButton({
  text,
  isLoading
}: {
  text: string;
  isLoading: boolean;
}) {
  return (
    <button
      type="submit"
      className={twMerge(
        styles.flexCenter,
        styles.button.xs,
        styles.button.brand,
        'min-w-32'
      )}
    >
      {isLoading ? <SpinnerSVG className="h-4 w-4 animate-spin" /> : text}
    </button>
  );
}
