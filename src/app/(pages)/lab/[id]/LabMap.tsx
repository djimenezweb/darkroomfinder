'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import Link from 'next/link';
import Map, { Marker } from 'react-map-gl/maplibre';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function LabMap({ lat, lon }: { lat: number; lon: number }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (!lat || !lon)
    return (
      <div className="w-[600px]">
        <div className="w-[300px] h-[200px] bg-gray-dark-400 flex justify-center items-center">
          <p className="text-sm text-gray-dark-900">Map not available</p>
        </div>
      </div>
    );

  return (
    <div className="w-[600px] relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-gray-dark-400">
          <p className="text-sm">Loading map...</p>
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
        style={{ width: 600, height: 400 }}
        mapLib={import('maplibre-gl')}
        mapStyle={`https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}>
        <Marker longitude={lon} latitude={lat} anchor="bottom" offset={[0, -4]}>
          {/* <div className="rounded-full bg-red-600 w-4 h-4 animate-pulse" /> */}
          <MapPinIcon className="text-red-600 size-8 animate-bounce" />
        </Marker>
      </Map>

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
    </div>
  );
}

// 5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2
// mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}>
// https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=GnkPvo6GfRC5rLKbXjam
