'use client';

import { labOptions as options } from '@/constants/lab-options';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon } from '@heroicons/react/20/solid';

const base =
  'cursor-pointer text-center text-xs px-2.5 py-1 border rounded shadow-sm outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-red-600';
const inactive =
  'text-gray-dark-1100 bg-transparent border-gray-dark-700 hover:text-gray-dark-1200 hover:bg-gray-dark-600 hover:border-gray-dark-900';
const active =
  'text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 hover:bg-gray-dark-600 hover:border-gray-dark-800';

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
      nextFilter = initialFilter.filter(item => item !== id);
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
      <div className="md:mb-2 h-6 flex justify-between items-center">
        <p className="min-w-16 text-sm text-gray-dark-1000 capitalize">
          {name}
        </p>
        {initialFilter.length > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-dark-1200/[.026] border border-gray-dark-600 rounded-md text-gray-dark-900 hover:text-gray-dark-1100 hover:border-gray-dark-900 hover:bg-gray-dark-500">
            <XMarkIcon className="size-5" />
          </button>
        )}
      </div>
      <ul className="flex flex-wrap gap-2 text-xs">
        {options[name].map(option => (
          <li key={option.id}>
            <button
              type="button"
              className={twMerge(
                base,
                initialFilter.includes(option.id) ? active : inactive
              )}
              onClick={() => handleClick(option.id)}>
              {option.fullName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
