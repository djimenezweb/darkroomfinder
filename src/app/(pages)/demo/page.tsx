import Link from 'next/link';

export default function FakePage() {
  return (
    <section className="pt-16 pb-8">
      <div className="max-w-[540px] mx-auto">
        <h1 className="text-2xl sm:text-4xl mt-12 mb-6">
          This is a fake website
        </h1>
        <div className="text-gray-dark-1100 text-base leading-7 space-y-5">
          <p>
            This website is a personal project to practise web development. This
            is not a real website. All the darkrooms, addresses, personal
            information, and pictures are here for testing purposes only.
          </p>
          <p>
            You are encouraged to sign in and post fake data to keep testing the
            website!
          </p>
        </div>
        <h2 className="text-gray-dark-1200 text-2xl mt-8 mb-4">Made with</h2>
        <ul>
          <li>
            <Link href="https://nextjs.org/">
              <div className="bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block cursor-pointer hover:bg-gray-dark-400 hover:border-gray-dark-600 shadow-md">
                <div className="flex gap-5">
                  <div className="shrink-0 flex items-center justify-center h-12 w-12 bg-gray-dark-100 rounded-lg text-gray-dark-1100">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 61 61"
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42.3148 48.6796C38.9009 50.9525 34.8014 52.2771 30.3924 52.2771C18.4957 52.2771 8.85156 42.6329 8.85156 30.7362C8.85156 18.8395 18.4957 9.19531 30.3924 9.19531C42.2891 9.19531 51.9333 18.8395 51.9333 30.7362C51.9333 37.1564 49.1245 42.9207 44.6688 46.8671L39.5552 40.2803V21.8278H36.584V36.4531L25.2299 21.8278H21.4808V39.6473H24.4801V25.6368L42.3148 48.6796Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Next.js</h3>
                    <p className="text-gray-dark-1100 text-sm">
                      The React Framework for the Web. Used by some of the
                      world&apos;s largest companies, Next.js enables you to
                      create high-quality web applications with the power of
                      React components.
                    </p>
                    <p className="text-gray-dark-1000 text-sm mt-2 text-right">
                      14.1.1
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>

          {technologies.map(t => (
            <li key={t.url} className="mb-4">
              <Link href={t.url}>
                <div className="bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block cursor-pointer hover:bg-gray-dark-400 hover:border-gray-dark-600 shadow-md">
                  <div className="flex gap-5">
                    <div className="shrink-0 flex items-center justify-center h-12 w-12 bg-gray-dark-100 rounded-lg text-gray-dark-1100">
                      X
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl mb-2">{t.title}</h3>
                      <p className="text-gray-dark-1100 text-sm">
                        {t.description}
                      </p>
                      <p className="text-gray-dark-1000 text-sm mt-2 text-right">
                        {t.version}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const technologies = [
  {
    url: 'https://nextjs.org/',
    npm: 'next',
    title: 'Next.js',
    description:
      "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    version: '14.1.1',
    logo: ''
  },
  {
    url: 'https://react.dev/',
    npm: 'react-dom',
    title: 'React',
    description:
      'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.',
    version: '18.2.0',
    logo: ''
  },
  {
    url: 'https://next-auth.js.org/',
    npm: 'next-auth',
    title: 'NextAuth.js',
    description:
      'NextAuth.js is a complete open-source authentication solution for Next.js applications. It is designed from the ground up to support Next.js and Serverless.',
    version: '4.24.7',
    logo: ''
  },
  {
    url: 'https://www.mongodb.com/',
    npm: '',
    title: 'MongoDB',
    description:
      'MongoDB Atlas is the only multi-cloud developer data platform that accelerates and simplifies how you build with data.',
    version: '',
    logo: ''
  },
  {
    url: 'https://mongoosejs.com/',
    npm: 'mongoose',
    title: 'Mongoose',
    description:
      'Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.',
    version: '8.2.0',
    logo: ''
  },
  {
    url: 'https://www.typescriptlang.org/',
    npm: 'typescript',
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    version: '5.3.3',
    logo: ''
  },
  {
    url: 'https://tailwindcss.com/',
    npm: 'tailwindcss',
    title: 'Tailwind CSS',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
    version: '3.3.0',
    logo: ''
  },
  {
    url: 'https://cloudinary.com/',
    npm: '',
    title: 'Cloudinary',
    description:
      'Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.',
    version: '',
    logo: ''
  },
  {
    url: '',
    npm: '',
    title: '',
    description: '',
    version: '',
    logo: ''
  },
  {
    url: '',
    npm: '',
    title: '',
    description: '',
    version: '',
    logo: ''
  }
];

{
  /* <div className="flex gap-4">
                    
                    <div>
                      <p className="text-sm"></p>
                      <p className="mt-2 text-sm text-gray-dark-1100">
                        
                      </p>
                      
                      
                    </div>
                  </div> */
}
