import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { googleConfig } from '../google/config';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleConfig.clientId,
      clientSecret: googleConfig.clientSecret,
      authorization: googleConfig.authorization
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/error',
  },
  callbacks: {
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    }
  }
});

export { handler as GET, handler as POST };