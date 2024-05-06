'use client';

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo
} from 'react';
import { useDropzone } from 'react-dropzone';
import { dropzoneStyles as styles } from '@/styles/styles';

export default function Dropzone({
  files,
  setFiles,
  savedImages = 0
}: {
  files: (File & { preview: string })[];
  setFiles: Dispatch<SetStateAction<(File & { preview: string })[]>>;
  savedImages?: number;
}) {
  const limit = 6 - files.length - savedImages;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreviews = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles((prev) => [...prev, ...filesWithPreviews]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg'] },
      disabled: files.length >= limit,
      maxFiles: 6,
      onDrop
    });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = useMemo(
    () => ({
      ...styles.base,
      ...(isDragAccept ? styles.accept : {}),
      ...(isDragReject ? styles.reject : {})
    }),
    [isDragAccept, isDragReject]
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps({ name: 'images', id: 'images' })} />
      {isDragReject && (
        <>
          <p className="text-sm text-error-900">JPG or PNG images only</p>
          <p className="text-sm text-error-900">Max {limit} files</p>
        </>
      )}
      {isDragAccept && (
        <p className="text-sm text-gray-dark-1100">Drop your images here</p>
      )}
      {!isDragAccept && !isDragReject && (
        <>
          <p className="text-sm text-gray-dark-1000">
            Drop up to {limit} images here
          </p>
          <p className="text-xs text-gray-dark-1000">or click to upload</p>
        </>
      )}
    </div>
  );
}
