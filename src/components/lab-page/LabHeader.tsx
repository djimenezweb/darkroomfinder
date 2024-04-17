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
      <ul className="flex flex-col gap-2 items-start">
        <Link
          href="#map"
          replace={true}
          className="text-gray-dark-1100 hover:text-gray-dark-1200">
          <li className="flex gap-2 text-sm">
            <MapPinIcon className="size-4" />
            {address}, {city}
          </li>
        </Link>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="text-gray-dark-1100 hover:text-gray-dark-1200">
            <li className="flex gap-2 text-sm">
              <ArrowTopRightOnSquareIcon className="size-4" />
              {formatURL(link)}
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
