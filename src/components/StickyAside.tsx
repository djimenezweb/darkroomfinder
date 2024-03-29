export default function StickyAside({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative shrink-0">
      <div className="sticky top-16">{children}</div>
    </aside>
  );
}
