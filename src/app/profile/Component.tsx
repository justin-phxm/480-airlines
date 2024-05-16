import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

export default async function Component() {
  const sesion = await getServerAuthSession();
  console.log(sesion);
  return (
    <div>
      <div className="">
        Role:{" "}
        {sesion?.user.role === "ADMIN"
          ? "Admin"
          : sesion?.user.role === "CUSTOMER"
            ? "CUSTOMER"
            : sesion?.user.role === "EMPLOYEE"
              ? "EMPLOYEE"
              : "UNKNOWN"}
      </div>
      <Link href={sesion ? "/api/auth/signout" : "/api/auth/signin"}>
        Sign Out
      </Link>
    </div>
  );
}
