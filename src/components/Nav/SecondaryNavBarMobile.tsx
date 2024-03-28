import { Session } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';
import defaultProfile from '/public/images/default_profile.png';
import {
  EnvelopeIcon,
  StarIcon,
  ArrowUpTrayIcon
} from '@heroicons/react/16/solid';
import { signOut } from 'next-auth/react';

export default function SecondaryNavBarMobile({
  session,
  setIsMobileMenuOpen
}: {
  session: Session | null;
  setIsMobileMenuOpen: () => void;
}) {
  const profilePicture = session?.user.image || defaultProfile;

  return (
    <ul className="absolute lg:hidden bg-gray-dark-100 bottom-0 left-0 w-full flex justify-around p-4">
      {session && (
        <>
          <li className="rounded-md font-normal text-gray-dark-1100 hover:text-gray-dark-1200 hover:bg-gray-dark-500">
            <button className="block px-2.5 py-1" onClick={() => signOut()}>
              <ArrowUpTrayIcon className="text-gray-dark-1100 size-8 rotate-90" />
            </button>
          </li>

          <li className="rounded-md font-normal text-gray-dark-1100 hover:text-gray-dark-1200 hover:bg-gray-dark-500">
            <Link
              href="#"
              className="block px-2.5 py-1"
              onClick={setIsMobileMenuOpen}>
              <EnvelopeIcon className="text-gray-dark-1100 size-8" />
            </Link>
          </li>

          <li className="rounded-md font-normal text-gray-dark-1100 hover:text-gray-dark-1200 hover:bg-gray-dark-500">
            <Link
              href="#"
              className="block px-2.5 py-1"
              onClick={setIsMobileMenuOpen}>
              <StarIcon className="text-gray-dark-1100 size-8" />
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="block px-2.5 py-1"
              onClick={setIsMobileMenuOpen}>
              <Image
                src={profilePicture}
                alt="Profile picture"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </li>
        </>
      )}

      {!session && (
        <li className="w-full">
          <Link href="/sign-in" className="block">
            <button
              type="button"
              className="bg-red-800 hover:bg-red-800/80 w-full text-xs p-2.5 rounded-md font-normal border border-red-600">
              Sign in
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
}
