'use client';

import TwitterLogo from './logos/TwitterLogo';
import FacebookLogo from './logos/FacebookLogo';
import LinkedInLogo from './logos/LinkedInLogo';
import WhatsAppLogo from './logos/WhatsAppLogo';
import { twMerge } from 'tailwind-merge';
import TelegramLogo from './logos/TelegramLogo';
import Link from 'next/link';

const brandColors = {
  twitter: '#000',
  facebook: '#0866ff'
};

const baseStyles = 'text-gray-dark-1000 hover:text-gray-dark-1200';

export default function Share({ id }: { id: string }) {
  return (
    <div>
      <p className="text-sm mb-2">Share this darkroom</p>
      <div className="flex gap-5 items-center">
        <Link
          href="https://twitter.com/intent/post?url=http%3A%2F%2Fprueba.com&text=Prueba"
          target="_blank"
          className={twMerge(baseStyles)}>
          <TwitterLogo className="size-6" />
        </Link>
        <button className={twMerge(baseStyles)}>
          <LinkedInLogo className="size-6" />
        </button>
        <button className={twMerge(baseStyles)}>
          <WhatsAppLogo className="size-6" />
        </button>
        <button className={twMerge(baseStyles)}>
          <FacebookLogo className="size-6" />
        </button>
        <button className={twMerge(baseStyles)}>
          <TelegramLogo className="size-6" />
        </button>
      </div>
    </div>
  );
}

// <button className="p-2 rounded-full bg-transparent text-gray-dark-1000 hover:text-gray-dark-1200 hover:bg-blue-500">
//           <TwitterLogo className="size-4" />
//         </button>
//         <button className="p-2 rounded-full bg-transparent text-gray-dark-1000 hover:text-gray-dark-1200 hover:bg-blue-800">
//           <TwitterLogo className="size-4" />
//         </button>
//         <button className="p-2 rounded-full bg-transparent text-gray-dark-1000 hover:text-gray-dark-1200 hover:bg-green-500">
//           <TwitterLogo className="size-4" />
//         </button>
//         <button className="p-2 rounded-full bg-transparent text-gray-dark-1000 hover:text-gray-dark-1200 hover:bg-blue-500">
//           <TwitterLogo className="size-4" />
//         </button>
