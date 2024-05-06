import { ClientSafeProvider } from 'next-auth/react';

// Hard-coded providers array instead of getting them from getProviders()
// Request to getProviders() fails during build because the server is not up yet
// https://github.com/nextauthjs/next-auth/issues/9597
// https://github.com/nextauthjs/next-auth/discussions/4823
// https://stackoverflow.com/questions/67689306/next-js-providers-getproviders-fetcherror-next-build

export const providers: ClientSafeProvider[] = [
  {
    id: 'google',
    name: 'Google',
    type: 'oauth',
    signinUrl: 'http://localhost:3000/api/auth/signin/google',
    callbackUrl: 'http://localhost:3000/api/auth/callback/google'
  },
  {
    id: 'github',
    name: 'GitHub',
    type: 'oauth',
    signinUrl: 'http://localhost:3000/api/auth/signin/github',
    callbackUrl: 'http://localhost:3000/api/auth/callback/github'
  }
];
