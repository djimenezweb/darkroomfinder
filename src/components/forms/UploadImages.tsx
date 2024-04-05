'use client';

import { Dispatch, MutableRefObject, SetStateAction, useRef } from 'react';
import Dropzone from './Dropzone';
import Previews from './Previews';

export default function UploadImages({
  files,
  setFiles
}: {
  files: (File & { preview: string })[];
  setFiles: Dispatch<SetStateAction<(File & { preview: string })[]>>;
}) {
  const prevFilesRef: MutableRefObject<(File & { preview: string })[]> = useRef(
    []
  );

  function handleDelete(i: number) {
    const nextFiles = [...files];
    nextFiles.splice(i, 1);
    prevFilesRef.current = [...nextFiles];
    setFiles(nextFiles);
  }

  return (
    <>
      <Dropzone files={files} setFiles={setFiles} prevFilesRef={prevFilesRef} />
      {files.length > 0 && (
        <Previews files={files} handleDelete={handleDelete} />
      )}
    </>
  );
}
