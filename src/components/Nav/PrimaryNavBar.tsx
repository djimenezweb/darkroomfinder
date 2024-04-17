import { Session } from 'next-auth';
import Link from 'next/link';

type Props = {
  session: Session | null;
  closeMobileMenu: () => void;
};

export default function PrimaryNavBar({ session, closeMobileMenu }: Props) {
  const linkStyle =
    'block lg:inline hover:bg-gray-dark-400 lg:hover:bg-transparent px-4 py-2 lg:p-0 border-b border-gray-dark-500 lg:border-none lg:hover:text-red-600';

  return (
    <ul className="flex flex-col h-full lg:flex-row p-4 lg:p-0 text-base lg:text-sm lg:gap-6 lg:items-center lg:ml-8">
      <li>
        <Link href="/" className={linkStyle} onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/labs" className={linkStyle} onClick={closeMobileMenu}>
          Labs
        </Link>
      </li>
      {session && (
        <li>
          <Link href="/addlab" className={linkStyle} onClick={closeMobileMenu}>
            Add Lab
          </Link>
        </li>
      )}
    </ul>
  );
}
