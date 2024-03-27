'use client';

import SearchMini from './SearchMini';
import Filters from './Filters';

export default function Aside() {
  return (
    <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative shrink-0">
      <div className="sticky top-16">
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <SearchMini />
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <Filters name="sizes" />
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <Filters name="processes" />
        </div>
      </div>
    </aside>
  );
}
