import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/buttons/BackButton';

export default function NotFound() {
  return (
    <section className="relative flex items-stretch">
      <StickyAside>
        <BackButton />
      </StickyAside>
      <div className="p-5 grow  border-yellow-400">
        <div className="mx-auto max-w-3xl space-y-4 border-red-400">
          <div>
            <h1 className="text-2xl sm:text-3xl mb-4">Not found</h1>
            <div className="text-gray-dark-1100">
              <p className="text-sm">The requested darkroom was not found</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
