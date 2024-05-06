import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import defaultImage from '/public/images/default_image.png';

export default function LabCard({
  name,
  city,
  picture
}: {
  name: string;
  city: string;
  picture: string;
}) {
  return (
    <div className="group relative block h-44 cursor-pointer rounded-md border border-gray-dark-500 bg-gray-dark-300 p-5 hover:border-gray-dark-600 hover:bg-gray-dark-400">
      <div className="flex gap-4 text-sm">
        <Image
          src={picture || defaultImage}
          alt={name}
          width={150}
          height={100}
          className="h-[100px] w-[150px] shrink-0 overflow-hidden rounded-md bg-gray-dark-500 object-cover object-center"
          sizes="150px"
        />
        <div>
          <p>{name}</p>
          <p className="text-gray-dark-1100">{city}</p>
        </div>
      </div>
      <ChevronRightIcon className="absolute bottom-5 right-5 h-4 w-4 text-gray-dark-900 transition-transform group-hover:translate-x-2 group-hover:text-gray-dark-1100" />
    </div>
  );
}
