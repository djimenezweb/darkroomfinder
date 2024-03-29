import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  ArrowUpTrayIcon,
  StarIcon,
  UserCircleIcon
} from '@heroicons/react/16/solid';

export default function DropDownMenu({
  closeProfile
}: {
  closeProfile: () => void;
}) {
  return (
    <div className="hidden lg:block absolute w-48 h-auto bg-gray-dark-300 top-10 right-0 border-solid border border-gray-dark-500 rounded-xl shadow-lg">
      <ul className="font-normal text-sm p-3">
        <li>
          <Link
            href="/profile"
            onClick={closeProfile}
            className="px-4 py-2 flex items-center gap-4 hover:bg-gray-dark-400">
            <UserCircleIcon className="text-gray-dark-900 size-4" />
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            onClick={closeProfile}
            className="px-4 py-2 flex items-center gap-4 hover:bg-gray-dark-400">
            <StarIcon className="text-gray-dark-900 size-4" />
            <span>Saved Labs</span>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              closeProfile;
              signOut();
            }}
            className="w-full px-4 py-2 flex items-center gap-4 hover:bg-gray-dark-400">
            <ArrowUpTrayIcon className="text-gray-dark-900 size-4 rotate-90" />
            <span>Sign out</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
