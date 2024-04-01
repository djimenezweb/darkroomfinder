'use client';

import Image from 'next/image';
import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useDropzone } from 'react-dropzone';

export default function MyDropzone() {
  const [previews, setPreviews] = useState<(File & { preview: string })[]>([]);

  // const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  function generatePreviews(files: File[]) {
    const nextPreviews = files.map(file =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setPreviews(nextPreviews);
  }

  const onDrop = (acceptedFiles: File[]) => {
    generatePreviews(acceptedFiles);
  };

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { 'image/*': [] },
    onDrop
  });

  function handleDelete(i: number) {
    // this doesn't seem to work!
    acceptedFiles.splice(i, 1);
    generatePreviews(acceptedFiles);
  }

  useEffect(() => {
    return () => previews.forEach(prv => URL.revokeObjectURL(prv.preview));
  }, []);

  const baseStyle: CSSProperties = {
    width: '100%',
    height: '5rem',
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    borderWidth: 1,
    borderRadius: '0.375rem',
    borderStyle: 'solid',
    backgroundColor: '#282828',
    borderColor: '#343434',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const acceptStyle: CSSProperties = {
    backgroundColor: '#1c1c1c',
    borderColor: '#a0a0a0'
  };

  const rejectStyle: CSSProperties = {
    backgroundColor: '#271700',
    borderColor: '#693f05'
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? { borderColor: '#a0a0a0' } : {}),
      //...(isDragActive ? { borderColor: '#a0a0a0' } : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <>
      <div {...getRootProps({ style })}>
        <input
          {...getInputProps({
            name: 'images',
            id: 'images'
          })}
        />
        {isDragReject && (
          <p className="text-sm text-error-900 text-center">Not admitted</p>
        )}
        {isDragAccept && (
          <p className="text-sm text-gray-dark-1100 text-center">
            Drop your images here
          </p>
        )}
        {!isDragActive && (
          <>
            <p className="text-sm text-gray-dark-1000">Drop your images here</p>
            <p className="text-xs text-gray-dark-1000">or click to upload</p>
          </>
        )}
      </div>
      {previews.length > 0 && (
        <div className="flex gap-2 mt-2">
          {previews.map((prv, i) => (
            <div key={prv.name} className="w-24 h-16 relative">
              <Image
                src={prv.preview}
                fill
                className="object-contain"
                alt="Preview"
                onLoad={() => URL.revokeObjectURL(prv.preview)}
              />
              <button className="relative z-50" onClick={() => handleDelete(i)}>
                delete {i}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
