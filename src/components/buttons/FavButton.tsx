'use client';

import { toggleFav } from '@/utils/toggleFav';
import { StarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SpinnerSVG from '../logos/Spinner';
import { useRouter } from 'next/navigation';

export default function FavButton({
  labId,
  email,
  initialState = false
}: {
  labId: string;
  email: string | null | undefined;
  initialState?: boolean;
}) {
  const router = useRouter();
  const [isFav, setIsFav] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    if (!email) {
      router.push(`/sign-in?callbackUrl=/lab/${labId}`);
      return;
    }
    setIsLoading(true);
    const newValue = await toggleFav(labId, email);
    setIsFav(!!newValue);
    setIsLoading(false);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={isLoading}
        type="button"
        className="group flex gap-2 items-center bg-gray-dark-500 hover:bg-gray-dark-600 text-xs px-2.5 py-1 rounded-md font-normal border border-gray-dark-700 hover:border-gray-dark-800">
        {isLoading ? (
          <SpinnerSVG className="size-5 animate-spin" />
        ) : (
          <StarIcon
            className={twMerge(
              'size-5',
              isFav
                ? 'fill-current group-hover:fill-none'
                : 'fill-none group-hover:fill-current'
            )}
          />
        )}
        <span className={twMerge('text-xs', isLoading && 'text-gray-dark-900')}>
          {isFav ? 'Remove' : 'Save'}
        </span>
      </button>
    </div>
  );
}
