interface SearchResultsHeadingProps {
  length: number;
  from: number;
  to: number;
  total: number;
  query: string;
}

export default function SearchResultsHeading({
  length,
  from,
  to,
  total,
  query
}: SearchResultsHeadingProps) {
  if (length === 0) return <h2 className="text-lg">No labs found</h2>;

  return (
    <h2 className="text-lg">
      <span>
        Showing {from}-{to} of {total} {total === 1 ? 'darkroom' : 'darkrooms'}
      </span>
      {query && (
        <span>
          {' '}
          for <span className="text-red-500">{`"${query}"`}</span>
        </span>
      )}
    </h2>
  );
}
