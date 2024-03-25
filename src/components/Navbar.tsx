'use client';

import Link from 'next/link';
import defaultProfile from '/public/images/default_profile.png';
import useToggle from '@/hooks/useToggle';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import Image from 'next/image';
import DropDownMenu from './DropDownMenu';
import GitHubLogoNav from './logos/GitHubLogoNav';
import HamburgerMenu from './logos/HamburgerMenu';
import CloseMenu from './logos/CloseMenu';
import { EnvelopeIcon } from '@heroicons/react/16/solid';

export default function Navbar({ session }: { session: Session | null }) {
  // const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useToggle();
  const [isProfileOpen, setIsProfileOpen] = useToggle();

  const profilePicture = session?.user.image || defaultProfile;
  const linkStyle =
    'block lg:inline hover:bg-gray-dark-400 lg:hover:bg-transparent px-4 py-2 lg:p-0 border-b border-gray-dark-500 lg:border-none lg:hover:text-red-600';

  return (
    <div
      className={`fixed z-40 w-full h-16 border-solid border-b border-gray-dark-500 text-sm font-medium ${
        isMobileMenuOpen ? 'bg-gray-dark-300 border-none' : 'bg-gray-dark-200'
      } lg:bg-gray-dark-200/75 lg:backdrop-blur`}>
      <nav className="flex h-full items-center justify-between lg:container mx-auto px-6 lg:px-16 xl:px-20">
        <div className="flex items-center">
          <div className="rounded-full bg-red-800 w-4 h-4" />
          <span className="text-xl">darkroomFinder</span>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'fixed bg-gray-dark-300' : 'hidden lg:block'
          } lg:bg-transparent lg:flex lg:justify-between lg:items-center lg:grow top-16 lg:top-0 left-0 right-0 bottom-0`}>
          <ul className="flex flex-col h-full lg:flex-row p-4 lg:p-0 text-base lg:text-sm lg:gap-6 lg:items-center lg:ml-8">
            <li>
              <Link href="/" className={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/labs" className={linkStyle}>
                Labs
              </Link>
            </li>
            {session && (
              <li>
                <Link href="/addlab" className={linkStyle}>
                  Add Lab
                </Link>
              </li>
            )}
            {isMobileMenuOpen && session && <DropDownMenu />}
          </ul>
          <div className="bg-gray-dark-100 absolute lg:relative bottom-0 left-0 w-full lg:w-auto lg:bg-transparent lg:flex lg:items-center lg:gap-2">
            <div className="hidden lg:block text-xs ml-auto px-2.5 py-1 rounded-md font-normal text-gray-dark-1100 hover:text-gray-dark-1200 hover:bg-gray-dark-500">
              <Link href="#">
                <GitHubLogoNav className="w-6 h-6" />
              </Link>
            </div>
            {session && (
              <>
                <button className="hidden lg:block w-6 h-6">
                  <EnvelopeIcon className="text-gray-dark-1100" />
                </button>
                <button onClick={setIsProfileOpen} className="hidden lg:block">
                  <Image
                    src={profilePicture}
                    alt="Profile picture"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </button>
              </>
            )}
            {!session && (
              <Link href="/sign-in" className="block p-4 lg:p-0">
                <button
                  type="button"
                  className="bg-red-800 hover:bg-red-800/80 w-full lg:w-auto text-xs p-2.5 lg:px-2.5 lg:py-1 rounded-md font-normal border border-red-600">
                  Sign in
                </button>
              </Link>
            )}
            {isProfileOpen && (
              <div className="absolute w-40 h-auto bg-gray-dark-300 top-10 right-0 border-solid border border-gray-dark-500 rounded-xl shadow-lg">
                <ul className="text-sm font-normal p-3">
                  <DropDownMenu />
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="inset-y-0 flex items-center lg:hidden z-50">
          <button
            onClick={setIsMobileMenuOpen}
            className="text-gray-dark-1000 focus:ring-red-800 bg-gray-dark-200 hover:bg-gray-dark-300 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset">
            {isMobileMenuOpen ? (
              <CloseMenu className="block w-6 h-6" />
            ) : (
              <HamburgerMenu className="block w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
