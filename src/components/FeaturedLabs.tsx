import { getFeaturedLabs } from '@/utils/getFeaturedLabs';
import FeaturedLabCard from './FeaturedLabCard';
import FeaturedLabCardAlt from './FeaturedLabCardAlt';

export default async function FeaturedLabs() {
  const labs = await getFeaturedLabs();

  if (!labs) return;
  if (labs.length === 0) return;

  return (
    <>
      <div className="bg-gray-dark-100 border-y border-gray-dark-600 px-4 py-16">
        <div className="container mx-auto flex gap-16 overflow-x-auto">
          {labs.map(lab => (
            <FeaturedLabCard
              key={lab._id.toString()}
              name={lab.name}
              city={lab.location.city}
              picture={lab.images[0]}
              featuredProcesses={lab.processes}
              featuredSizes={lab.sizes}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 bg-gray-dark-100 border-y border-gray-dark-600 px-4 py-16">
        <div className="container mx-auto flex gap-16 overflow-x-auto">
          {labs.map(lab => (
            <FeaturedLabCardAlt
              key={lab._id.toString()}
              name={lab.name}
              city={lab.location.city}
              picture={lab.images[0]}
              featuredProcesses={lab.processes}
              featuredSizes={lab.sizes}
            />
          ))}
        </div>
      </div>
    </>
  );
}
