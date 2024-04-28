import { twMerge } from 'tailwind-merge';

export default function Logo({ size = 'xl' }: { size?: 'xl' | '2xl' }) {
  const iconSize = { xl: 'w-5 h-5 ', '2xl': 'w-6 h-6' };
  const textSize = { xl: 'text-xl', '2xl': 'text-2xl font-medium' };

  return (
    <div className="flex select-none items-center gap-2">
      <svg
        width="48"
        height="48"
        version="1.1"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge('text-red-800', iconSize[size])}
      >
        <path
          d="m24 0a24 24 0 0 0-24 24 24 24 0 0 0 7.2879 17.143h26.565l-2.8571-17.143h-3.567v1.1429c0 1.1429-1.1429 1.1429-1.1429 1.1429h-1.1429v1.1429l-1.1429 3.4286c0 1.1429-1.1429 1.1429-1.1429 1.1429v1.1429h-4.5714v-1.1429s-1.1429-2e-6 -1.1429-1.1429l-1.1429-3.4286v-1.1429h-1.1429c-1.1429 0-1.1429-1.1429-1.1429-1.1429v-18.286c0-1.1429 1.1429-1.1429 1.1429-1.1429h11.429c1.1429 0 1.1429 1.1429 1.1429 1.1429v12.571h2.8058l-3.2054-19.23a24 24 0 0 0-3.029-0.19866zm6.5781 0.92634 6.7031 40.217h3.4308a24 24 0 0 0 7.2879-17.143 24 24 0 0 0-17.422-23.074zm-18.855 43.645a24 24 0 0 0 12.277 3.4286 24 24 0 0 0 12.277-3.4286z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>

      <span className={twMerge('text-gray-dark-1200', textSize[size])}>
        darkroomfinder
      </span>
    </div>
  );
}

{
  /* <div className="rounded-full bg-red-800 w-4 h-4" /> */
}
