'use client';
import GoogleLogo from '@/components/logos/GoogleLogo';
import SpinnerSVG from '@/components/logos/Spinner';
import useToggle from '@/hooks/useToggle';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import GitHubLogo from '../logos/GitHubLogo';

interface ISignInButtonsProps {
  providers: Record<LiteralUnion<string, string>, ClientSafeProvider>;
}
interface IButtonProps {
  provider: ClientSafeProvider;
  callbackUrl: string | null;
}

const providerLogos: { [name: string]: JSX.Element } = {
  google: <GoogleLogo className="w-5 h-5" />,
  github: <GitHubLogo className="w-5 h-5" />
};

const buttonStyles =
  'font-regular rounded-md outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800 focus-visible:outline-red-600 shadow-sm w-full flex items-center justify-center text-base px-4 py-2 gap-2';

export default function SignInButtons({ providers }: ISignInButtonsProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <div className="flex flex-col gap-5">
      {Object.values(providers).map(provider => (
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
      className={buttonStyles}
      onClick={() => handleClick(provider.id)}
      disabled={isLoading}>
      <span className="w-5 h-5">
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
