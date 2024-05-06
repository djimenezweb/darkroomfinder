import Navbar from '@/components/Nav/Navbar';
import Footer from '@/components/Footer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import { ReactNode } from 'react';

export default async function PagesLayout({
  children
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid min-h-screen grid-cols-layout grid-rows-layout">
      <Navbar session={session} />
      <main className="pt-[--header-height]">{children}</main>
      <Footer />
    </div>
  );
}
