import cloudinary from '../../public/images/logos/cloudinary.png';
import maplibre from '../../public/images/logos/maplibre.png';
import maptiler from '../../public/images/logos/maptiler.png';
import mongodb from '../../public/images/logos/mongodb.png';
import mongoose from '../../public/images/logos/mongoose.png';
import nextWhite from '../../public/images/logos/next_white.png';
import nextauth from '../../public/images/logos/nextauth.png';
import npm from '../../public/images/logos/npm.png';
import react from '../../public/images/logos/react.png';
import tailwindcss from '../../public/images/logos/tailwindcss.png';
import tailwindMerge from '../../public/images/logos/tailwind-merge.png';
import typescript from '../../public/images/logos/typescript.png';
import reactDropzone from '../../public/images/logos/react-dropzone.png';
import zod from '../../public/images/logos/zod.png';
import vercel from '../../public/images/logos/vercel.png';

export const technologies = [
  {
    url: 'https://nextjs.org/',
    npm: 'next',
    title: 'Next.js',
    description:
      "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
    version: '14.1.1',
    logo: nextWhite
  },
  {
    url: 'https://react.dev/',
    npm: 'react-dom',
    title: 'React',
    description:
      'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.',
    version: '18.2.0',
    logo: react
  },
  {
    url: 'https://next-auth.js.org/',
    npm: 'next-auth',
    title: 'NextAuth.js',
    description:
      'NextAuth.js is a complete open-source authentication solution for Next.js applications. It is designed from the ground up to support Next.js and Serverless.',
    version: '4.24.7',
    logo: nextauth
  },
  {
    url: 'https://www.mongodb.com/',
    npm: '',
    title: 'MongoDB',
    description:
      'MongoDB Atlas is the only multi-cloud developer data platform that accelerates and simplifies how you build with data.',
    version: '',
    logo: mongodb
  },
  {
    url: 'https://mongoosejs.com/',
    npm: 'mongoose',
    title: 'Mongoose',
    description:
      'Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.',
    version: '8.2.0',
    logo: mongoose
  },
  {
    url: 'https://www.typescriptlang.org/',
    npm: 'typescript',
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    version: '5.3.3',
    logo: typescript
  },
  {
    url: 'https://tailwindcss.com/',
    npm: 'tailwindcss',
    title: 'Tailwind CSS',
    description:
      'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
    version: '3.3.0',
    logo: tailwindcss
  },
  {
    url: 'https://cloudinary.com/',
    npm: 'cloudinary',
    title: 'Cloudinary',
    description:
      'Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.',
    version: '2.0.3',
    logo: cloudinary
  },
  {
    url: 'https://zod.dev/',
    npm: 'zod',
    title: 'Zod',
    description:
      'TypeScript-first schema validation with static type inference',
    version: '3.22.4',
    logo: zod
  },
  {
    url: 'https://react-dropzone.js.org/',
    npm: 'react-dropzone',
    title: 'React-Dropzone',
    description:
      "Simple React hook to create a HTML5-compliant drag'n'drop zone for files.",
    version: '14.2.3',
    logo: reactDropzone
  },
  {
    url: 'https://www.npmjs.com/package/clsx',
    npm: 'clsx',
    title: 'clsx',
    description:
      'A tiny utility for constructing className strings conditionally.',
    version: '2.1.0',
    logo: npm
  },
  {
    url: 'https://www.npmjs.com/package/tailwind-merge',
    npm: 'tailwind-merge',
    title: 'tailwind-merge',
    description:
      'Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.',
    version: '2.2.1',
    logo: tailwindMerge
  },
  {
    url: 'https://www.maptiler.com/',
    npm: '',
    title: 'MapTiler',
    description:
      'Mapping platform designed for developers. Publish interactive maps in your web applications and on mobile devices.',
    version: '',
    logo: maptiler
  },
  {
    url: 'https://maplibre.org/maplibre-gl-js/docs/',
    npm: 'maplibre-gl',
    title: 'MapLibre GL JS',
    description:
      'MapLibre GL JS is an open-source library for publishing maps on your websites or webview based apps. Fast displaying of maps is possible thanks to GPU-accelerated vector tile rendering.',
    version: '4.1.1',
    logo: maplibre
  },
  {
    url: 'https://www.npmjs.com/package/react-map-gl',
    npm: 'react-map-gl',
    title: 'react-map-gl',
    description:
      'react-map-gl is a suite of React components designed to provide a React API for Mapbox GL JS-compatible libraries.',
    version: '7.1.7',
    logo: npm
  },
  {
    url: 'https://vercel.com/home',
    npm: '',
    title: 'Vercel',
    description:
      "Vercel's Frontend Cloud provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized web.",
    version: '',
    logo: vercel
  }
];
