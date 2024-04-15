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
        <p className="py-4 text-center md:text-right text-sm text-gray-dark-1000">
          Last edited:{' '}
          <span className="text-gray-dark-1100">{formatDate(updatedAt)}</span>
        </p>
      )}
    </div>
  );
}
