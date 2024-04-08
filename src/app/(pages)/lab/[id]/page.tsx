import { getLabById } from '@/utils/getLabById';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import LabMap from '@/components/LabMap';
import { sizes, processes } from '@/constants/lab-options';
import Link from 'next/link';
import Carousel from '@/components/carousel/Carousel';
import ContainerWithBorder from '@/components/ContainerWithBorder';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/buttons/BackButton';
import EditButton from '@/components/buttons/EditButton';
import { notFound } from 'next/navigation';
import FavButton from '@/components/buttons/FavButton';
import { MapPinIcon } from '@heroicons/react/16/solid';
import Share from '@/components/Share';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import { TITLE } from '@/constants/metadata';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { getIsFav } from '@/utils/getIsFav';
import { formatDate } from '@/utils/formatDate';

export async function generateMetadata({ params }: { params: Params }) {
  const id: string = params.id;
  const lab = await getLabById(id);
  return {
    title: `${lab?.name} | ${TITLE}`
  };
}

export default async function DarkroomPage({ params }: { params: Params }) {
  const id: string = params.id;
  const lab = await getLabById(id);

  // Not found
  if (!lab) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  const isFav = await getIsFav(id, session?.user?.email);
  //console.log('🚀 ~ DarkroomPage ~ isFav:', isFav);

  return (
    <section className="relative flex items-stretch">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>
      <div className="p-5 grow">
        <div className="mx-auto max-w-3xl space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl mb-4">{lab.name}</h1>
            <span className="inline-flex gap-2 text-sm text-gray-dark-1100 hover:text-gray-dark-1200">
              <MapPinIcon className="size-4" />
              <Link href="#map" replace={true}>
                {lab.location.address}, {lab.location.city}
              </Link>
            </span>
          </div>

          <div className="flex gap-12 items-start">
            <div className="space-y-4 pb-16">
              <ContainerWithBorder>
                <p className="text-base text-gray-dark-1100">
                  {lab.description}
                </p>
              </ContainerWithBorder>
              <ContainerWithBorder className="text-sm space-y-4">
                <div className="flex">
                  <p className="text-sm text-gray-dark-1000 min-w-32 shrink-0">
                    Sizes
                  </p>
                  <ul className="flex gap-2 flex-wrap">
                    {lab.sizes.map(size => (
                      <li key={size}>
                        <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                          {sizes.find(item => item.id === size)?.fullName}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex">
                  <p className="text-sm text-gray-dark-1000 min-w-32 shrink-0">
                    Processes
                  </p>
                  <ul className="flex gap-2 flex-wrap">
                    {lab.processes.map(process => (
                      <li key={process}>
                        <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                          {
                            processes.find(item => item.id === process)
                              ?.longName
                          }
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ContainerWithBorder>
              <div className="min-h-[262px]">
                <Carousel images={lab.images} />
              </div>
              <ContainerWithBorder>
                <div
                  className="rounded-md overflow-hidden scroll-mt-16"
                  id="map">
                  <LabMap
                    lat={lab.location.latitude}
                    lon={lab.location.longitude}
                  />
                </div>
                <p className="text-xs text-gray-dark-1100 text-right">
                  powered by{' '}
                  <Link href="https://maplibre.org/" target="_blank">
                    MapLibre
                  </Link>
                  {' | '}
                  <Link
                    href="https://www.maptiler.com/copyright/"
                    target="_blank">
                    MapTiler
                  </Link>
                  {' | '}
                  <Link
                    href="https://www.openstreetmap.org/copyright"
                    target="_blank">
                    OpenStreetMap
                  </Link>
                </p>
              </ContainerWithBorder>

              {lab.updatedAt && (
                <p className="py-4 text-right text-sm text-gray-dark-1000">
                  Last edited:{' '}
                  <span className="text-gray-dark-1100">
                    {formatDate(lab.updatedAt)}
                  </span>
                </p>
              )}
            </div>
            <div className="shrink-0 space-y-8">
              <FavButton
                initialState={isFav}
                labId={id}
                email={session?.user?.email}
              />
              {session?.user && <EditButton id={id} />}
              <Share id={id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
