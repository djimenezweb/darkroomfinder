import { partners } from '@/constants/partners';
import Image from 'next/image';
import Link from 'next/link';

export default function Partners() {
  return (
    <div className="py-8 sm:py-10 md:py-16">
      <p className="text-center text-xs text-gray-dark-1100">
        Made possible by
      </p>
      <div className="mt-4 flex justify-center gap-4 sm:gap-6">
        {partners.map(({ name, url, logo }) => (
          <Link
            key={name}
            href={url}
            className="flex items-center opacity-45 hover:opacity-75 focus:rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-red-800"
          >
            <Image
              src={logo}
              alt={name}
              className="max-w-12 object-contain sm:max-w-20"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
