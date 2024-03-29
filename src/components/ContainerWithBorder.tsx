import { twMerge } from 'tailwind-merge';

export default function ContainerWithBorder({
  children,
  className,
  transparent
}: {
  children: React.ReactNode;
  className?: string;
  transparent?: boolean;
}) {
  return (
    <div
      className={twMerge(
        'bg-gray-dark-300 p-5 rounded-md border border-gray-dark-500',
        className,
        transparent && 'bg-transparent hover:bg-gray-dark-300'
      )}>
      {children}
    </div>
  );
}
