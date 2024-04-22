import FeaturedLabs from '@/components/FeaturedLabs';
import Hero from '@/components/Hero';
import Join from '@/components/Join';
import Partners from '@/components/Partners';
import FeaturedLabsSkeleton from '@/components/skeletons/FeaturedLabsSkeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <Hero />

      <Partners />

      <Suspense fallback={<FeaturedLabsSkeleton />}>
        <FeaturedLabs />
      </Suspense>

      <Join />
    </>
  );
}
