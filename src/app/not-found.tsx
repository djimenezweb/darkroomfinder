import Footer from '@/components/Footer';
import Navbar from '@/components/Nav/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export function generateMetadata() {
  return {
    title: 'Not found'
  };
}

export default async function notFound() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen grid grid-rows-layout">
      <Navbar session={session} />
      <main className="pt-16">
        <div className="h-full flex justify-center items-center">
          <div className="bg-error-200 text-error-900 border border-error-500 px-6 py-4 rounded-md flex gap-4">
            <div>
              <ExclamationTriangleIcon className="w-16 h-16" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg">Page not found</h2>
              <p className="text-sm">The requested page was not found</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
