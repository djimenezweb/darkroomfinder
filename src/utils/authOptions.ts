import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';

// Doc Google provider: https://next-auth.js.org/providers/google
// Doc Callbacks: https://next-auth.js.org/configuration/callbacks
// Custom login pages: https://next-auth.js.org/configuration/pages
// Custom login pages: https://conermurphy.com/blog/implementing-authjs-nextauthjs-nextjs-app-router-application

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
    // Successful signin
    async signIn({ profile }) {
      // Connect to db, Check if user exists, Add user to db, Return true to allow signin
      await dbConnect();
      const existingUser = await User.findOne({ email: profile?.email });
      if (!existingUser) {
        const user = await User.create({
          username: profile?.name,
          email: profile?.email
        });
      }
      return true;
    },
    async session({ session }) {
      // Get user from db, Assign user id to the session, Return session
      // console.log('session.user.email', session.user.email);
      if (!session.user.email) {
        console.log('No session.user.email => Connecting to db');
        await dbConnect();
        const user = await User.findOne({ email: session.user?.email });
        if (user) {
          session.user.id = user._id.toString();
        }
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  }
};
