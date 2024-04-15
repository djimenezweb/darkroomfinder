import { ReactNode } from 'react';

export default function AsideElementWrapper({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="py-2.5 md:py-5 px-6 border-b border-gray-dark-600">
      {children}
    </div>
  );
}
