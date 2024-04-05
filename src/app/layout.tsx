import type { Metadata } from 'next';
import '../styles/globals.css';
import { circular } from '../styles/fonts';
import { TITLE } from '@/constants/metadata';

export const metadata: Metadata = {
  title: TITLE,
  description: 'Find your perfect lab to develop and enlarge your photos',
  keywords: 'analog, darkroom, film, laboratory, lab, enlarger'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-gray-dark-200 text-gray-dark-1200 text-lg ${circular.className}`}>
        {children}
      </body>
    </html>
  );
}
