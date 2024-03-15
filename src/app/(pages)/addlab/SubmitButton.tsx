'use client';

import SpinnerSVG from '@/components/logos/Spinner';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="min-w-32 flex justify-center items-center bg-red-800 hover:bg-red-800/80 text-xs px-2.5 py-1 rounded-md font-normal border border-red-600">
      {pending ? (
        <SpinnerSVG className="w-4 h-4 animate-spin" />
      ) : (
        'Add new darkroom'
      )}
    </button>
  );
}
