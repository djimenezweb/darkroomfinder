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
        <div className="w-full h-40 bg-gray-dark-400 flex justify-center items-center">
          <p className="text-sm text-gray-dark-900">Map not available</p>
        </div>
      </div>
    );

  return (
    <div className="w-full h-80 relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-gray-dark-400">
          <SpinnerSVG className="size-12 animate-spin" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-20 flex justify-center items-center bg-gray-dark-400">
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
        // mapStyle="./maptiler-style.json"
        mapStyle={`https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}
        attributionControl={false}>
        <Marker longitude={lon} latitude={lat} anchor="bottom" offset={[0, -4]}>
          <MapPinIcon className="text-red-600 size-8 animate-bounce" />
        </Marker>
        <FullscreenControl />
        <NavigationControl showCompass={false} />
      </Map>
    </div>
  );
}

// 5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2
// mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}>
// https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=GnkPvo6GfRC5rLKbXjam
