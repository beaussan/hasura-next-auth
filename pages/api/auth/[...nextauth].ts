import NextAuth, { Account, Profile, Session } from 'next-auth';
import Providers from 'next-auth/providers';
import { HasuraAdaptor } from '../../../lib/hasuraAuthAdapter';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import { Awaitable } from 'next-auth/internals/utils';
import { Users } from '../../../lib/generated/graphql';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      sendVerificationRequest: (params) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('MOCK ----------------------------------------------');
          console.log(`Email send to ${params.identifier}`);
          console.log(`Url: ${params.url}`);
          console.log('MOCK ----------------------------------------------');
          return;
        }
      },
    }),

    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: 'read:user',
    }),
    // ...add more providers here
  ],

  debug: true,

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.NEXT_AUTH_JWT_SECRET_PRIVATE,

    verificationOptions: {
      algorithms: ['RS512'],
    },
    encode: async (params) => {
      if (!params || !params.token || !params.token.sub) {
        return 'undefined';
      }
      // console.log('ENCODE : ', params);
      const { token, secret } = params;
      const jwtClaims: JWT = {
        ...token,
        sub: token?.sub?.toString(),
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'RS512' });
      return encodedToken;
    },

    decode: async (params) => {
      if (!params || !params.token) {
        throw new Error('No params in decode');
      }
      const { token, secret } = params;
      const decodedToken = jwt.verify(token, secret, { algorithms: ['RS512'] });
      return decodedToken as JWT;
    },
  },

  adapter: HasuraAdaptor({}),

  callbacks: {
    async session(session: Session, userOrToken: JWT) {
      // console.log('SESSION : ', { session, userOrToken });
      const encodedToken = jwt.sign(
        userOrToken,
        process.env.NEXT_AUTH_JWT_SECRET_PRIVATE as string,
        { algorithm: 'RS512' },
      );

      const claims = userOrToken?.['https://hasura.io/jwt/claims'];

      if (claims) {
        session.role = claims['x-hasura-default-role'];
        session.allowedRoles = claims['x-hasura-allowed-roles'];
      }

      session.id = userOrToken.id;
      session.token = encodedToken;

      return session;
    },

    async jwt(
      token: JWT,
      user?: Users,
      account?: Account,
      profile?: Profile,
      isNewUser?: boolean,
    ) {
      // console.log('JWT : ', { token, user, account, profile, isNewUser });

      if (!user) {
        return token;
      }

      token = {
        ...token,
        'id': user?.id,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': user?.id,
        },
      };
      // console.log('JWT AFTER : ', token);

      return token;
    },
  },

  // A database is optional, but required to persist accounts in a database
});
