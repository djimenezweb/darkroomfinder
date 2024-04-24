'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import DynamicInput from './DynamicPlaceholder';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';

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
        className={twMerge(styles.button.sm, styles.button.brand, 'text-sm')}>
        Search
      </button>
    </form>
  );
}
