import { randomImages } from '@/constants/randomImages';
import { styles } from '@/styles/styles';
import { random } from '@/utils/random';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function Join() {
  const selectedPicture = randomImages[random(0, randomImages.length)];

  return (
    <section className="sm:py-18 flex flex-col py-16 md:py-24 lg:flex-row">
      <div className="flex basis-1/2 flex-col justify-center">
        <div className="m-auto flex max-w-sm flex-col justify-center gap-8 px-4 sm:px-0 lg:ml-auto lg:mr-16">
          <h2 className="text-center text-3xl">Join the community</h2>
          <p className="mb-8 text-base text-gray-dark-1100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut illo
            consequuntur, enim cumque voluptas id veritatis odit laudantium.
          </p>
        </div>
      </div>

      <figure className="relative basis-1/2">
        <Image
          priority
          src={selectedPicture.src}
          alt={selectedPicture.alt}
          width={1200}
          height={800}
        />
        <figcaption
          className={twMerge(
            styles.tag.xs,
            styles.tag.button.base,
            'absolute bottom-2 right-2',
            'text-gray-dark-1100 hover:text-gray-dark-1200',
            'bg-gray-dark-300/75 hover:bg-gray-dark-600',
            'border-gray-dark-700 hover:border-gray-dark-900'
          )}
        >
          <Link href={selectedPicture.link}>{selectedPicture.credits}</Link>
        </figcaption>
      </figure>
    </section>
  );
}
