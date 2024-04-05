import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { TITLE } from '@/constants/metadata';
import AddLabForm from '@/components/forms/AddLabForm';

export function generateMetadata() {
  return {
    title: `Add Darkroom | ${TITLE}`
  };
}

export default async function AddLab() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in?callbackUrl=/addlab');
  }

  return (
    <section>
      <div className="container relative mx-auto my-10 max-w-2xl">
        <AddLabForm />
      </div>
    </section>
  );
}
