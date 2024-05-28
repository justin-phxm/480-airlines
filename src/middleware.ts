// import { Role } from "@prisma/client";
// import { withAuth } from "next-auth/middleware";

import { Role } from "@prisma/client";
import withAuth, { type NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin", "/employee", "/profile", "/upcomingFlights"],
};

/* Protect routes based on role */
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const { token } = request.nextauth;
    if (token) {
      const { role } = token;
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/admin")) {
        if (role !== Role.ADMIN)
          return NextResponse.rewrite(new URL("/denied", request.url));
      }
      if (pathname.startsWith("/employee")) {
        if (role !== Role.EMPLOYEE && role !== Role.ADMIN) {
          return NextResponse.rewrite(new URL("/denied", request.url));
        }
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);
