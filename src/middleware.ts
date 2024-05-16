// import { Role } from "@prisma/client";
// import { withAuth } from "next-auth/middleware";

import { protectedRoutes } from "./app/(protected)/protected";

/* default protects routes by checking if user is logged in*/
export { default } from "next-auth/middleware";
export const config = {
  matcher: [...protectedRoutes],
};

/* Protect routes based on role */
// export default withAuth({
//   callbacks: {
//     authorized: ({ req, token }) => {
//       const { pathname } = req.nextUrl;
//       if (token) {
//         const { role } = token;
//         if (pathname === "/admin") {
//           return role === Role.ADMIN;
//         }
//         if (pathname === "/employee") {
//           return role === Role.EMPLOYEE || role === Role.ADMIN;
//         }
//       }
//       return Boolean(token);
//     },
//   },
// });
