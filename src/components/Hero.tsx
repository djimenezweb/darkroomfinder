import Search from './search/Search';

export default function Hero() {
  return (
    <section className="sm:py-18 container relative mx-auto overflow-hidden px-6 py-16 pt-8 md:py-24 md:pt-16 lg:px-16 lg:py-24 xl:px-20">
      <div className="pt-20 text-center">
        <h1 className="text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
          <span className="block bg-gradient-to-b from-gray-dark-1200 to-gray-dark-1100 bg-clip-text text-transparent">
            Find your
          </span>
          <span className="block bg-gradient-to-b from-red-600 to-red-800 bg-clip-text text-transparent">
            perfect lab
          </span>
        </h1>
        <p className="my-3 pt-2 text-sm sm:mt-5 sm:text-base lg:mb-0 lg:text-lg">
          Discover the darkroom that suits your needs
        </p>
      </div>
      <div>
        <Search />
      </div>
    </section>
  );
}
