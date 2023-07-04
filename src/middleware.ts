import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ token }: any) => {
      return !!token || token?.user?.error;
    },
  },
});

export const config = {
  matcher: ["/((?!login|register).*)", "/"],
};
