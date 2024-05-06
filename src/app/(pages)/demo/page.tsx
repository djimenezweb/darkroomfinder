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
    <div className="mb-16 px-4">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 mt-12 text-2xl sm:text-4xl">
          This is a fake website
        </h1>
        <div className="max-w-2xl space-y-5 text-base leading-7 text-gray-dark-1100">
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
      <h2 className="mx-auto mb-4 mt-8 max-w-2xl text-2xl text-gray-dark-1200">
        Built with
      </h2>
      <ul className="mx-auto max-w-3xl columns-1 gap-x-4 sm:columns-2">
        {technologies.map((technology) => (
          <li key={technology.url} className="mb-4 break-inside-avoid">
            <Link href={technology.url} target="_blank" className="block ">
              <ContainerWithBorder className=" cursor-pointer shadow-md hover:border-gray-dark-600 hover:bg-gray-dark-400">
                <div className="flex gap-5 ">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-dark-100 text-gray-dark-1100">
                    <Image
                      src={technology.logo}
                      alt={technology.title}
                      width={technology.logo.width}
                      height={technology.logo.height}
                      className="h-auto w-auto max-w-6"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <h3 className="text-xl">{technology.title}</h3>
                    <p className="text-sm text-gray-dark-1100">
                      {technology.description}
                    </p>
                    <p className="text-right text-sm text-gray-dark-1000">
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
