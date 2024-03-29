import { SVGProps } from 'react';

export default function CloseMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="block w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}
