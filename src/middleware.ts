import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const userSession = req.nextauth.token?.user as any;

    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      userSession?.role !== "admin"
    )
      return NextResponse.rewrite(
        `${req.nextUrl.protocol}//${req.nextUrl.host}/401`
      );
  },
  {
    callbacks: {
      authorized: ({ token }: any) => {
        return !!token || token?.user?.error;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!login|register).*)", "/"],
};
