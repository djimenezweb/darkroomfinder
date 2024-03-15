import { fetchLabs } from '@/utils/fetchLabs';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import testImage from '../../../../public/images/test_9243.jpg';

//
//
//
//
// MIRAR ESTOS BOTONCITOS: https://supabase.com/storage
//
//
//
//

export default async function Labs() {
  const labs = await fetchLabs();

  return (
    <section className="pt-16 h-screen relative flex items-stretch">
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

      <div className="grow p-5">
        <h4 className="text-lg">Results for xxx </h4>
        {labs.length === 0 && <p>No labs found</p>}

        <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {labs.map(labs => (
            <li key={labs._id}>
              <Link href="/">
                <div className="relative bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block cursor-pointer hover:bg-gray-dark-400 hover:border-gray-dark-600 h-44">
                  <div className="flex gap-4">
                    <Image
                      src={testImage}
                      alt={labs.name}
                      width={150}
                      height={100}
                      className="rounded-md overflow-hidden"
                    />
                    <div>
                      <p className="text-sm">{labs.name}</p>
                      <p className="mt-2 text-sm text-gray-dark-1100">
                        {labs.location.street}
                      </p>
                      <p className="text-sm text-gray-dark-1100">
                        {labs.location.city}
                      </p>
                      <p className="text-sm text-gray-dark-1100">
                        {labs.rates.hour ||
                          labs.rates.session ||
                          labs.rates.day ||
                          labs.rates.week}
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon className="absolute bottom-5 right-5 w-4 h-4 text-gray-dark-1000" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
