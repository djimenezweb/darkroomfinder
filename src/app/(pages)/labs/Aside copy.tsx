'use client';

import {
  processes as processesOptions,
  sizes as sizesOptions
} from '@/constants/lab-options';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SearchMini from './SearchMini';
import Filters from './Filters';

const base =
  'cursor-pointer text-center text-xs px-2.5 py-1 border rounded shadow-sm outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-red-600';
const inactive =
  'text-gray-dark-1000 bg-transparent border-gray-dark-700 hover:text-gray-dark-1200 hover:bg-gray-dark-600 hover:border-gray-dark-900';
const active =
  'text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 hover:bg-gray-dark-600 hover:border-gray-dark-800';

export default function Aside() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Save possibly existing search params as array
  const sizesParams = searchParams.get('sizes')?.split('+');
  const processesParams = searchParams.get('processes')?.split('+');

  // Each filter is saved in a different state, which is an array of strings
  // If search params exist, asign them to initial state.
  // Otherwise initial state is an empty array.
  const [sizes, setSizes] = useState(sizesParams || []);
  const [processes, setProcesses] = useState(processesParams || []);

  // This function updates any filter state: sizes or processes
  function handleClick(
    id: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (state.includes(id)) {
      const nextFilter = state.filter(item => item !== id);
      setState(nextFilter);
    } else {
      setState([...state, id]);
    }
  }

  // Updates searchParams according to the filter state
  // If the filter is empty, the associated search param is deleted
  // Otherwise the filter is updated
  // I don't like that too much code is repeated, but I don't know how to make it better
  useEffect(() => {
    function updateSearchParams() {
      const params = new URLSearchParams(searchParams);
      if (sizes.length === 0) {
        params.delete('sizes');
      } else {
        const sizesQuery = sizes.join('+');
        params.set('sizes', sizesQuery);
      }
      if (processes.length === 0) {
        params.delete('processes');
      } else {
        const processesQuery = processes.join('+');
        params.set('processes', processesQuery);
      }
      router.push(`/labs?${params.toString()}`);
    }
    updateSearchParams();
  }, [sizes, processes, router, searchParams]);

  return (
    <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative shrink-0">
      <div className="sticky top-16">
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <SearchMini />
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <Filters name="sizes" />
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <p className="text-sm text-gray-dark-1000 mb-2">Sizes</p>
          <ul className="flex flex-wrap text-xs gap-2">
            {sizesOptions.map(size => (
              <li key={size.id}>
                <button
                  type="button"
                  className={twMerge(
                    base,
                    sizes.includes(size.id) ? active : inactive
                  )}
                  onClick={() => handleClick(size.id, sizes, setSizes)}>
                  {size.fullName}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <p className="text-sm text-gray-dark-1000 mb-2">Processes</p>
          <ul className="flex flex-wrap text-xs gap-2">
            {processesOptions.map(process => (
              <li key={process.id}>
                <button
                  type="button"
                  className={twMerge(
                    base,
                    processes.includes(process.id) ? active : inactive
                  )}
                  onClick={() =>
                    handleClick(process.id, processes, setProcesses)
                  }>
                  {process.shortName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
