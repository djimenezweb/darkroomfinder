import Navbar from '@/components/Nav/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import AuthProvider from '@/components/providers/AuthProvider';

export default async function PagesLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-layout grid-rows-layout">
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <main className="pt-[--header-height]">{children}</main>
      <Footer />
    </div>
  );
}
