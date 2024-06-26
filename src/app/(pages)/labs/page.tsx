import LabCard from '@/components/LabCard';
import Link from 'next/link';
import { getLabs } from '@/utils/getLabs';
import Pagination from '@/components/search/Pagination';
import StickyAside from '@/components/StickyAside';
import SearchMini from '@/components/search/SearchMini';
import Filters from '@/components/search/Filters';
import SearchResultsHeading from '@/components/SearchResultsHeading';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import { TITLE } from '@/constants/metadata';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';
import { Suspense } from 'react';

export function generateMetadata() {
  return {
    title: TITLE
  };
}

export default async function Labs({
  searchParams
}: {
  searchParams: {
    page?: string;
    query?: string;
    sizes?: string | null;
    processes?: string | null;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const sizes = searchParams?.sizes || null;
  const processes = searchParams?.processes || null;
  const { labs, totalResults, showingFrom, showingTo } = await getLabs(
    page,
    query,
    sizes,
    processes
  );

  return (
    <div className="relative h-full md:flex md:items-stretch">
      <StickyAside>
        <AsideElementWrapper>
          <Suspense>
            <SearchMini key={'searchKey' + query} />
          </Suspense>
        </AsideElementWrapper>
        <AsideElementWrapper>
          <Suspense>
            <Filters name="sizes" key={'sizesKey' + sizes} />
          </Suspense>
        </AsideElementWrapper>
        <AsideElementWrapper>
          <Suspense>
            <Filters name="processes" key={'processesKey' + processes} />
          </Suspense>
        </AsideElementWrapper>
      </StickyAside>

      <div className="mb-16 max-w-screen-2xl grow p-5">
        <SearchResultsHeading
          length={labs.length}
          from={showingFrom}
          to={showingTo}
          total={totalResults}
          query={query}
        />

        {labs.length > 0 && (
          <>
            <ul className={twMerge(styles.labsGrid)}>
              {labs.map((lab) => (
                <li key={lab._id.toString()}>
                  <Link href={`/lab/${lab._id.toString()}`}>
                    <LabCard
                      name={lab.name}
                      city={lab.location.city}
                      picture={lab.images[0]}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Pagination totalResults={totalResults} page={page} />
          </>
        )}
      </div>
    </div>
  );
}
