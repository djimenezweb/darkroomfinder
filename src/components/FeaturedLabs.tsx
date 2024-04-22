import { getFeaturedLabs } from '@/utils/getFeaturedLabs';
import FeaturedLabCard from './FeaturedLabCard';
import HorizontalScroll from './HorizontalScroll';
import Link from 'next/link';

export default async function FeaturedLabs() {
  const labs = await getFeaturedLabs();

  if (!labs) return;
  if (labs.length === 0) return;

  return (
    <div className="bg-gray-dark-100 border-y py-32 border-gray-dark-600">
      <div className="px-4 mx-auto grid grid-cols-1 gap-4 lg:max-w-fit sm:grid-cols-[repeat(2,_minmax(0,_512px))]">
        {labs.map(lab => (
          <Link
            href={`/lab/${lab._id.toString()}`}
            key={lab._id.toString()}
            className="block">
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
