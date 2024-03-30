import { getLabById } from '@/utils/getLabById';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import LabMap from './LabMap';
import { sizes, processes } from '@/constants/lab-options';
import Link from 'next/link';
import Carousel from './Carousel';
import ContainerWithBorder from '@/components/ContainerWithBorder';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/BackButton';
import EditButton from '@/components/EditButton';
import { redirect } from 'next/navigation';

export default async function DarkroomPage({ params }: { params: Params }) {
  const id: string = params.id;
  const lab = await getLabById(id);

  // Not found
  if (!lab) {
    // Redirect to notfound
    return;
  }

  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <StickyAside>
        <BackButton />
        <EditButton id={id} />
      </StickyAside>
      <div className="p-5 ml-32 grow max-w-2xl space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl mb-4">{lab.name}</h1>
          <div className="text-gray-dark-1100">
            <p className="text-sm">
              {lab.location.address}, {lab.location.city}
            </p>
          </div>
        </div>
        <ContainerWithBorder>
          <p className="text-base text-gray-dark-1100">{lab.description}</p>
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
                    {processes.find(item => item.id === process)?.longName}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ContainerWithBorder>

        <Carousel images={lab.images} />

        <ContainerWithBorder>
          <div className="rounded-md overflow-hidden">
            <LabMap lat={lab.location.latitude} lon={lab.location.longitude} />
          </div>
          <p className="text-xs text-gray-dark-1100 text-right">
            powered by{' '}
            <Link href="https://maplibre.org/" target="_blank">
              MapLibre
            </Link>
            {' | '}
            <Link href="https://www.maptiler.com/copyright/" target="_blank">
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
      </div>
    </section>
  );
}
