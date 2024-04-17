import FeaturedLabs from '@/components/FeaturedLabs';
import Hero from '@/components/Hero';
import Join from '@/components/Join';
import Partners from '@/components/Partners';

export default async function Home() {
  return (
    <>
      <Hero />

      <Partners />

      <FeaturedLabs />

      <Join />
    </>
  );
}
