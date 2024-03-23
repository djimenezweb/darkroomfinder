'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function TestDropzone() {
  const [inputs, setInputs] = useState<File[]>([]);
  const [previews, setPreviews] = useState<(File & { preview: string })[]>([]);

  function generatePreviews(files: File[]) {
    const nextPreviews = files.map(file =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setPreviews(nextPreviews);
  }

  const onDrop = (acceptedFiles: File[]) => {
    generatePreviews(acceptedFiles);
    setInputs([...acceptedFiles]);
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: { 'image/*': [] },
      onDrop
    });

  useEffect(() => {
    return () => previews.forEach(prv => URL.revokeObjectURL(prv.preview));
  }, [previews]);

  return (
    <>
      <div {...getRootProps()} className="p-8 border border-white">
        <input
          {...getInputProps({
            name: 'images',
            id: 'images'
          })}
        />

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
            <div key={prv.name}>
              <div className="w-24 h-16 relative mb-2">
                <Image
                  src={prv.preview}
                  fill
                  className="object-contain"
                  alt="Preview"
                  onLoad={() => URL.revokeObjectURL(prv.preview)}
                />
              </div>
              <button
                type="button"
                className="border border-white text-center w-full">
                delete {i}
              </button>
            </div>
          ))}
        </div>
      )}

      {inputs.length > 0 && (
        <div>
          {inputs.map((file, i) => (
            <input key={file.name} type="file" name="selectedImages" value="" />
          ))}
        </div>
      )}
    </>
  );
}
