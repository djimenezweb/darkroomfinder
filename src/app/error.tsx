'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function Error({
  error
}: {
  error: Error & { message?: string; digest?: string };
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-error-200 text-error-900 border border-error-500 px-6 py-4 rounded-md space-y-2">
        <h2 className="text-lg">Something went wrong!</h2>
        {error?.message && <p className="text-sm">{error?.message}</p>}
        {error?.digest && <p className="text-sm">{error?.digest}</p>}
        <button
          className="group text-sm text-error-500 hover:text-error-900 flex items-center gap-2"
          onClick={() => router.back()}>
          <ChevronLeftIcon className="size-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
