import { RESULTS_PER_PAGE } from '@/constants/search-options';
import { range } from '@/utils/range';
import Link from 'next/link';

export default function Pagination({
  totalResults,
  page
}: {
  totalResults: number;
  page: number;
}) {
  const buttons = Math.ceil(totalResults / RESULTS_PER_PAGE);

  if (buttons <= 1) return;

  return (
    <div className="flex gap-4 justify-center items-center mt-8">
      {range(1, buttons + 1).map(n => {
        if (n === page) {
          return (
            <span
              key={n}
              className="text-center font-regular text-xs px-3 py-1 shadow-sm border rounded text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800">
              {n}
            </span>
          );
        } else {
          return (
            <Link
              key={n}
              href={`/labs?page=${n}`}
              className="text-center font-regular text-xs px-3 py-1 shadow-sm border rounded cursor-pointer text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900">
              {n}
            </Link>
          );
        }
      })}
    </div>
  );
}
