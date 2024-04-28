'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  ArrowUpTrayIcon,
  StarIcon,
  UserCircleIcon
} from '@heroicons/react/16/solid';
import { useCallback, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { motion } from 'framer-motion';

export default function DropDownMenu({
  closeProfile
}: {
  closeProfile: () => void;
}) {
  const ref = useRef(null);
  const handleClickOutside = useCallback(closeProfile, [closeProfile]);
  useClickOutside(ref, handleClickOutside);

  return (
    <motion.div
      className="absolute right-0 top-10 hidden h-auto w-48 rounded-xl border border-solid border-gray-dark-500 bg-gray-dark-300 shadow-lg lg:block"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
    >
      <ul className="p-3 text-sm font-normal" ref={ref}>
        <li>
          <Link
            href="/profile"
            onClick={closeProfile}
            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-dark-400"
          >
            <UserCircleIcon className="size-4 text-gray-dark-900" />
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/favs"
            onClick={closeProfile}
            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-dark-400"
          >
            <StarIcon className="size-4 text-gray-dark-900" />
            <span>Saved Labs</span>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              closeProfile;
              signOut();
            }}
            className="flex w-full items-center gap-4 px-4 py-2 hover:bg-gray-dark-400"
          >
            <ArrowUpTrayIcon className="size-4 rotate-90 text-gray-dark-900" />
            <span>Sign out</span>
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
