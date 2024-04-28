'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="group flex items-center gap-4 text-sm text-gray-dark-1000 hover:text-gray-dark-1100"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
      <span>Back</span>
    </button>
  );
}
