export default function Aside() {
  return (
    <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative">
      <div className="sticky top-16">
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <p className="text-sm text-gray-dark-1000 mb-2">Sizes</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                35 mm
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                35 mm
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                medium format
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                large format
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                submin
              </button>
            </li>
          </ul>
        </div>

        <div className="py-5 px-6 border-b border-gray-dark-600">
          <p className="text-sm text-gray-dark-1000 mb-2">Processes</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-1">
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                b/w
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                color C41
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                color E6
              </button>
            </li>
            <li>
              <button className="cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1">
                RA-4 printing
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

//
//
//
//
// MIRAR ESTOS BOTONCITOS: https://supabase.com/storage
//
//
//
//
