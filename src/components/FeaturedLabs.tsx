import { getFeaturedLabs } from '@/utils/getFeaturedLabs';
import FeaturedLabCard from './FeaturedLabCard';
import HorizontalScroll from './HorizontalScroll';
import Link from 'next/link';

export default async function FeaturedLabs() {
  const labs = await getFeaturedLabs();

  if (!labs) return;
  if (labs.length === 0) return;

  return (
    <div className="border-y border-gray-dark-600 bg-gray-dark-100 py-32">
      <div className="mx-auto grid grid-cols-1 gap-4 px-4 sm:grid-cols-[repeat(2,_minmax(0,_512px))] lg:max-w-fit">
        {labs.map((lab) => (
          <Link
            href={`/lab/${lab._id.toString()}`}
            key={lab._id.toString()}
            className="block"
          >
            <FeaturedLabCard
              name={lab.name}
              city={lab.location.city}
              picture={lab.images[0]}
              featuredProcesses={lab.processes}
              featuredSizes={lab.sizes}
            />
          </Link>
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
