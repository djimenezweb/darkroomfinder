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
    <div className="group relative bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block cursor-pointer hover:bg-gray-dark-400 hover:border-gray-dark-600 h-44">
      <div className="flex gap-4 text-sm">
        <Image
          priority
          src={picture || defaultImage}
          alt={name}
          width={150}
          height={100}
          className="w-[150px] h-[100px] rounded-md overflow-hidden shrink-0 object-cover object-center bg-gray-dark-500"
        />
        <div>
          <p>{name}</p>
          <p className="text-gray-dark-1100">{city}</p>
        </div>
      </div>
      <ChevronRightIcon className="absolute bottom-5 right-5 w-4 h-4 text-gray-dark-900 group-hover:text-gray-dark-1100 group-hover:translate-x-2 transition-transform" />
    </div>
  );
}
