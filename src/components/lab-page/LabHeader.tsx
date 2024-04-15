import {
  MapPinIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/16/solid';
import Link from 'next/link';
import { formatURL } from '@/utils/formatURL';

type LabHeaderProps = {
  name: string;
  address: string;
  city: string;
  link: string;
};

export function LabHeader({ name, address, city, link }: LabHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl mt-8 mb-4">{name}</h1>

      <p className="flex gap-2 text-sm text-gray-dark-1100 hover:text-gray-dark-1200">
        <MapPinIcon className="size-4" />
        <Link href="#map" replace={true}>
          {address}, {city}
        </Link>
      </p>
      {link && (
        <p className="mt-2 flex gap-2 text-sm text-gray-dark-1100 hover:text-gray-dark-1200">
          <ArrowTopRightOnSquareIcon className="size-4" />
          <Link href={link} target="_blank">
            {formatURL(link)}
          </Link>
        </p>
      )}
    </div>
  );
}
