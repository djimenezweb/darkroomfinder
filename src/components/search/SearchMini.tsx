'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export default function SearchMini() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get('query');

  const [term, setTerm] = useState(query || '');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    params.delete('page');
    router.push(`/labs?${params.toString()}`);
  }

  function handleReset(e: FormEvent<HTMLFormElement>) {
    const params = new URLSearchParams(searchParams);
    params.delete('query');
    params.delete('page');
    setTerm('');
    router.push(`/labs?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="relative max-w-md">
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          id="search"
          className="w-full rounded-md border border-gray-dark-600 bg-gray-dark-1200/[.026] px-8 py-1 text-sm text-gray-dark-1200 placeholder-gray-dark-900 shadow-sm outline-none focus:ring-2 focus:ring-current focus-visible:border-gray-dark-900 focus-visible:shadow-md focus-visible:ring-gray-dark-300 md:text-xs"
        />
        <div className="absolute left-2 top-2 size-4 text-gray-dark-900">
          <MagnifyingGlassIcon className="size-4" />
        </div>
        {query && (
          <button
            type="reset"
            className="absolute right-1 top-1 flex size-6 items-center justify-center text-gray-dark-900 hover:text-gray-dark-1100"
          >
            <XMarkIcon className="size-5" />
          </button>
        )}
      </div>
    </form>
  );
}
