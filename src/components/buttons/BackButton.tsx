'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="group text-sm text-gray-dark-1000 hover:text-gray-dark-1100 flex items-center gap-4"
      onClick={() => router.back()}>
      <ChevronLeftIcon className="size-4 group-hover:-translate-x-1 transition-transform" />
      <span>Back</span>
    </button>
  );
}
