// import { getProviders } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import SignInButtons from '@/components/buttons/SignInButtons';
import { TITLE } from '@/constants/metadata';
import { Suspense } from 'react';
import DarkroomFinderLogo from '@/components/logos/DarkroomFinderLogo';
import img10276046 from '/public/images/pexels-ron-lach-10276046.jpg';

export function generateMetadata() {
  return {
    title: `Sign in | ${TITLE}`
  };
}

export default async function SigninPage() {
  //  const providers = await getProviders();
  //  if (!providers) return;

  return (
    <>
      <header className="absolute top-0 flex h-12 w-full items-end px-4 sm:h-16 sm:px-8">
        <DarkroomFinderLogo />
      </header>
      <div className="flex h-dvh sm:h-screen">
        <main className="flex flex-1 shrink-0 flex-col items-center px-4 pb-8 pt-16 sm:px-8 sm:pt-24">
          <div className="flex w-full flex-1 flex-col justify-center sm:w-[24rem]">
            <div className="mb-10">
              <h1 className="mb-2 mt-8 text-2xl lg:text-3xl">Welcome back</h1>
              <h2 className="text-sm text-gray-dark-1100">
                Sign in to your account
              </h2>
            </div>
            <Suspense>
              <SignInButtons />
            </Suspense>
            <p className="mt-auto text-center text-xs text-gray-dark-1000 sm:mx-auto sm:max-w-sm">
              By continuing, you agree to DarkroomFinder&apos;s{' '}
              <Link
                href="/demo"
                className="underline hover:text-gray-dark-1100"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/demo"
                className="underline hover:text-gray-dark-1100"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </main>
        <aside className="hidden grow basis-1/4 overflow-hidden border-l border-gray-dark-600 bg-[#5f0000] sm:block">
          <figure className="relative h-full">
            <Image
              src={img10276046}
              alt="Hands Holding Negative"
              className="object-cover"
              sizes="75vw"
              fill
              priority
              placeholder="blur"
            />
            <figcaption className="absolute bottom-8 w-full text-center text-sm text-gray-dark-1200">
              <Link href="https://www.pexels.com/photo/hands-holding-negative-10276046/">
                Ron Lach | Pexels
              </Link>
            </figcaption>
          </figure>
        </aside>
      </div>
    </>
  );
}
