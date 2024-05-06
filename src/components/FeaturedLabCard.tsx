import Image from 'next/image';
import defaultImage from '/public/images/default_image.png';
import { processes, sizes } from '@/constants/lab-options';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';

export default function FeaturedLabCard({
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
    <div className="group relative flex h-64 w-full cursor-pointer justify-between overflow-hidden rounded-xl border border-gray-dark-500 bg-gray-dark-300 hover:border-gray-dark-600 hover:bg-gray-dark-300">
      <div className="relative w-1/2 overflow-hidden p-5">
        <span className="absolute left-0 top-6 z-10 rounded-r-md bg-red-700 py-1 pl-5 pr-2.5 text-xs font-medium uppercase text-gray-dark-1200">
          new
        </span>
        <div className="flex h-full flex-col justify-center">
          <div className="mt-20">
            <p className="text-sm text-gray-dark-1100">{city}</p>
            <p className="text-lg">{name}</p>
          </div>
          <ul className="mt-auto flex flex-wrap gap-x-2">
            {featuredProcesses.map((process) => {
              if (process === 'other') return;
              return (
                <li key={process}>
                  <span className={twMerge(styles.tag.xs, styles.tag.span)}>
                    {processes.find((item) => item.id === process)?.shortName}
                  </span>
                </li>
              );
            })}
            {featuredSizes.map((size) => (
              <li key={size}>
                <span className={twMerge(styles.tag.xs, styles.tag.span)}>
                  {sizes.find((item) => item.id === size)?.shortName}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute left-0 top-0 h-40 w-64 scale-100 bg-[radial-gradient(100%_100%_at_0%_0%,_#ff0000,_transparent)] opacity-5 transition-all duration-1000 ease-out group-hover:scale-150 group-hover:opacity-20" />
      </div>
      <div className="relative w-1/2">
        <Image
          priority
          src={picture || defaultImage}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024: 25vw), 255px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
