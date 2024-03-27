import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import defaultProfile from '/public/images/default_profile.png';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ ProfilePage ~ session:', session);

  if (!session) {
    redirect('/sign-in');
  }

  const profilePicture = session.user.image || defaultProfile;

  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative shrink-0">
        <div className="sticky top-16">
          <div className="py-5 px-6 border-b border-gray-dark-600">
            <p className="text-sm text-gray-dark-1000">Back</p>
          </div>
        </div>
      </aside>
      <div className="p-5 grow max-w-3xl space-y-8">
        <div className="bg-gray-dark-300 px-6 py-4 rounded-md border border-gray-dark-400">
          <h3 className="text-base mb-8">Profile Information</h3>
          <div className="space-y-2">
            <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
              <div className="flex flex-col space-y-2 col-span-4">
                <label
                  htmlFor="username"
                  className="text-gray-dark-1100 text-sm">
                  Username
                </label>
              </div>
              <div className="col-span-8">
                <input
                  type="text"
                  name="username"
                  id="username"
                  readOnly
                  defaultValue={session.user.name || ''}
                  className="w-full rounded-md shadow-sm text-gray-dark-1200 outline-none placeholder-gray-dark-900 bg-gray-dark-1200/[.026] border border-gray-dark-600 text-sm px-4 py-2 opacity-50"
                />
              </div>
            </div>
            <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
              <div className="flex flex-col space-y-2 col-span-4">
                <label htmlFor="email" className="text-gray-dark-1100 text-sm">
                  Email
                </label>
              </div>
              <div className="col-span-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  readOnly
                  defaultValue={session.user.email || ''}
                  className="w-full rounded-md shadow-sm text-gray-dark-1200 outline-none placeholder-gray-dark-900 bg-gray-dark-1200/[.026] border border-gray-dark-600 text-sm px-4 py-2 opacity-50"
                />
              </div>
            </div>
            <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
              <div className="flex flex-col space-y-2 col-span-4">
                <label className="text-gray-dark-1100 text-sm">
                  Profile picture
                </label>
              </div>
              <div className="col-span-8">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  className="size-12 rounded-full"
                  alt="Profile picture"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-dark-300 px-6 py-4 rounded-md border border-gray-dark-400">
          <h3 className="mb-8 text-base">Delete account</h3>
          <div className="space-y-2">
            <p className="text-gray-dark-1000 text-sm">
              Warning! You will lose access to your Darkroom Finder account once
              your deletion request has been submitted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
