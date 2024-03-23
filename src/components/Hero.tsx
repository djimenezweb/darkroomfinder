import { partners } from '@/constants/partners';
import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';

export default function Hero() {
  return (
    <section className="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 md:pt-16 overflow-hidden">
      <div className="pt-20 text-center">
        <h1 className="text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-dark-1200 to-gray-dark-1100">
            Find your
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-800">
            perfect lab
          </span>
        </h1>
        <p className="pt-2 my-3 sm:mt-5 lg:mb-0 text-sm sm:text-base lg:text-lg">
          Discover the darkroom that suits your needs
        </p>
      </div>
      <div>
        <Search />
        <div className="mt-14">
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
      </div>
    </section>
  );
}
