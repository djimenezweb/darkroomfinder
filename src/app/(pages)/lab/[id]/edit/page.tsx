import { authOptions } from '@/utils/authOptions';
import { getLabById } from '@/utils/getLabById';
import { getServerSession } from 'next-auth';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { redirect } from 'next/navigation';
import EditLabForm from './EditLabForm';

export default async function EditLabPage({ params }: { params: Params }) {
  const id = params.id;
  const data = await getLabById(id);
  if (!data) return;
  // Fixes "Only plain objects can be passed to Client Components from Server Components" error.
  // Thanks to https://flaviocopes.com/nextjs-serialize-date-json/
  const lab = await JSON.parse(JSON.stringify(data));
  // Redirect to notfound
  // Comprobar si usuario tiene permiso

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign-in?callbackUrl=/addlab');
  }

  return (
    <section className="pt-16">
      <div className="container relative mx-auto my-10 max-w-2xl">
        <EditLabForm lab={lab} />
      </div>
    </section>
  );
}
