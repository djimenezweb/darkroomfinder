import { range } from '@/utils/range';
import Link from 'next/link';

export default function FeaturedLabsSkeleton() {
  return (
    <div className="border-y border-gray-dark-600 bg-gray-dark-100 py-32">
      <div className="mx-auto grid grid-cols-1 gap-4 px-4 sm:grid-cols-[repeat(2,_minmax(0,_512px))] lg:max-w-fit">
        {range(4).map((n) => (
          <div
            key={n}
            className="group relative flex h-64 w-full animate-pulse cursor-pointer justify-between overflow-hidden rounded-xl border border-gray-dark-500 bg-gray-dark-300 hover:border-gray-dark-600 hover:bg-gray-dark-300"
          ></div>
        ))}
      </div>
      <div className="pt-16 text-center">
        <Link
          href="/labs"
          className="rounded-md border border-gray-dark-700 bg-gray-dark-500 px-3 py-2 text-sm shadow-sm hover:border-gray-dark-800 hover:bg-gray-dark-600"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
