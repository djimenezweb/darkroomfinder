import { ReactNode } from 'react';

export default function AsideElementWrapper({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="border-b border-gray-dark-600 px-6 py-2.5 md:py-5">
      {children}
    </div>
  );
}
