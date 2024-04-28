import AsideElementWrapper from '@/components/AsideElementWrapper';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/buttons/BackButton';

export function generateMetadata() {
  return {
    title: 'Not found'
  };
}

export default function NotFound() {
  return (
    <div className="relative flex h-full items-stretch">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>
      <div className="grow p-5">
        <div className="mx-auto max-w-3xl space-y-4">
          <div>
            <h1 className="mb-4 text-2xl sm:text-3xl">Not found</h1>
            <div className="text-gray-dark-1100">
              <p className="text-sm">The requested darkroom was not found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
