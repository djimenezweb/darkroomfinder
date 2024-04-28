import { formatDate } from '@/utils/formatDate';

export function LabFooter({
  createdAt,
  updatedAt
}: {
  createdAt: Date;
  updatedAt: Date;
}) {
  return (
    <div>
      {updatedAt && (
        <p className="py-4 text-center text-sm text-gray-dark-1000 md:text-right">
          Last edited:{' '}
          <span className="text-gray-dark-1100">{formatDate(updatedAt)}</span>
        </p>
      )}
    </div>
  );
}
