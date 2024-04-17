'use client';

import { Session } from 'next-auth';
import DropDownMenu from './DropDownMenu';
import HamburgerMenu from '../logos/HamburgerMenu';
import CloseMenu from '../logos/CloseMenu';
import PrimaryNavBar from './PrimaryNavBar';
import SecondaryNavBar from './SecondaryNavBar';
import SecondaryNavBarMobile from './SecondaryNavBarMobile';
import { useState } from 'react';
import DarkroomFinderLogo from '../logos/DarkroomFinderLogo';

export default function Navbar({ session }: { session: Session | null }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeProfile = () => setIsProfileOpen(false);

  return (
    <header
      className={`fixed z-40 w-full h-16 border-solid border-b border-gray-dark-500 text-sm font-medium ${
        isMobileMenuOpen ? 'bg-gray-dark-300 border-none' : 'bg-gray-dark-200'
      } lg:bg-gray-dark-200/75 lg:backdrop-blur`}>
      <nav className="flex h-full items-center justify-between lg:container mx-auto px-6 lg:px-16 xl:px-20">
        <DarkroomFinderLogo className="h-6" />
        <div
          className={`${
            isMobileMenuOpen
              ? 'fixed bg-gray-dark-300'
              : 'hidden relative lg:block'
          } lg:bg-transparent lg:flex lg:justify-between lg:items-center lg:grow top-16 lg:top-0 left-0 right-0 bottom-0`}>
          <PrimaryNavBar session={session} closeMobileMenu={closeMobileMenu} />
          <SecondaryNavBar
            session={session}
            setIsProfileOpen={setIsProfileOpen}
          />
          {isProfileOpen && <DropDownMenu closeProfile={closeProfile} />}

          {isMobileMenuOpen && (
            <SecondaryNavBarMobile
              session={session}
              closeMobileMenu={closeMobileMenu}
            />
          )}
        </div>

        <div className="inset-y-0 flex items-center lg:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(prv => !prv)}
            className="text-gray-dark-1000 focus:ring-red-800 bg-gray-dark-200 hover:bg-gray-dark-300 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset">
            {isMobileMenuOpen ? (
              <CloseMenu className="block w-6 h-6" />
            ) : (
              <HamburgerMenu className="block w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
