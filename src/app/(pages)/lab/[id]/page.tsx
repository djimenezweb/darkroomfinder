import { getLabById } from '@/utils/getLabById';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import LabMap from './LabMap';

export default async function DarkroomPage({ params }: { params: Params }) {
  const id = params.id;
  const lab = await getLabById(id);
  if (!lab) return;
  // Redirect to notfound

  return (
    <section className="pt-16 min-h-screen relative flex items-stretch">
      <aside className="w-40 lg:w-64 border-r border-gray-dark-600 relative shrink-0">
        <div className="sticky top-16">
          <div className="py-5 px-6 border-b border-gray-dark-600">
            <p className="text-sm text-gray-dark-1000 mb-2">Back</p>
          </div>
        </div>
      </aside>
      <div className="p-5 grow max-w-3xl">
        <h1 className="text-2xl sm:text-3xl mb-4">{lab.name}</h1>
        <div className="text-gray-dark-1100">
          <p className="text-sm mb-4">
            {lab.location.address}, {lab.location.city}
          </p>
        </div>
        <div className="text-base bg-gray-dark-300 p-5 rounded-md border border-gray-dark-500 text-gray-dark-1100">
          {lab.description}
        </div>
        <div className="bg-gray-dark-300 p-5 rounded-md border border-gray-dark-500 flex text-sm">
          <span className="text-sm text-gray-dark-1000">Sizes</span>
          <ul className="flex gap-2">
            {lab.sizes.map(size => (
              <li key={size}>
                <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                  {size}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-dark-300 p-5 rounded-md border border-gray-dark-500 flex text-sm">
          <span className="text-sm text-gray-dark-1000">Processes</span>
          <ul className="flex gap-2">
            {lab.processes.map(process => (
              <li key={process}>
                <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                  {process}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-dark-300 p-5 rounded-md border border-gray-dark-500">
          <LabMap lat={lab.location.latitude} lon={lab.location.longitude} />
        </div>

        <div className="bg-gray-dark-300 p-5 rounded-md border border-gray-dark-500 flex">
          {lab?.owner && <p>Lab owner: {lab.owner.toString()}</p>}
          {lab.createdAt && <p>Published: {lab.createdAt.toDateString()}</p>}
          {lab.updatedAt && <p>Updated: {lab.updatedAt.toDateString()}</p>}
        </div>
      </div>
    </section>
  );
}
