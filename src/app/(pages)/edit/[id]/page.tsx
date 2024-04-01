import { authOptions } from '@/utils/authOptions';
import { getLabById } from '@/utils/getLabById';
import { getServerSession } from 'next-auth';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { redirect } from 'next/navigation';
import EditLabForm from '@/components/forms/EditLabForm';

export default async function EditLabPage({ params }: { params: Params }) {
  const id = params.id;
  const session = await getServerSession(authOptions);

  // Not logged in
  if (!session) {
    redirect(`/sign-in?callbackUrl=/labs/${id}`);
  }

  const lab = await getLabById(id);
  if (!lab) {
    // Redirect to notfound
    return;
  }

  //const lab = await JSON.parse(JSON.stringify(data));

  // Unauthorized
  if (session.user.email !== lab.owner.email) {
    redirect(`/labs/${id}`);
  }

  return (
    <section className="pt-16">
      <div className="container relative mx-auto my-10 max-w-2xl">
        <EditLabForm lab={lab} />
      </div>
    </section>
  );
}
