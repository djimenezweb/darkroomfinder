import localFont from 'next/font/local';

const circular = localFont({
  src: [
    {
      path: './fonts/circular-400-book.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/circular-500-medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: 'Arial'
});

export { circular };
