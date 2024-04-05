import { ReactNode } from 'react';

export default function AsideElementWrapper({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="py-5 px-6 border-b border-gray-dark-600">{children}</div>
  );
}
