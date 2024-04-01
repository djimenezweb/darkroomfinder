import { Session } from 'next-auth';
import Link from 'next/link';
import GitHubLogoNav from '../logos/GitHubLogoNav';
import Image from 'next/image';
import defaultProfile from '/public/images/default_profile.png';
import { EnvelopeIcon } from '@heroicons/react/16/solid';

export default function SecondaryNavBar({
  session,
  setIsProfileOpen
}: {
  session: Session | null;
  setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const profilePicture = session?.user.image || defaultProfile;

  return (
    <ul className="bg-gray-dark-100 relative bg-transparent flex items-center gap-2">
      {session && (
        <>
          <li className="text-xs rounded-md font-normal text-gray-dark-1100 hover:text-gray-dark-1200 hover:bg-gray-dark-500">
            <Link
              href="https://github.com/djimenezweb/darkroomfinder"
              target="_blank"
              className="block px-2.5 py-1">
              <GitHubLogoNav className="w-6 h-6" />
            </Link>
          </li>

          <li className="text-xs rounded-md font-normal text-gray-dark-1100 hover:text-gray-dark-1200 hover:bg-gray-dark-500">
            <Link href="#" className="block px-2.5 py-1">
              <EnvelopeIcon className="text-gray-dark-1100 size-6" />
            </Link>
          </li>

          <li>
            <button
              onClick={e => {
                e.stopPropagation();
                setIsProfileOpen(prv => !prv);
              }}
              className="px-2.5 py-1">
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

      {/* HABRÍA QUE PONER UN USEPATHNAME PARA RECOGER LA POSIBLE DIRECCIÓN QUE HUBIERA Y REDIRIGIR AL USUARIO */}

      {!session && (
        <li>
          <Link href="/sign-in" className="block">
            <button
              type="button"
              className="bg-red-800 hover:bg-red-800/80 text-xs px-2.5 py-1 rounded-md font-normal border border-red-600">
              Sign in
            </button>
          </Link>
        </li>
      )}
    </ul>
  );
}
