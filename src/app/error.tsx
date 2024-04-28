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
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-screen-sm space-y-2 rounded-md border border-error-500 bg-error-200 px-6 py-4 text-error-900">
        <h2 className="text-lg">Something went wrong!</h2>
        {error?.message && <p className="text-sm">{error?.message}</p>}
        <button
          className="group flex items-center gap-2 text-sm text-error-500 hover:text-error-900"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
          <span onClick={() => router.back()}>Back</span>
        </button>
      </div>
    </div>
  );
}
