import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ContainerWithBorder({
  children,
  className,
  transparent
}: {
  children: ReactNode;
  className?: string;
  transparent?: boolean;
}) {
  return (
    <div
      className={twMerge(
        'rounded-md border border-gray-dark-500 bg-gray-dark-300 p-5',
        className,
        transparent && 'bg-transparent hover:bg-gray-dark-300'
      )}
    >
      {children}
    </div>
  );
}
