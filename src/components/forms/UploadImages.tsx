'use client';

import { Dispatch, SetStateAction } from 'react';
import Dropzone from './Dropzone';
import Previews from './Previews';

export default function UploadImages({
  files,
  setFiles
}: {
  files: (File & { preview: string })[];
  setFiles: Dispatch<SetStateAction<(File & { preview: string })[]>>;
}) {
  function handleDelete(i: number) {
    const nextFiles = [...files];
    nextFiles.splice(i, 1);
    setFiles(nextFiles);
  }

  return (
    <>
      <Dropzone files={files} setFiles={setFiles} />
      {files.length > 0 && (
        <Previews files={files} handleDelete={handleDelete} />
      )}
    </>
  );
}
