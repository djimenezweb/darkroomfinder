import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect
} from 'react';
import { useDropzone } from 'react-dropzone';

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

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>DragNdrop some files here, or click to select files</p>
    </div>
  );
}
