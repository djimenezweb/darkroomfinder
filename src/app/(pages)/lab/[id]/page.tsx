import { notFound } from 'next/navigation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getServerSession } from 'next-auth';
import { Types } from 'mongoose';
import { TITLE } from '@/constants/metadata';
import { authOptions } from '@/utils/authOptions';
import { getLabById } from '@/utils/getLabById';
import { getIsFav } from '@/utils/getIsFav';
import StickyAside from '@/components/StickyAside';
import BackButton from '@/components/buttons/BackButton';
import EditButton from '@/components/buttons/EditButton';
import FavButton from '@/components/buttons/FavButton';
import AsideElementWrapper from '@/components/AsideElementWrapper';
import {
  Carousel,
  LabDescription,
  LabFeatures,
  LabFooter,
  LabHeader,
  LabMapSection,
  Share
} from '@/components/lab-page';
import { getAllLabIDs } from '@/utils/getAllLabIDs';

// GENERATE STATIC PARAMS
export async function generateStaticParams() {
  const allLabs = await getAllLabIDs();
  if (!allLabs) return;
  return allLabs.map((lab) => ({
    id: lab._id.toString()
  }));
}

// METADATA
export async function generateMetadata({ params }: { params: Params }) {
  const id: string = params.id;

  const isValid = Types.ObjectId.isValid(id);
  if (!isValid) {
    notFound();
  }

  const lab = await getLabById(id);
  return {
    title: `${lab?.name} | ${TITLE}`,
    openGraph: {
      title: lab?.name,
      url: process.env.NEXT_PUBLIC_URL + '/lab/' + lab?._id.toString(),
      siteName: TITLE,
      images: [
        {
          url: lab?.images[0]
        }
      ],
      locale: 'en_US',
      type: 'website'
    }
  };
}

// PAGE
export default async function DarkroomPage({ params }: { params: Params }) {
  const id: string = params.id;

  const isValid = Types.ObjectId.isValid(id);
  if (!isValid) {
    notFound();
  }

  const lab = await getLabById(id);

  // Not found
  if (!lab) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  const isFav = await getIsFav(id, session?.user?.email);
  const isEditable = lab.owner.email === session?.user?.email;

  return (
    <div className="md:grid md:grid-cols-[10rem_1fr] lg:grid-cols-[13rem_1fr] xl:grid-cols-[16rem_1fr]">
      <StickyAside>
        <AsideElementWrapper>
          <BackButton />
        </AsideElementWrapper>
      </StickyAside>

      <div className="mx-auto mb-16 w-full max-w-4xl space-y-8 px-4">
        <LabHeader
          name={lab.name}
          address={lab.location.address}
          city={lab.location.city}
          link={lab.link}
        />
        <div className="gap-8 md:grid md:grid-cols-[1fr_11rem]">
          <div className="space-y-8">
            <LabDescription description={lab.description} />
            <LabFeatures
              featuredSizes={lab.sizes}
              featuredProcesses={lab.processes}
            />
            <Carousel images={lab.images} />
            <LabMapSection name={lab.name} location={lab.location} />
            <LabFooter updatedAt={lab.updatedAt} createdAt={lab.createdAt} />
          </div>
          <div>
            <div className="flex flex-col items-center justify-center space-y-8 md:sticky md:top-20 md:items-start">
              <FavButton
                initialState={isFav}
                labId={id}
                email={session?.user?.email}
              />
              {isEditable && <EditButton id={id} />}
              <Share />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
