import { ReactNode } from 'react';

export default function StickyAside({ children }: { children: ReactNode }) {
  return (
    <aside className="w-full md:max-w-64 border-r border-gray-dark-600 relative shrink-0">
      <div className="md:sticky top-16">{children}</div>
    </aside>
  );
}
