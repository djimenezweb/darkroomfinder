import LabCard from '@/components/LabCard';
import Link from 'next/link';
import { getLabs } from '@/utils/getLabs';
import Pagination from '@/components/search/Pagination';
import StickyAside from '@/components/StickyAside';
import SearchMini from '@/components/search/SearchMini';
import Filters from '@/components/search/Filters';
import SearchResultsHeading from '@/components/SearchResultsHeading';

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
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <StickyAside
        items={[
          <SearchMini key={'searchKey' + query} />,
          <Filters name="sizes" key={'sizesKey' + sizes} />,
          <Filters name="processes" key={'processesKey' + processes} />
        ]}
      />

      <div className="grow p-5">
        <SearchResultsHeading
          length={labs.length}
          from={showingFrom}
          to={showingTo}
          total={totalResults}
          query={query}
        />

        {labs.length > 0 && (
          <>
            <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {labs.map(lab => (
                <li key={lab._id}>
                  <Link href={`/lab/${lab._id}`}>
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
    </section>
  );
}
