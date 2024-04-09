'use client';

import { labOptions as options } from '@/constants/lab-options';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { XMarkIcon } from '@heroicons/react/20/solid';

const base =
  'cursor-pointer text-center text-xs px-2.5 py-1 border rounded shadow-sm outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-red-600';
const inactive =
  'text-gray-dark-1100 bg-transparent border-gray-dark-700 hover:text-gray-dark-1200 hover:bg-gray-dark-600 hover:border-gray-dark-900';
const active =
  'text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 hover:bg-gray-dark-600 hover:border-gray-dark-800';

export default function FiltersWithUseEffect({
  name
}: {
  name: 'sizes' | 'processes';
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // const router = useRouter();
  const { replace } = useRouter();

  // Save possibly existing filter params as array
  const filterParams = searchParams.get(name)?.split('+');

  // If search params exist, asign them to initial state.
  // Otherwise initial state is an empty array.
  const [filters, setFilters] = useState<string[]>(filterParams || []);

  // Updates filter state
  function handleClick(id: string) {
    if (filters.includes(id)) {
      const nextFilter = filters.filter(item => item !== id);
      setFilters(nextFilter);
    } else {
      setFilters([...filters, id]);
    }
  }

  // Updates searchParams according to the filter state after it has re-rendered
  // If the filter is empty, the search param is deleted
  // Otherwise the filter is updated
  // This should run ONLY if filters are updated (are clicked on)
  useEffect(() => {
    function updateSearchParams() {
      const params = new URLSearchParams(searchParams);
      // Deletes page to start url from scratch
      params.delete('page');
      if (filters.length === 0) {
        params.delete(name);
      } else {
        const filtersQuery = filters.join('+');
        params.set(name, filtersQuery);
      }
      replace(`${pathname}?${params.toString()}`);
      //router.push(`/labs?${params.toString()}`);
    }
    updateSearchParams();
  }, [filters]);

  return (
    <>
      <div className="mb-2 h-6 flex justify-between items-center">
        <p className="text-sm text-gray-dark-1000 capitalize">{name}</p>
        {filters.length > 0 && (
          <button
            type="button"
            onClick={() => setFilters([])}
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
                filters.includes(option.id) ? active : inactive
              )}
              onClick={() => handleClick(option.id)}>
              {option.fullName}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
