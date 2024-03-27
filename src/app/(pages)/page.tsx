import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Image from 'next/image';
import Link from 'next/link';

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
            src="/images/pexels-annushka-ahuja-8114061.jpg"
            alt="Person Developing a Photograph in a Darkroom"
            width={1200}
            height={800}
          />
          <figcaption className="absolute bottom-2 right-2 text-xs text-gray-dark-1100">
            <Link href="https://www.pexels.com/photo/person-developing-a-photograph-in-the-darkroom-8114061/">
              Annushka Ahuja | Pexels
            </Link>
          </figcaption>
        </figure>
      </section>

      {/* <figure>
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
      </figure> */}
    </>
  );
}
