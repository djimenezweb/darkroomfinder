import { partners } from '@/constants/partners';
import Image from 'next/image';
import Link from 'next/link';

export default function Partners() {
  return (
    <div className="py-8 sm:py-10 md:py-16">
      <p className="text-xs text-gray-dark-1100 text-center">
        Made possible by
      </p>
      <div className="flex justify-center gap-4 sm:gap-6 mt-4">
        {partners.map(({ name, url, logo }) => (
          <Link
            key={name}
            href={url}
            className="flex items-center focus:outline-none focus:border-none focus:ring-red-800 focus:ring-2 focus:rounded-lg opacity-45 hover:opacity-75">
            <Image
              src={logo}
              alt={name}
              className="object-contain max-w-12 sm:max-w-20"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
