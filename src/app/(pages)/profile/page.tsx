import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import defaultProfile from '/public/images/default_profile.png';
import ContainerWithBorder from '@/components/ContainerWithBorder';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/BackButton';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  // console.log('🚀 ~ ProfilePage ~ session:', session);

  if (!session) {
    redirect('/sign-in');
  }

  const profilePicture = session.user.image || defaultProfile;

  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <StickyAside>
        <BackButton />
      </StickyAside>
      <div className="p-5 grow max-w-3xl space-y-8">
        <ContainerWithBorder>
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
          </div>
        </ContainerWithBorder>

        <ContainerWithBorder>
          <div className="text-sm grid gap-2 md:grid md:grid-cols-12">
            <h3 className="mb-8 text-base col-span-4">Profile picture</h3>
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
        </ContainerWithBorder>

        <ContainerWithBorder className="border-error-500">
          <h3 className="mb-8 text-base">Delete account</h3>
          <div className="space-y-2">
            <p className="text-gray-dark-1000 text-sm">
              Warning! You will lose access to your Darkroom Finder account once
              your deletion request has been submitted.
            </p>
          </div>
        </ContainerWithBorder>
      </div>
    </section>
  );
}
