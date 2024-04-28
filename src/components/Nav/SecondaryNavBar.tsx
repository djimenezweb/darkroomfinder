'use client';

import { Session } from 'next-auth';
import Link from 'next/link';
import GitHubLogoNav from '../logos/GitHubLogoNav';
import Image from 'next/image';
import defaultProfile from '/public/images/default_profile.png';
import { Dispatch, SetStateAction } from 'react';
import { usePathname } from 'next/navigation';

export default function SecondaryNavBar({
  session,
  setIsProfileOpen
}: {
  session: Session | null;
  setIsProfileOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const profilePicture = session?.user.image || defaultProfile;
  const pathname = usePathname();

  return (
    <ul className="relative flex items-center gap-2 bg-gray-dark-100 bg-transparent">
      {session && (
        <>
          <li className="rounded-md text-xs font-normal text-gray-dark-1100 hover:bg-gray-dark-500 hover:text-gray-dark-1200">
            <Link
              href="https://github.com/djimenezweb/darkroomfinder"
              target="_blank"
              className="block px-2.5 py-1"
            >
              <GitHubLogoNav className="h-6 w-6" />
            </Link>
          </li>

          <li>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsProfileOpen((prv) => !prv);
              }}
              className="px-2.5 py-1"
            >
              <Image
                src={profilePicture}
                alt="Profile picture"
                width={24}
                height={24}
                className="rounded-full"
              />
            </button>
          </li>
        </>
      )}

      {!session && (
        <li>
          <Link href={`/sign-in?callbackUrl=${pathname}`} className="block">
            <button
              type="button"
              className="rounded-md border border-red-600 bg-red-800 px-2.5 py-1 text-xs font-normal hover:bg-red-800/80"
            >
              Sign in
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
}
