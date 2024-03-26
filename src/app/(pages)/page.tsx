import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Hero />

      <figure>
        <Image
          src="/images/pexels-annushka-ahuja-8114061.jpg"
          alt="Person Developing a Photograph in a Darkroom"
          width={900}
          height={600}
        />
        <figcaption className="text-xs text-gray-dark-1100">
          <Link href="https://www.pexels.com/photo/person-developing-a-photograph-in-the-darkroom-8114061/">
            Annushka Ahuja | Pexels
          </Link>
        </figcaption>
      </figure>
      <figure>
        <Image
          src="/images/pexels-annushka-ahuja-8114062.jpg"
          alt="Negative of Photograph"
          width={900}
          height={600}
        />
        <figcaption className="text-xs text-gray-dark-1100">
          <Link href="https://www.pexels.com/photo/negative-of-photograph-8114062/">
            Annushka Ahuja | Pexels
          </Link>
        </figcaption>
      </figure>
      <figure>
        <Image
          src="/images/pexels-ron-lach-10276046.jpg"
          alt="Hands Holding Negative"
          width={600}
          height={900}
        />
        <figcaption className="text-xs text-gray-dark-1100">
          <Link href="https://www.pexels.com/photo/hands-holding-negative-10276046/">
            Ron Lach | Pexels
          </Link>
        </figcaption>
      </figure>
      <figure>
        <Image
          src="/images/pexels-tima-miroshnichenko-7206194.jpg"
          alt="A Person Cutting Negative Film Strip with a Scissor"
          width={900}
          height={600}
        />
        <figcaption className="text-xs text-gray-dark-1100">
          <Link href="https://www.pexels.com/photo/a-person-cutting-negative-film-strip-with-a-scissor-7206194/">
            Tima Miroshnichenko | Pexels
          </Link>
        </figcaption>
      </figure>
      <figure>
        <Image
          src="/images/pexels-tima-miroshnichenko-7205873.jpg"
          alt="Developing Trays in the Darkroom"
          width={900}
          height={600}
        />
        <figcaption className="text-xs text-gray-dark-1100">
          <Link href="https://www.pexels.com/photo/developing-trays-in-the-darkroom-7205873/">
            Tima Miroshnichenko | Pexels
          </Link>
        </figcaption>
      </figure>
      <figure>
        <Image
          src="/images/pexels-tima-miroshnichenko-7205883.jpg"
          alt="Materials Use in Developing Film Negative"
          width={900}
          height={600}
        />
        <figcaption className="text-xs text-gray-dark-1100">
          <Link href="https://www.pexels.com/photo/materials-use-in-developing-film-negative-7205883/">
            Tima Miroshnichenko | Pexels
          </Link>
        </figcaption>
      </figure>
    </>
  );
}
