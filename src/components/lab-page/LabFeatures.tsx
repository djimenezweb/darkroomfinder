import { ILabWithOwner } from '@/types/types';
import ContainerWithBorder from '../ContainerWithBorder';
import { processes, sizes } from '@/constants/lab-options';

type Props = {
  featuredSizes: ILabWithOwner['sizes'];
  featuredProcesses: ILabWithOwner['processes'];
};

export function LabFeatures({ featuredSizes, featuredProcesses }: Props) {
  return (
    <ContainerWithBorder className="text-sm space-y-4">
      <div className="flex">
        <p className="text-sm text-gray-dark-1000 min-w-32 shrink-0">Sizes</p>
        <ul className="flex gap-2 flex-wrap">
          {featuredSizes.map(size => (
            <li key={size}>
              <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                {sizes.find(item => item.id === size)?.fullName}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <p className="text-sm text-gray-dark-1000 min-w-32 shrink-0">
          Processes
        </p>
        <ul className="flex gap-2 flex-wrap">
          {featuredProcesses.map(process => (
            <li key={process}>
              <span className="text-center text-xs px-2.5 py-1 rounded border text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 shadow-sm">
                {processes.find(item => item.id === process)?.longName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ContainerWithBorder>
  );
}
