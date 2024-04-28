import { ReactNode } from 'react';

export default function StickyAside({ children }: { children: ReactNode }) {
  return (
    <aside className="relative w-full shrink-0 border-r border-gray-dark-600 md:max-w-64">
      <div className="top-16 md:sticky">{children}</div>
    </aside>
  );
}
