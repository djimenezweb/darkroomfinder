import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/utils/dbConnect';
import { User } from '@/models/User';

// Doc Google provider: https://next-auth.js.org/providers/google
// Doc Callbacks: https://next-auth.js.org/configuration/callbacks
// Custom login pages: https://next-auth.js.org/configuration/pages
// Custom login pages: https://conermurphy.com/blog/implementing-authjs-nextauthjs-nextjs-app-router-application
// Next Auth - JWT & Session Callback & How to Update User Session: https://www.youtube.com/watch?v=bkUmN9TH_hQ

if (typeof process.env.GOOGLE_CLIENT_ID === 'undefined') {
  throw new Error('Environment variable GOOGLE_CLIENT_ID is undefined');
}
if (typeof process.env.GOOGLE_CLIENT_SECRET === 'undefined') {
  throw new Error('Environment variable GOOGLE_CLIENT_SECRET is undefined');
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  pages: {
    signIn: '/sign-in'
  },
  callbacks: {
    async signIn({ profile, user }) {
      // Connect to db, Check if user exists, Add user to db, Return true to allow signin
      await dbConnect();
      const existingUser = await User.findOne({ email: profile?.email });
      if (!existingUser) {
        const newUser = await User.create({
          username: profile?.name,
          email: profile?.email
        });
        user.id = newUser._id.toString();
      } else {
        user.id = existingUser._id.toString();
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      // user is undefined because it's defined only on sign in
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, user: { ...session.user, id: token.id } };
      // if (!session.user.email) {
      //   console.log('No session.user.email => Connecting to db');
      //   await dbConnect();
      //   const user = await User.findOne({ email: session.user?.email });
      //   if (user) {
      //     session.user.id = user._id.toString();
      //   }
      // }
      // return session;
    }
  }
};
