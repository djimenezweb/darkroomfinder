'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import DynamicInput from './DynamicPlaceholder';

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [term, setTerm] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.push(`/labs?${params.toString()}`);
  }

  return (
    <form
      className="flex justify-center items-center gap-2 mt-8"
      onSubmit={handleSubmit}>
      <DynamicInput term={term} setTerm={setTerm} />
      <button
        type="submit"
        className="bg-red-800 hover:bg-red-800/80 text-sm px-4 py-2 rounded-md font-normal border border-red-600">
        Search
      </button>
    </form>
  );
}
