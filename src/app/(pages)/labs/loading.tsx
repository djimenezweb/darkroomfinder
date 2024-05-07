import { range } from '@/utils/range';
import { RESULTS_PER_PAGE } from '@/constants/search-options';
import StickyAside from '@/components/StickyAside';
import SearchMini from '@/components/search/SearchMini';
import Filters from '@/components/search/Filters';
import SkeletonLabCard from '@/components/skeletons/LabCardSkeleton';
import { TITLE } from '@/constants/metadata';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';
import { Suspense } from 'react';

export function generateMetadata() {
  return {
    title: `Loading... | ${TITLE}`
  };
}

export default async function LabsLoadingPage() {
  return (
    <>
      <div className="relative h-full md:flex md:items-stretch">
        <StickyAside>
          <AsideElementWrapper>
            <Suspense>
              <SearchMini />
            </Suspense>
          </AsideElementWrapper>
          <AsideElementWrapper>
            <Suspense>
              <Filters name="sizes" />
            </Suspense>
          </AsideElementWrapper>
          <AsideElementWrapper>
            <Suspense>
              <Filters name="processes" />
            </Suspense>
          </AsideElementWrapper>
        </StickyAside>

        <div className="max-w-screen-2xl grow p-5">
          <h2 className="animate-pulse text-lg">Searching darkrooms...</h2>

          <ul className={twMerge(styles.labsGrid)}>
            {range(RESULTS_PER_PAGE).map((n) => (
              <SkeletonLabCard key={n} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
