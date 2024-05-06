'use client';

import GoogleLogo from '@/components/logos/GoogleLogo';
import SpinnerSVG from '@/components/logos/Spinner';
import useToggle from '@/hooks/useToggle';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import GitHubLogo from '../logos/GitHubLogo';
import { styles } from '@/styles/styles';
import { twMerge } from 'tailwind-merge';
import { providers } from '@/utils/authProviders';

interface IButtonProps {
  provider: ClientSafeProvider;
  callbackUrl: string | null;
}

const providerLogos: { [name: string]: JSX.Element } = {
  google: <GoogleLogo className="h-5 w-5" />,
  github: <GitHubLogo className="h-5 w-5" />
};

export default function SignInButtons() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <div className="flex flex-col gap-5">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button provider={provider} callbackUrl={callbackUrl} />
        </div>
      ))}
    </div>
  );
}

function Button({ provider, callbackUrl }: IButtonProps) {
  const [isLoading, setIsLoading] = useToggle();

  function handleClick(id: string) {
    setIsLoading();
    if (callbackUrl) {
      signIn(id, { callbackUrl });
    } else {
      signIn(id, { callbackUrl: '/' });
    }
  }

  return (
    <button
      className={twMerge(
        styles.flexCenter,
        styles.button.sm,
        styles.button.gray,
        'font-regular w-full gap-2 shadow-sm',
        'outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-red-600'
      )}
      onClick={() => handleClick(provider.id)}
      disabled={isLoading}
    >
      <span className="h-5 w-5">
        {isLoading ? (
          <SpinnerSVG className="animate-spin" />
        ) : (
          providerLogos[provider.id]
        )}
      </span>
      <span>Continue with {provider.name}</span>
    </button>
  );
}
