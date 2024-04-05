import { RESULTS_PER_PAGE } from '@/constants/search-options';
import { range } from '@/utils/range';
import LabCardSkeleton from './LabCardSkeleton';

export default function LabsSkeleton() {
  return (
    <div className="grow p-5">
      <h2 className="text-lg animate-pulse">Searching darkrooms...</h2>
      <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {range(RESULTS_PER_PAGE).map(n => (
          <LabCardSkeleton key={n} />
        ))}
      </ul>
    </div>
  );
}
