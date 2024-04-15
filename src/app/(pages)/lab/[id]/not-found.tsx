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
    <div className="relative h-full flex items-stretch">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>
      <div className="p-5 grow">
        <div className="mx-auto max-w-3xl space-y-4">
          <div>
            <h1 className="text-2xl sm:text-3xl mb-4">Not found</h1>
            <div className="text-gray-dark-1100">
              <p className="text-sm">The requested darkroom was not found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
