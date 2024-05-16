import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
import Avatar from "@mui/material/Avatar";
export default async function Component() {
  const session = await getServerAuthSession();
  if (session) {
    const { name, image } = session.user;
    return (
      <>
        <Avatar alt={name ?? ""} src={image ?? ""} />

        <p>Currently logged in user: {name}</p>
        <Link
          className="rounded bg-red-500 p-2"
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
        >
          Sign Out
        </Link>
      </>
    );
  }
}
