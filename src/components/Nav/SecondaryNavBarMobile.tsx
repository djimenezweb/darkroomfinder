import { Session } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';
import defaultProfile from '/public/images/default_profile.png';
import { StarIcon, ArrowUpTrayIcon } from '@heroicons/react/16/solid';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

type Props = {
  session: Session | null;
  closeMobileMenu: () => void;
};

export default function SecondaryNavBarMobile({
  session,
  closeMobileMenu
}: Props) {
  const profilePicture = session?.user.image || defaultProfile;
  const pathname = usePathname();

  return (
    <ul className="absolute bottom-0 left-0 flex w-full justify-around bg-gray-dark-100 p-4 lg:hidden">
      {session && (
        <>
          <li className="rounded-md font-normal text-gray-dark-1100 hover:bg-gray-dark-500 hover:text-gray-dark-1200">
            <button className="block px-2.5 py-1" onClick={() => signOut()}>
              <ArrowUpTrayIcon className="size-8 rotate-90 text-gray-dark-1100" />
            </button>
          </li>

          <li className="rounded-md font-normal text-gray-dark-1100 hover:bg-gray-dark-500 hover:text-gray-dark-1200">
            <Link
              href="/favs"
              className="block px-2.5 py-1"
              onClick={closeMobileMenu}
            >
              <StarIcon className="size-8 text-gray-dark-1100" />
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="block px-2.5 py-1"
              onClick={closeMobileMenu}
            >
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
          <Link href={`/sign-in?callbackUrl=${pathname}`} className="block">
            <button
              type="button"
              className="w-full rounded-md border border-red-600 bg-red-800 p-2.5 text-xs font-normal hover:bg-red-800/80"
            >
              Sign in
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
}
