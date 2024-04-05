export default function LabCardSkeleton() {
  return (
    <div className="relative bg-gray-dark-300 border border-gray-dark-500 rounded-md p-5 block h-44 overflow-hidden animate-pulse">
      <div className="flex gap-4">
        <div className="w-[150px] h-[100px] rounded-md overflow-hidden bg-gray-dark-600" />
        <div className="space-y-2">
          <p className="mt-1 bg-gray-dark-1100 w-28 h-3 rounded-full" />
          <p className="bg-gray-dark-1000 w-14 h-3 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-5 right-5 w-4 h-4 bg-gray-dark-900 rounded-full" />
    </div>
  );
}
