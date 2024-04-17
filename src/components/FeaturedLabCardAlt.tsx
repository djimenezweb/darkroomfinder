import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import defaultImage from '/public/images/default_image.png';
import { processes, sizes } from '@/constants/lab-options';
import Tag from '@/components/Tag';

export default function FeaturedLabCardAlt({
  name,
  city,
  picture,
  featuredSizes,
  featuredProcesses
}: {
  name: string;
  city: string;
  picture: string;
  featuredSizes: string[];
  featuredProcesses: string[];
}) {
  return (
    <div className="w-[512px] h-64 shrink-0 overflow-hidden flex justify-between group relative bg-gray-dark-300 border border-gray-dark-500 rounded-xl cursor-pointer hover:bg-gray-dark-300 hover:border-gray-dark-600">
      <div className="relative w-1/2 p-5 overflow-hidden">
        <div className="flex flex-col justify-center h-full">
          <div className="mt-20">
            <p className="text-sm text-gray-dark-1100">{city}</p>
            <p className="text-lg">{name}</p>
          </div>
          <ul className="flex gap-x-2 flex-wrap mt-auto">
            {featuredProcesses.map(process => {
              if (process === 'other') return;
              return (
                <li key={process}>
                  <Tag type="span">
                    {processes.find(item => item.id === process)?.shortName}
                  </Tag>
                </li>
              );
            })}
            {featuredSizes.map(size => (
              <li key={size}>
                <Tag type="span">
                  {sizes.find(item => item.id === size)?.shortName}
                </Tag>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 top-0 w-64 h-40 bg-[radial-gradient(100%_100%_at_0%_0%,_#ff0000,_transparent)] opacity-5 scale-100 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 ease-out" />
      </div>
      <div className="relative w-1/2">
        <Image
          src={picture || defaultImage}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/* 
<div className="relative w-full aspect-[2/1]">
        <Image
          src={picture || defaultImage}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative p-5 overflow-hidden">
        <p className="text-sm text-gray-dark-1100">{city}</p>
        <p className="text-lg">{name}</p>
        <ul className="flex gap-2 flex-wrap">
          {featuredProcesses.map(process => {
            if (process === 'other') return;
            return (
              <li key={process}>
                <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                  {processes.find(item => item.id === process)?.shortName}
                </span>
              </li>
            );
          })}
          {featuredSizes.map(size => (
            <li key={size}>
              <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                {sizes.find(item => item.id === size)?.shortName}
              </span>
            </li>
          ))}
        </ul>
        <div className="absolute left-0 top-0 w-64 h-40 bg-[radial-gradient(100%_100%_at_0%_0%,_#ff0000,_transparent)] opacity-5 scale-100 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 ease-out" />
      </div>
 */
