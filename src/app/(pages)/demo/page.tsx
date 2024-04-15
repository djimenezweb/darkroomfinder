import Link from 'next/link';
import { technologies } from '@/constants/technologies';
import Image from 'next/image';
import ContainerWithBorder from '@/components/ContainerWithBorder';
import { TITLE } from '@/constants/metadata';

export function generateMetadata() {
  return {
    title: `About this site | ${TITLE}`
  };
}

export default function FakePage() {
  return (
    <div className="px-4 mb-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl mt-12 mb-6">
          This is a fake website
        </h1>
        <div className="max-w-2xl text-gray-dark-1100 text-base leading-7 space-y-5">
          <p>
            This website is a personal project to practise web development. This
            is not a real website. All the darkrooms, addresses, personal
            information, and pictures are here for testing purposes only.
          </p>
          <p>
            You are encouraged to sign in and post fake data to keep testing the
            website!
          </p>
        </div>
      </div>
      <h2 className="max-w-2xl mx-auto text-gray-dark-1200 text-2xl mt-8 mb-4">
        Built with
      </h2>
      <ul className="max-w-3xl mx-auto columns-1 sm:columns-2 gap-x-4">
        {technologies.map(technology => (
          <li key={technology.url} className="mb-4 break-inside-avoid">
            <Link href={technology.url} target="_blank" className="block ">
              <ContainerWithBorder className=" cursor-pointer hover:bg-gray-dark-400 hover:border-gray-dark-600 shadow-md">
                <div className="flex gap-5 ">
                  <div className="shrink-0 flex items-center justify-center h-12 w-12 bg-gray-dark-100 rounded-lg text-gray-dark-1100">
                    <Image
                      src={technology.logo}
                      alt={technology.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <h3 className="text-xl">{technology.title}</h3>
                    <p className="text-gray-dark-1100 text-sm">
                      {technology.description}
                    </p>
                    <p className="text-gray-dark-1000 text-sm text-right">
                      {technology.version}
                    </p>
                  </div>
                </div>
              </ContainerWithBorder>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
