import { range } from '@/utils/range';
import Link from 'next/link';

export default function FeaturedLabsSkeleton() {
  return (
    <div className="bg-gray-dark-100 border-y py-32 border-gray-dark-600">
      <div className="px-4 mx-auto grid grid-cols-1 gap-4 lg:max-w-fit sm:grid-cols-[repeat(2,_minmax(0,_512px))]">
        {range(4).map(n => (
          <div
            key={n}
            className="w-full h-64 overflow-hidden flex justify-between group relative bg-gray-dark-300 border border-gray-dark-500 rounded-xl cursor-pointer hover:bg-gray-dark-300 hover:border-gray-dark-600 animate-pulse"></div>
        ))}
      </div>
      <div className="text-center pt-16">
        <Link
          href="/labs"
          className="bg-gray-dark-500 hover:bg-gray-dark-600 px-3 py-2 text-sm rounded-md border border-gray-dark-700 hover:border-gray-dark-800 shadow-sm">
          Show more
        </Link>
      </div>
    </div>
  );
}
