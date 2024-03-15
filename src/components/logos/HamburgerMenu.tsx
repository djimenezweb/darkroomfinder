import { SVGProps } from 'react';

export default function HamburgerMenu(props: SVGProps<SVGSVGElement>) {
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
        d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );
}
