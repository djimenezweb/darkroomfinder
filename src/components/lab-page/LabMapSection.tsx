import { ILocation } from '@/types/types';
import ContainerWithBorder from '../ContainerWithBorder';
import Link from 'next/link';
import LabMap from './LabMap';

export function LabMapSection({
  name,
  location
}: {
  name: string;
  location: ILocation;
}) {
  return (
    <>
      <div id="map" className="scroll-mt-16" />
      <ContainerWithBorder>
        <p className="text-sm text-gray-dark-1200">{name}</p>
        <p className="text-sm text-gray-dark-1100 mb-2">
          {location.address}, {location.postalcode}, {location.city},{' '}
          {location.country}
        </p>
        <div className="rounded-md overflow-hidden">
          <LabMap lat={location.latitude} lon={location.longitude} />
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
          <Link href="https://www.openstreetmap.org/copyright" target="_blank">
            OpenStreetMap
          </Link>
        </p>
      </ContainerWithBorder>
    </>
  );
}
