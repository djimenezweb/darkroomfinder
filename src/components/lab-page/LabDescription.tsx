import ContainerWithBorder from '../ContainerWithBorder';

export function LabDescription({ description }: { description: string }) {
  return (
    <ContainerWithBorder>
      {description.split(/\r?\n/).map((line) => (
        <p key={line} className="mb-3 text-base text-gray-dark-1100 last:mb-0">
          {line}
        </p>
      ))}
    </ContainerWithBorder>
  );
}
