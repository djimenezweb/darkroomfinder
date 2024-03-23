import { getLabById } from '@/utils/getLabById';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default async function DarkroomPage({ params }: { params: Params }) {
  const id = params.id;
  const lab = await getLabById(id);
  if (!lab) return;
  // Redirect to notfound

  return (
    <section className="pt-16">
      ID {id}
      <div>
        <p>{lab.name}</p>
        {lab?.owner && <p>{lab.owner.toString()}</p>}
        <p>{lab.description}</p>
        <p>{lab.location.address}</p>
        <p>{lab.location.city}</p>
        <p>{lab.location.state}</p>
        <p>{lab.location.zipcode}</p>
        <p>{lab.location.country}</p>
      </div>
    </section>
  );
}
