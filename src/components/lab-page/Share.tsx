'use client';

import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import TwitterLogo from '../logos/TwitterLogo';
import FacebookLogo from '../logos/FacebookLogo';
import LinkedInLogo from '../logos/LinkedInLogo';
import RedditLogo from '../logos/RedditLogo';
import { usePathname } from 'next/navigation';

const baseStyles = 'text-gray-dark-1000 hover:text-gray-dark-1200';

export function Share() {
  if (typeof process.env.NEXT_PUBLIC_URL === 'undefined') {
    throw new Error(
      'Environment variable NEXT_PUBLIC_MAPTILER_API_KEY is undefined'
    );
  }

  const pathname = usePathname();
  const url = encodeURIComponent(process.env.NEXT_PUBLIC_URL + pathname);
  const text = 'Check out this darkroom!';

  return (
    <div>
      <p className="text-sm mb-2 text-center md:text-left">
        Share this darkroom
      </p>
      <div className="flex gap-5 items-center">
        <Link
          href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
          target="_blank"
          className={twMerge(baseStyles)}>
          <TwitterLogo className="size-6" />
        </Link>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          className={twMerge(baseStyles)}>
          <LinkedInLogo className="size-6" />
        </Link>
        <Link
          href={`https://www.reddit.com/submit?url=${url}`}
          target="_blank"
          className={twMerge(baseStyles)}>
          <RedditLogo className="size-6" />
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          className={twMerge(baseStyles)}>
          <FacebookLogo className="size-6" />
        </Link>
      </div>
    </div>
  );
}
