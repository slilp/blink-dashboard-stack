import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      name: string;
      accessToken: string;
      refreshToken: string;
      accessTokenExpires: number;
    };
  }
}
