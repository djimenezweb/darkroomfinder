import LabCard from '@/components/LabCard';
import { fetchLabs } from '@/utils/fetchLabs';
import Link from 'next/link';
import Aside from './Aside';
import { getLabs } from '@/utils/getLabs';
import Pagination from './Pagination';

export default async function Labs({
  searchParams
}: {
  searchParams: { page?: string; query?: string };
}) {
  const page = Number(searchParams?.page) || 1;
  const query = searchParams?.query;
  //const { labs, totalResults, showingFrom, showingTo } = await fetchLabs(page);
  const { labs, totalResults, showingFrom, showingTo } = await getLabs(
    page,
    query
  );

  if (labs.length === 0) return <p>No labs found</p>;

  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <Aside />
      <div className="grow p-5">
        <h4 className="text-lg">
          {totalResults} darkrooms found. Showing from {showingFrom} to{' '}
          {showingTo}
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
