'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export default function SearchMini() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get('query');

  const [term, setTerm] = useState(query || '');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.push(`/labs?${params.toString()}`);
  }

  function handleReset(e: React.FormEvent<HTMLFormElement>) {
    const params = new URLSearchParams(searchParams);
    params.delete('query');
    setTerm('');
    router.push(`/labs?${params.toString()}`);
  }

  return (
    <form className="" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="relative">
        <input
          type="search"
          value={term}
          onChange={e => setTerm(e.target.value)}
          id="search"
          className="w-full text-xs px-8 py-1 rounded-md shadow-sm text-gray-dark-1200 placeholder-gray-dark-900 bg-gray-dark-1200/[.026] border border-gray-dark-600 outline-none focus-visible:shadow-md focus:ring-current focus:ring-2 focus-visible:border-gray-dark-900 focus-visible:ring-gray-dark-300"
        />
        <div className="absolute left-2 top-2 size-4 text-gray-dark-900">
          <MagnifyingGlassIcon className="size-4" />
        </div>
        {query && (
          <button
            type="reset"
            className="absolute right-1 top-1 size-6 text-gray-dark-900 hover:text-gray-dark-1100 flex justify-center items-center">
            <XMarkIcon className="size-5" />
          </button>
        )}
      </div>
    </form>
  );
}
