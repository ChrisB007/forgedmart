import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import EmailProvider from 'next-auth/providers/email';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    //    EmailProvider({
    //      server: {
    //        host: process.env.EMAIL_SERVER_HOST,
    //        port: process.env.EMAIL_SERVER_PORT,
    //        auth: {
    //          user: process.env.EMAIL_SERVER_USER,
    //          pass: process.env.EMAIL_SERVER_PASSWORD,
    //        },
    //      },
    //      from: process.env.EMAIL_FROM,
    //    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/firstpage', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.NEXTAUTH_SECRET,
  //  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  //  session: {
  //    jwt: true,
  //  },
  //  callbacks: {
  //    session: async (session, user) => {
  //      session.jwt = user.jwt;
  //      session.id = user.id;
  //      return Promise.resolve(session);
  //    },
  //    jwt: async (token, user, account) => {
  //      const isSignIn = user ? true : false;
  //      if (isSignIn) {
  //        const response = await fetch(
  //          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`,
  //        );
  //        const data = await response.json();
  //        token.jwt = data.jwt;
  //        token.id = data.user.id;
  //      }
  //      return Promise.resolve(token);
  //    },
  //  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
