import { getProviders } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import SignInButtons from './SignInButtons';

export default async function SigninPage() {
  const providers = await getProviders();
  if (!providers) return;

  return (
    <>
      <header className="absolute top-0 w-full h-16 px-8 flex items-end">
        <Link href="/">
          <div className="flex items-center">
            <div className="rounded-full bg-red-800 w-4 h-4" />
            <span className="text-xl">darkroomFinder</span>
          </div>
        </Link>
      </header>
      <div className="flex h-screen">
        <main className="flex flex-col items-center flex-1 shrink-0 pt-24 px-8 pb-8">
          <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
            <div className="mb-10">
              <h1 className="mt-8 mb-2 text-2xl lg:text-3xl">Welcome back</h1>
              <h2 className="text-sm text-gray-dark-1100">
                Sign in to your account
              </h2>
            </div>
            <SignInButtons providers={providers} />
            <p className="text-center text-xs text-gray-dark-1000 sm:mx-auto sm:max-w-sm mt-auto">
              By continuing, you agree to darkroomFinder&apos;s{' '}
              <Link
                href="/demo"
                className="underline hover:text-gray-dark-1100">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/demo"
                className="underline hover:text-gray-dark-1100">
                Privacy Policy
              </Link>
              , and to receive periodic emails with updates.
            </p>
          </div>
        </main>
        <aside className="hidden md:block relative bg-gray-dark-100 grow basis-1/4 border-l border-gray-dark-600 overflow-hidden">
          <figure>
            <Image
              src="/images/pexels-ron-lach-10276046.jpg"
              alt="Hands Holding Negative"
              className="object-cover"
              fill
            />
            <figcaption className="absolute w-full text-center bottom-8 text-sm text-gray-dark-1200">
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
