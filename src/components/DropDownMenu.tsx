import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function DropDownMenu() {
  return (
    <>
      <li>
        <Link
          href="#"
          className="block hover:bg-gray-dark-400 px-4 py-2 border-b border-gray-dark-500 lg:border-none">
          My Profile
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="block hover:bg-gray-dark-400 px-4 py-2 border-b border-gray-dark-500 lg:border-none">
          Saved Labs
        </Link>
      </li>
      <li>
        <button
          onClick={() => signOut()}
          className="block w-full text-left hover:bg-gray-dark-400 px-4 py-2 border-b border-gray-dark-500 lg:border-none">
          Sign out
        </button>
      </li>
    </>
  );
}
