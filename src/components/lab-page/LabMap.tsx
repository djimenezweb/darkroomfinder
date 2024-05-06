'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import Map, {
  FullscreenControl,
  Marker,
  NavigationControl
} from 'react-map-gl/maplibre';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import SpinnerSVG from '@/components/logos/Spinner';

export default function LabMap({ lat, lon }: { lat: number; lon: number }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (typeof process.env.NEXT_PUBLIC_MAPTILER_API_KEY === 'undefined') {
    throw new Error(
      'Environment variable NEXT_PUBLIC_MAPTILER_API_KEY is undefined'
    );
  }

  if (!lat || !lon)
    return (
      <div className="w-full">
        <div className="flex h-40 w-full items-center justify-center bg-gray-dark-400">
          <p className="text-sm text-gray-dark-900">Map not available</p>
        </div>
      </div>
    );

  return (
    <div className="relative h-80 w-full">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-dark-400">
          <SpinnerSVG className="size-12 animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-dark-400">
          <p className="text-sm">Map could not be loaded</p>
        </div>
      )}

      <Map
        initialViewState={{
          longitude: lon || 0,
          latitude: lat || 0,
          zoom: 16
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        style={{ width: '100%', height: '100%' }}
        mapLib={import('maplibre-gl')}
        mapStyle={`https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}
        attributionControl={false}
      >
        <Marker longitude={lon} latitude={lat} anchor="bottom" offset={[0, -4]}>
          <MapPinIcon className="size-8 animate-bounce text-red-600" />
        </Marker>
        <FullscreenControl />
        <NavigationControl showCompass={false} />
      </Map>
    </div>
  );
}
