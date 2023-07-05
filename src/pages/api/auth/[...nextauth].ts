import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const refreshToken = async (token: any) => {
  try {
    return {
      ...token,
      user: {
        ...token.user,
        accessToken: "accessToken",
        accessTokenExpires: Date.now() + 1000 * 1000,
        refreshToken: "refreshtoken",
      },
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
        let user = null;
        if (
          credentials?.username === "admin@email.com" &&
          credentials.password === "admin1234"
        ) {
          user = {
            id: "1",
            name: "I am Admin",
            email: credentials?.username,
            accessToken: "accessTokenMock",
            refreshToken: "refreshTokenMock",
            accessTokenExpires: Date.now() + 1000 * 1000,
            role: "admin",
          };
        }

        if (
          credentials?.username === "user@email.com" &&
          credentials.password === "user1234"
        ) {
          user = {
            id: "2",
            name: "I am user",
            email: credentials?.username,
            accessToken: "accessTokenMock",
            refreshToken: "refreshTokenMock",
            accessTokenExpires: Date.now() + 1000 * 1000,
            role: "user",
          };
        }

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
      if (Date.now() < token?.user?.accessTokenExpires) {
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
