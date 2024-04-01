export default function StickyAside({ items }: { items: JSX.Element[] }) {
  return (
    <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative shrink-0">
      <div className="sticky top-16">
        {items &&
          items.map(item => (
            <div
              key={item.key}
              className="py-5 px-6 border-b border-gray-dark-600">
              {item}
            </div>
          ))}
      </div>
    </aside>
  );
}

{
  /* <div className="sticky top-16">{children}</div> */
}
