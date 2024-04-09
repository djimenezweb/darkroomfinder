import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';
import { TITLE } from '@/constants/metadata';
import { getFavLabs } from '@/utils/getFavLabs';
import StickyAside from '@/components/StickyAside';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import Link from 'next/link';
import LabCard from '@/components/LabCard';
import BackButton from '@/components/buttons/BackButton';

export function generateMetadata() {
  return {
    title: `Favorite Darkrooms | ${TITLE}`
  };
}

export default async function FavsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect('/sign-in?callbackUrl=/favs');
  }

  const userWithFavs = await getFavLabs(session?.user?.email);

  if (!userWithFavs) {
    notFound();
  }

  const labs = userWithFavs.bookmarks;

  return (
    <section className="h-full flex items-stretch">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>

      <div className="grow p-5">
        <h2 className="text-lg">Saved darkrooms</h2>

        {labs.length == 0 && (
          <p className="mt-3 text-sm text-gray-dark-1100">
            You don&apos;t have any saved darkrooms.
          </p>
        )}

        {labs.length > 0 && (
          <>
            <ul className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {labs.map(lab => (
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
            {/* <Pagination totalResults={totalResults} page={page} /> */}
          </>
        )}
      </div>
    </section>
  );
}
