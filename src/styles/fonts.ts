import localFont from 'next/font/local';

const circular = localFont({
  src: [
    {
      path: './fonts/circular-300-light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/circular-300-light-italic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      //path: './fonts/circular-400-book.woff2',
      path: './fonts/CustomFont-Book.54303b32.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/circular-400-book-italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      //path: './fonts/circular-500-medium.woff2',
      path: './fonts/CustomFont-Medium.0cc7d245.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/circular-500-medium-italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/circular-700-bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/circular-700-bold-italic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/circular-900-black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/circular-900-black-italic.woff2',
      weight: '900',
      style: 'italic'
    }
  ]
});

export { circular };
