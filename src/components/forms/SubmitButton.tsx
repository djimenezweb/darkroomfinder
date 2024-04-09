'use client';

import SpinnerSVG from '@/components/logos/Spinner';

export default function SubmitButton({
  text,
  isPending
}: {
  text: string;
  isPending: boolean;
}) {
  return (
    <button
      type="submit"
      className="min-w-32 flex justify-center items-center bg-red-800 hover:bg-red-800/80 text-xs px-2.5 py-1 rounded-md font-normal border border-red-600">
      {isPending ? <SpinnerSVG className="w-4 h-4 animate-spin" /> : text}
    </button>
  );
}
