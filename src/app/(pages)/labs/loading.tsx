import { range } from '@/utils/range';
import { RESULTS_PER_PAGE } from '@/constants/search-options';
import StickyAside from '@/components/StickyAside';
import SearchMini from '@/components/search/SearchMini';
import Filters from '@/components/search/Filters';
import SkeletonLabCard from '@/components/skeletons/LabCardSkeleton';
import { TITLE } from '@/constants/metadata';
import AsideElementWrapper from '@/components/AsideElementWrapper';

export function generateMetadata() {
  return {
    title: `Loading... | ${TITLE}`
  };
}

export default async function LabsLoadingPage() {
  return (
    <>
      <div className="h-full relative md:flex md:items-stretch">
        <StickyAside>
          <AsideElementWrapper>
            <SearchMini />
          </AsideElementWrapper>
          <AsideElementWrapper>
            <Filters name="sizes" />
          </AsideElementWrapper>
          <AsideElementWrapper>
            <Filters name="processes" />
          </AsideElementWrapper>
        </StickyAside>

        <div className="grow p-5 max-w-screen-2xl">
          <h2 className="text-lg animate-pulse">Searching darkrooms...</h2>

          <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-2 xl:grid-cols-3">
            {range(RESULTS_PER_PAGE).map(n => (
              <SkeletonLabCard key={n} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
