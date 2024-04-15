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
    <div className="md:grid md:grid-cols-[10rem_1fr] lg:grid-cols-[13rem_1fr] xl:grid-cols-[16rem_1fr] animate-pulse">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>

      <div className="w-full max-w-4xl mx-auto px-4 space-y-8 mb-16">
        <div>
          <div className="h-6 max-w-64 bg-gray-dark-1000 rounded-full mt-9 mb-6" />
          <div className="h-3 max-w-36 bg-gray-dark-900 rounded-full mb-4" />
          <div className="h-3 max-w-32 bg-gray-dark-900 rounded-full" />
        </div>
        <div className="md:grid md:grid-cols-[1fr_10rem] gap-8">
          <div className="space-y-8 mt-2">
            <ContainerWithBorder>
              <div className="h-3 w-full bg-gray-dark-900 rounded-full mb-2" />
              <div className="h-3 w-full bg-gray-dark-900 rounded-full mb-2" />
              <div className="h-3 w-full bg-gray-dark-900 rounded-full mb-2" />
              <div className="h-3 w-full bg-gray-dark-900 rounded-full mb-2" />
              <div className="h-3 w-1/2 bg-gray-dark-900 rounded-full" />
            </ContainerWithBorder>
            <ContainerWithBorder className="text-sm space-y-4">
              <div className="flex">
                <div className="min-w-32 shrink-0">
                  <div className="w-12 h-4 bg-gray-dark-800 rounded-full" />
                </div>
                <ul className="flex gap-2 flex-wrap">
                  <li>
                    <div className="w-14 h-4 bg-gray-dark-900 border-gray-dark-700 shadow-sm rounded-full" />
                  </li>
                  <li>
                    <div className="w-16 h-4 bg-gray-dark-900 border-gray-dark-700 shadow-sm rounded-full" />
                  </li>
                </ul>
              </div>
              <div className="flex">
                <div className="min-w-32 shrink-0">
                  <div className="w-16 h-4 bg-gray-dark-800 rounded-full" />
                </div>
                <ul className="flex gap-2 flex-wrap">
                  <li>
                    <div className="w-20 h-4 bg-gray-dark-900 border-gray-dark-700 shadow-sm rounded-full" />
                  </li>
                  <li>
                    <div className="w-24 h-4 bg-gray-dark-900 border-gray-dark-700 shadow-sm rounded-full" />
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
