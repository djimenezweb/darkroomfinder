import { range } from '@/utils/range';
import Aside from './Aside';

export default async function LabsLoadingPage() {
  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <Aside />
      <div className="grow p-5">
        <h4 className="text-lg">Searching darkrooms...</h4>
        <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {range(12).map(n => (
            <SkeletonLabCard key={n} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function SkeletonLabCard() {
  return (
    <div className="relative bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block h-44 overflow-hidden animate-pulse">
      <div className="flex gap-4">
        <div className="w-[150px] h-[100px] rounded-md overflow-hidden bg-gray-dark-600" />
        <div className="space-y-2">
          <p className="mt-1 bg-gray-dark-1100 w-28 h-3 rounded-full" />
          <p className="bg-gray-dark-1000 w-14 h-3 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-5 right-5 w-4 h-4 bg-gray-dark-900 rounded-full" />
      {/* <div className="absolute -top-2 left-0 w-16 h-48 bg-gray-dark-1100 rotate-12 opacity-20" /> */}
    </div>
  );
}
