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
  setFiles
}: {
  files: (File & { preview: string })[];
  setFiles: Dispatch<SetStateAction<(File & { preview: string })[]>>;
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreviews = acceptedFiles.map(file =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles(prev => [...prev, ...filesWithPreviews]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg'] },
      disabled: files.length >= 6,
      maxFiles: 6,
      onDrop
    });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
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
          <p className="text-sm text-error-900">Max 6 files</p>
        </>
      )}
      {isDragAccept && (
        <p className="text-sm text-gray-dark-1100">Drop your images here</p>
      )}
      {!isDragAccept && !isDragReject && (
        <>
          <p className="text-sm text-gray-dark-1000">
            Drop up to 6 images here
          </p>
          <p className="text-xs text-gray-dark-1000">or click to upload</p>
        </>
      )}
    </div>
  );
}
