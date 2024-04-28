'use client';

import useTypewriter from '@/hooks/useTypewriter';
import { Dispatch, SetStateAction, useId, useState } from 'react';

export default function DynamicInput({
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
      onChange={(e) => setTerm(e.target.value)}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
      placeholder={isOnFocus ? '' : dynamicPlaceholder}
      className="rounded-md border border-gray-dark-600 bg-gray-dark-1200/[.026] px-4 py-2 text-sm text-gray-dark-1200 placeholder-gray-dark-900 shadow-sm outline-none focus:ring-2 focus:ring-current focus-visible:border-gray-dark-900 focus-visible:shadow-md focus-visible:ring-gray-dark-300"
    />
  );
}
