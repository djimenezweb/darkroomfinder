import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import testImage from '../../public/images/test_9243.jpg';

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
    <div className="relative bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block cursor-pointer hover:bg-gray-dark-400 hover:border-gray-dark-600 h-44">
      <div className="flex gap-4">
        <Image
          src={picture}
          alt={name}
          width={150}
          height={100}
          className="rounded-md overflow-hidden shrink-0"
        />
        <div>
          <p className="text-sm">{name}</p>
          <p className="text-sm text-gray-dark-1100">{city}</p>
        </div>
      </div>
      <ChevronRightIcon className="absolute bottom-5 right-5 w-4 h-4 text-gray-dark-1000" />
    </div>
  );
}
