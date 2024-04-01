import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AddLabForm from '@/components/forms/AddLabForm';

export default async function AddLab() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in?callbackUrl=/addlab');
  }

  return (
    <section className="pt-16">
      <div className="container relative mx-auto my-10 max-w-2xl">
        <AddLabForm />
      </div>
    </section>
  );
}
