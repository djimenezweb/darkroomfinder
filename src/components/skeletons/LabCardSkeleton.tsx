export default function LabCardSkeleton() {
  return (
    <div className="relative block h-44 animate-pulse overflow-hidden rounded-md border border-gray-dark-500 bg-gray-dark-300 p-5">
      <div className="flex gap-4">
        <div className="h-[100px] w-[150px] overflow-hidden rounded-md bg-gray-dark-600" />
        <div className="space-y-2">
          <p className="mt-1 h-3 w-28 rounded-full bg-gray-dark-1100" />
          <p className="h-3 w-14 rounded-full bg-gray-dark-1000" />
        </div>
      </div>
      <div className="absolute bottom-5 right-5 h-4 w-4 rounded-full bg-gray-dark-900" />
    </div>
  );
}
