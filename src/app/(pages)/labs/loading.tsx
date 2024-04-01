import { range } from '@/utils/range';
import { RESULTS_PER_PAGE } from '@/constants/search-options';
import StickyAside from '@/components/StickyAside';
import SearchMini from '@/components/search/SearchMini';
import Filters from '@/components/search/Filters';
import SkeletonLabCard from '@/components/skeletons/SkeletonLabCard';

export default async function LabsLoadingPage() {
  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <StickyAside
        items={[
          <SearchMini key="searchKey" />,
          <Filters name="sizes" key="sizesKey" />,
          <Filters name="processes" key="processesKey" />
        ]}
      />

      <div className="grow p-5">
        <h2 className="text-lg animate-pulse">Searching darkrooms...</h2>
        <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {range(RESULTS_PER_PAGE).map(n => (
            <SkeletonLabCard key={n} />
          ))}
        </ul>
      </div>
    </section>
  );
}
