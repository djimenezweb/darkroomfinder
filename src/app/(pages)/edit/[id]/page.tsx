import { authOptions } from '@/utils/authOptions';
import { getLabById } from '@/utils/getLabById';
import { getServerSession } from 'next-auth';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { notFound, redirect } from 'next/navigation';
import EditLabForm from '@/components/forms/EditLabForm';
import { TITLE } from '@/constants/metadata';
import { Types } from 'mongoose';

export function generateMetadata() {
  return {
    title: `Edit | ${TITLE}`
  };
}

export default async function EditLabPage({ params }: { params: Params }) {
  const id = params.id;

  const isValid = Types.ObjectId.isValid(id);
  if (!isValid) {
    notFound();
  }

  const session = await getServerSession(authOptions);

  // Not logged in
  if (!session) {
    redirect(`/sign-in?callbackUrl=/labs/${id}`);
  }

  const lab = await getLabById(id);

  // Not found
  if (!lab) {
    notFound();
  }

  // Unauthorized
  if (session.user.email !== lab.owner.email) {
    redirect(`/labs/${id}`);
  }

  return (
    <section>
      <div className="container relative mx-auto my-10 max-w-2xl">
        <EditLabForm lab={lab} />
      </div>
    </section>
  );
}
