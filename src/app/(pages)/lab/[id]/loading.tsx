import { TITLE } from '@/constants/metadata';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/buttons/BackButton';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import ContainerWithBorder from '@/components/ContainerWithBorder';

// METADATA
export function generateMetadata() {
  return {
    title: `Loading... | ${TITLE}`
  };
}

// PAGE
export default async function DarkroomLoadingPage() {
  return (
    <div className="animate-pulse md:grid md:grid-cols-[10rem_1fr] lg:grid-cols-[13rem_1fr] xl:grid-cols-[16rem_1fr]">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>

      <div className="mx-auto mb-16 w-full max-w-4xl space-y-8 px-4">
        <div>
          <div className="mb-6 mt-9 h-6 max-w-64 rounded-full bg-gray-dark-1000" />
          <div className="mb-4 h-3 max-w-36 rounded-full bg-gray-dark-900" />
          <div className="h-3 max-w-32 rounded-full bg-gray-dark-900" />
        </div>
        <div className="gap-8 md:grid md:grid-cols-[1fr_10rem]">
          <div className="mt-2 space-y-8">
            <ContainerWithBorder>
              <div className="mb-2 h-3 w-full rounded-full bg-gray-dark-900" />
              <div className="mb-2 h-3 w-full rounded-full bg-gray-dark-900" />
              <div className="mb-2 h-3 w-full rounded-full bg-gray-dark-900" />
              <div className="mb-2 h-3 w-full rounded-full bg-gray-dark-900" />
              <div className="h-3 w-1/2 rounded-full bg-gray-dark-900" />
            </ContainerWithBorder>
            <ContainerWithBorder className="space-y-4 text-sm">
              <div className="flex">
                <div className="min-w-32 shrink-0">
                  <div className="h-4 w-12 rounded-full bg-gray-dark-800" />
                </div>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <div className="h-4 w-14 rounded-full border-gray-dark-700 bg-gray-dark-900 shadow-sm" />
                  </li>
                  <li>
                    <div className="h-4 w-16 rounded-full border-gray-dark-700 bg-gray-dark-900 shadow-sm" />
                  </li>
                </ul>
              </div>
              <div className="flex">
                <div className="min-w-32 shrink-0">
                  <div className="h-4 w-16 rounded-full bg-gray-dark-800" />
                </div>
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <div className="h-4 w-20 rounded-full border-gray-dark-700 bg-gray-dark-900 shadow-sm" />
                  </li>
                  <li>
                    <div className="h-4 w-24 rounded-full border-gray-dark-700 bg-gray-dark-900 shadow-sm" />
                  </li>
                </ul>
              </div>
            </ContainerWithBorder>
            <ContainerWithBorder>
              <div className="h-4" />
            </ContainerWithBorder>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
