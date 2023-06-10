import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role !== "admin"
    )
      return NextResponse.rewrite(
        new URL("/auth/login?message=You are nit authorize", req.url)
      );
    if (!req.nextauth.token)
      return NextResponse.rewrite(
        new URL("/auth/login?message=No login in", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/"] };
