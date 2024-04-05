'use client';

import { useRouter } from 'next/navigation';

export default function CancelButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="bg-gray-dark-500 hover:bg-gray-dark-600 text-xs p-2.5 lg:px-2.5 lg:py-1 rounded-md font-normal border border-gray-dark-700 hover:border-gray-dark-800">
      Cancel
    </button>
  );
}
