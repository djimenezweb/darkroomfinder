import ContainerWithBorder from '../ContainerWithBorder';

export function LabDescription({ description }: { description: string }) {
  return (
    <ContainerWithBorder>
      {description.split(/\r?\n/).map(line => (
        <p key={line} className="text-base text-gray-dark-1100 mb-3 last:mb-0">
          {line}
        </p>
      ))}
    </ContainerWithBorder>
  );
}
