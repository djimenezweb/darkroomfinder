import { randomImages } from '@/constants/randomImages';
import { random } from '@/utils/random';
import Image from 'next/image';
import Link from 'next/link';

export default function Join() {
  const selectedPicture = randomImages[random(0, randomImages.length)];

  return (
    <section className="flex flex-col lg:flex-row py-16 sm:py-18 md:py-24">
      <div className="basis-1/2 flex flex-col justify-center">
        <div className="m-auto px-4 sm:px-0 lg:ml-auto lg:mr-16 max-w-sm flex flex-col justify-center gap-8">
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
        <figcaption className="absolute bottom-2 right-2 cursor-pointer text-center text-xs px-2.5 py-1 border text-gray-dark-1100 border-gray-dark-700 hover:text-gray-dark-1200 bg-gray-dark-300/75 hover:bg-gray-dark-600 hover:border-gray-dark-900 rounded shadow-sm ">
          <Link href={selectedPicture.link}>{selectedPicture.credits}</Link>
        </figcaption>
      </figure>
    </section>
  );
}
