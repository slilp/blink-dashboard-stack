import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const refreshToken = async (token: any) => {
  try {
    return {
      ...token.user,
      accessToken: "accessToken",
      accessTokenExpires: Date.now() + 1000 * 1000,
      refreshToken: "refreshtoken",
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: credentials?.username,
          email: credentials?.username,
          accessToken: "accessTokenMock",
          refreshToken: "refreshTokenMock",
          accessTokenExpires: Date.now() + 1000 * 1000,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          user,
        };
      }

      if (Date.now() < token.user.accessTokenExpires) {
        return token;
      }

      return refreshToken(token);
    },
    async session({ session, token }) {
      session.user = token.user as any;
      if (token?.eror)
        session.user = { ...session.user, error: token.error } as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
