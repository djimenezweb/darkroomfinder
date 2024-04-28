import { deleteDarkroom } from '@/actions/deleteDarkroom';
import ContainerWithBorder from '../ContainerWithBorder';
import DeleteButton from '../buttons/DeleteButton';

type Props = {
  documentId: string;
  email: string;
  images: string[];
};

export default function DeleteLabForm({ documentId, email, images }: Props) {
  const deleteDarkroomWithParams = deleteDarkroom.bind(
    null,
    documentId,
    email,
    images
  );
  return (
    <div>
      <h3 className="mb-4 text-xl">Delete darkroom</h3>
      <ContainerWithBorder>
        <div className="rounded-md border border-error-500 bg-error-200 p-5">
          <p className="text-sm text-error-900">
            Warning! Deleting this darkroom will alse remove the pictures. This
            action is irreversible.
          </p>
          <form action={deleteDarkroomWithParams} className="pt-4">
            <DeleteButton />
          </form>
        </div>
      </ContainerWithBorder>
    </div>
  );
}
