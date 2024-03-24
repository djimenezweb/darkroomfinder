'use client';

import 'maplibre-gl/dist/maplibre-gl.css';
import Link from 'next/link';
import Map, { Marker } from 'react-map-gl/maplibre';

export default function LabMap({ lat, lon }: { lat: number; lon: number }) {
  return (
    <div className="w-[600px]">
      <Map
        initialViewState={{
          longitude: lon,
          latitude: lat,
          zoom: 16
        }}
        style={{ width: 600, height: 400 }}
        mapLib={import('maplibre-gl')}
        mapStyle={`https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}>
        <Marker longitude={lon} latitude={lat} anchor="bottom">
          <div className="rounded-full bg-red-600 w-4 h-4 animate-pulse" />
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

// mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`}>
// https://api.maptiler.com/maps/5cde18f8-54d9-4506-b93a-4ffa7a3aeaa2/style.json?key=GnkPvo6GfRC5rLKbXjam
