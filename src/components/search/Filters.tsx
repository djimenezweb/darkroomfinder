'use client';

import { labOptions as options } from '@/constants/lab-options';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { styles } from '@/styles/styles';

export default function Filters({ name }: { name: 'sizes' | 'processes' }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Save all params and delete page to start from scratch
  const params = new URLSearchParams(searchParams);
  params.delete('page');

  // Save possibly existing filter params as an array
  // Otherwise filter is an empty array.
  const initialFilter = searchParams.get(name)?.split('+') || [];

  function handleClick(id: string) {
    let nextFilter;
    if (initialFilter.includes(id)) {
      nextFilter = initialFilter.filter((item) => item !== id);
    } else {
      nextFilter = [...initialFilter, id];
    }
    if (nextFilter.length === 0) {
      params.delete(name);
    } else {
      params.set(name, nextFilter.join('+'));
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleReset() {
    params.delete(name);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 md:block md:gap-0">
      <div className="flex h-6 items-center justify-between md:mb-2">
        <p className="min-w-16 text-sm capitalize text-gray-dark-1000">
          {name}
        </p>
        {initialFilter.length > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className={twMerge(styles.button.reset)}
          >
            <XMarkIcon className="size-5" />
          </button>
        )}
      </div>
      <ul className="flex flex-wrap gap-2 text-xs">
        {options[name].map((option) => (
          <li key={option.id}>
            <button
              type="button"
              className={twMerge(
                styles.tag.xs,
                styles.tag.button.base,
                initialFilter.includes(option.id)
                  ? styles.tag.button.active
                  : styles.tag.button.inactive
              )}
              onClick={() => handleClick(option.id)}
            >
              {option.fullName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
