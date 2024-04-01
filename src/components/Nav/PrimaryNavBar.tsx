import { Session } from 'next-auth';
import Link from 'next/link';

// prettiter-ignore
export default function PrimaryNavBar({
  session
}: {
  session: Session | null;
}) {
  const linkStyle =
    'block lg:inline hover:bg-gray-dark-400 lg:hover:bg-transparent px-4 py-2 lg:p-0 border-b border-gray-dark-500 lg:border-none lg:hover:text-red-600';

  return (
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
    </ul>
  );
}
