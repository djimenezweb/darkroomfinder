'use client';

import { RESULTS_PER_PAGE } from '@/constants/search-options';
import { styles } from '@/styles/styles';
import { range } from '@/utils/range';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface PaginationProps {
  totalResults: number;
  page: number;
}

export default function Pagination({ totalResults, page }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.delete('page');
  const baseLink = `${pathname}?${params.toString()}`;

  const buttons = Math.ceil(totalResults / RESULTS_PER_PAGE);

  if (buttons <= 1) return;

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      {range(1, buttons + 1).map((n) => {
        if (n === page) {
          return (
            <span
              key={n}
              className={twMerge(
                styles.pagination.base,
                styles.pagination.active
              )}
            >
              {n}
            </span>
          );
        } else {
          return (
            <Link
              key={n}
              href={`${baseLink}&page=${n}`}
              replace={false}
              className={twMerge(
                styles.pagination.base,
                styles.pagination.inactive
              )}
            >
              {n}
            </Link>
          );
        }
      })}
    </div>
  );
}
