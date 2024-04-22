'use client';

import { useFormStatus } from 'react-dom';
import SpinnerSVG from '../logos/Spinner';

export default function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="min-w-32 flex justify-center items-center border border-error-500 text-error-900 px-2.5 py-1 text-xs rounded-md hover:bg-error-900 hover:text-error-200">
      {pending ? (
        <SpinnerSVG className="w-4 h-4 animate-spin" />
      ) : (
        'Delete darkroom'
      )}
    </button>
  );
}
