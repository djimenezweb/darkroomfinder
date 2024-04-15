import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import { randomImages } from '@/constants/randomImages';
import { random } from '@/utils/random';
import Image from 'next/image';
import Link from 'next/link';

const selectedPicture = randomImages[random(0, randomImages.length)];

export default async function Home() {
  return (
    <>
      <Hero />

      <Partners />

      <section className="flex py-16 sm:py-18 md:py-24">
        <div className="basis-1/2 flex flex-col justify-center">
          <div className="ml-auto mr-16 max-w-md flex flex-col justify-center gap-8">
            <h2 className="text-3xl text-center">Join the community</h2>
            <p className="text-gray-dark-1100 text-base mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut illo
              consequuntur, enim cumque voluptas id veritatis odit laudantium.
            </p>
          </div>
        </div>
        <figure className="basis-1/2 relative">
          <Image
            src={selectedPicture.src}
            alt={selectedPicture.alt}
            width={1200}
            height={800}
          />
          <figcaption className="absolute bottom-2 right-2 text-xs text-gray-dark-1100">
            <Link href={selectedPicture.link}>{selectedPicture.credits}</Link>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
