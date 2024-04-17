type Props = {
  children: React.ReactNode;
  type: 'span' | 'button';
};

export default function Tag({ children, type = 'span' }: Props) {
  return (
    <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
      {children}
    </span>
  );
}
