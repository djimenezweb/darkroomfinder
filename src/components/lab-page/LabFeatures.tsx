import { ILabWithOwner } from '@/types/types';
import ContainerWithBorder from '../ContainerWithBorder';
import { processes, sizes } from '@/constants/lab-options';
import { twMerge } from 'tailwind-merge';
import { styles } from '@/styles/styles';

type Props = {
  featuredSizes: ILabWithOwner['sizes'];
  featuredProcesses: ILabWithOwner['processes'];
};

export function LabFeatures({ featuredSizes, featuredProcesses }: Props) {
  return (
    <ContainerWithBorder className="space-y-4 text-sm">
      <div className="flex">
        <p className="min-w-32 shrink-0 text-sm text-gray-dark-1000">Sizes</p>
        <ul className="flex flex-wrap gap-2">
          {featuredSizes.map((size) => (
            <li key={size}>
              <span className={twMerge(styles.tag.xs, styles.tag.span)}>
                {sizes.find((item) => item.id === size)?.fullName}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <p className="min-w-32 shrink-0 text-sm text-gray-dark-1000">
          Processes
        </p>
        <ul className="flex flex-wrap gap-2">
          {featuredProcesses.map((process) => (
            <li key={process}>
              <span className={twMerge(styles.tag.xs, styles.tag.span)}>
                {processes.find((item) => item.id === process)?.longName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ContainerWithBorder>
  );
}
