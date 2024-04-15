'use client';

import useTypewriter from '@/hooks/useTypewriter';
import { useSearchParams, useRouter } from 'next/navigation';
import { Dispatch, FormEvent, SetStateAction, useId, useState } from 'react';

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
      <Input term={term} setTerm={setTerm} />
      <button
        type="submit"
        className="bg-red-800 hover:bg-red-800/80 text-sm px-4 py-2 rounded-md font-normal border border-red-600">
        Search
      </button>
    </form>
  );
}

function Input({
  term,
  setTerm
}: {
  term: string;
  setTerm: Dispatch<SetStateAction<string>>;
}) {
  const id = useId();
  const [isOnFocus, setIsOnFocus] = useState(false);

  const dynamicPlaceholder = useTypewriter([
    'Meopta',
    'nikon',
    'madrid',
    'Jobo',
    'Paris',
    'durst',
    'LPL',
    'New York',
    'Beseler',
    'kodak',
    'Ilford',
    'London',
    'FOMA',
    'Schneider',
    'Rome',
    'De Vere',
    'Florence',
    'Adox',
    'vienna',
    'Fuji',
    'Tetenal',
    'paterson',
    'Kaiser'
  ]);

  return (
    <input
      type="search"
      id={`input${id}`}
      value={term}
      onChange={e => setTerm(e.target.value)}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
      placeholder={isOnFocus ? '' : dynamicPlaceholder}
      className="rounded-md shadow-sm text-gray-dark-1200 focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-gray-dark-900 focus-visible:ring-gray-dark-300 placeholder-gray-dark-900 bg-gray-dark-1200/[.026] border border-gray-dark-600 text-sm px-4 py-2"
    />
  );
}
