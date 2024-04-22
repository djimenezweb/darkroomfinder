import Link from 'next/link';
import logo from '/public/images/logo.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function DarkroomFinderLogo({
  className = 'h-6'
}: {
  className?: string;
}) {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Darkroom Finder logo"
        className={twMerge(className, 'w-auto object-contain')}
        priority
      />
    </Link>
  );
}
