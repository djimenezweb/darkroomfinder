import LabCard from '@/components/LabCard';
import Link from 'next/link';
import { getLabs } from '@/utils/getLabs';
import Pagination from './Pagination';
import StickyAside from '@/components/StickyAside';
import SearchMini from './SearchMini';
import Filters from './Filters';

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

  if (labs.length === 0)
    return (
      <section className="pt-16 min-h-screen relative flex items-stretch">
        <StickyAside>
          <div className="py-5 px-6 border-b border-gray-dark-600">
            <SearchMini />
          </div>
          <div className="py-5 px-6 border-b border-gray-dark-600">
            <Filters name="sizes" />
          </div>
          <div className="py-5 px-6 border-b border-gray-dark-600">
            <Filters name="processes" />
          </div>
        </StickyAside>

        <div className="grow p-5">
          <h4 className="text-lg">No labs found</h4>
        </div>
      </section>
    );

  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <StickyAside>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <SearchMini />
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <Filters name="sizes" />
        </div>
        <div className="py-5 px-6 border-b border-gray-dark-600">
          <Filters name="processes" />
        </div>
      </StickyAside>
      <div className="grow p-5">
        <h4 className="text-lg text-gray-dark-1200">
          <span>
            Showing {showingFrom}-{showingTo} of {totalResults}{' '}
            {totalResults === 1 ? 'darkroom' : 'darkrooms'}
          </span>
          {query && (
            <span>
              {' '}
              for <span className="text-red-500">{`"${query}"`}</span>
            </span>
          )}
        </h4>
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
      </div>
    </section>
  );
}
