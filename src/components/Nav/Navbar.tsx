'use client';

import { Session } from 'next-auth';
import DropDownMenu from './DropDownMenu';
import HamburgerMenu from '../logos/HamburgerMenu';
import CloseMenu from '../logos/CloseMenu';
import PrimaryNavBar from './PrimaryNavBar';
import SecondaryNavBar from './SecondaryNavBar';
import SecondaryNavBarMobile from './SecondaryNavBarMobile';
import { useEffect, useState } from 'react';
import DarkroomFinderLogo from '../logos/DarkroomFinderLogo';
import { AnimatePresence } from 'framer-motion';

export default function Navbar({ session }: { session: Session | null }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeProfile = () => setIsProfileOpen(false);

  useEffect(() => {
    function reset() {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
      if (isProfileOpen) {
        closeProfile();
      }
    }
    window.addEventListener('resize', reset);
    return () => window.removeEventListener('resize', reset);
  }, [isMobileMenuOpen, isProfileOpen]);

  return (
    <header
      className={`fixed z-40 h-[--header-height] w-full border-b border-solid border-gray-dark-500 text-sm font-medium ${
        isMobileMenuOpen ? 'border-none bg-gray-dark-300' : 'bg-gray-dark-200'
      } lg:bg-gray-dark-200/75 lg:backdrop-blur`}
    >
      <nav className="mx-auto flex h-full items-center justify-between px-6 lg:container lg:px-16 xl:px-20">
        <DarkroomFinderLogo className="h-6" />
        <div
          className={`${
            isMobileMenuOpen
              ? 'fixed bg-gray-dark-300'
              : 'relative hidden lg:block'
          } bottom-0 left-0 right-0 top-16 lg:top-0 lg:flex lg:grow lg:items-center lg:justify-between lg:bg-transparent`}
        >
          <PrimaryNavBar session={session} closeMobileMenu={closeMobileMenu} />
          <SecondaryNavBar
            session={session}
            setIsProfileOpen={setIsProfileOpen}
          />
          <AnimatePresence>
            {isProfileOpen && <DropDownMenu closeProfile={closeProfile} />}
          </AnimatePresence>

          {isMobileMenuOpen && (
            <SecondaryNavBarMobile
              session={session}
              closeMobileMenu={closeMobileMenu}
            />
          )}
        </div>

        <div className="inset-y-0 z-50 flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prv) => !prv)}
            className="inline-flex items-center justify-center rounded-md bg-gray-dark-200 p-2 text-gray-dark-1000 hover:bg-gray-dark-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800"
          >
            {isMobileMenuOpen ? (
              <CloseMenu className="block h-6 w-6" />
            ) : (
              <HamburgerMenu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
