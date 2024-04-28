import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import defaultProfile from '/public/images/default_profile.png';
import ContainerWithBorder from '@/components/ContainerWithBorder';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/buttons/BackButton';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import { TITLE } from '@/constants/metadata';

export function generateMetadata() {
  return {
    title: `Profile | ${TITLE}`
  };
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in');
  }

  const profilePicture = session.user.image || defaultProfile;

  const inputStyle =
    'w-full rounded-md shadow-sm text-gray-dark-1200 outline-none placeholder-gray-dark-900 bg-gray-dark-1200/[.026] border border-gray-dark-600 text-sm px-4 py-2 opacity-50';

  return (
    <div className="h-full md:grid md:grid-cols-[10rem_1fr] lg:grid-cols-[13rem_1fr] xl:grid-cols-[16rem_1fr]">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>
      <div className="mx-auto mb-16 w-full max-w-3xl grow space-y-8 p-5">
        <ContainerWithBorder>
          <h3 className="mb-8 text-base">Profile Information</h3>
          <div className="space-y-2">
            <div className="grid gap-2 text-sm md:grid md:grid-cols-12">
              <div className="col-span-4 flex flex-col space-y-2">
                <label
                  htmlFor="username"
                  className="text-sm text-gray-dark-1100"
                >
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
                  className={inputStyle}
                />
              </div>
            </div>
            <div className="grid gap-2 text-sm md:grid md:grid-cols-12">
              <div className="col-span-4 flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm text-gray-dark-1100">
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
                  className={inputStyle}
                />
              </div>
            </div>
          </div>
        </ContainerWithBorder>

        <ContainerWithBorder>
          <div className="grid gap-2 text-sm md:grid md:grid-cols-12">
            <h3 className="col-span-4 mb-8 text-base">Profile picture</h3>
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
      </div>
    </div>
  );
}
