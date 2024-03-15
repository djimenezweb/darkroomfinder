declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_DOMAIN: string;
    NEXT_PUBLIC_API: string;
    NEXTAUTH_URL: string;
    MONGODB_URI: string;
    NEXTAUTH_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
