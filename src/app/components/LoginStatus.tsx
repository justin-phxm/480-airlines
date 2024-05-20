"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import UserProfile from "./UserProfile";

export default function LoginStatus() {
  const { data: session } = useSession();
  return (
    <li>
      {session ? (
        <UserProfile session={session} />
      ) : (
        <Link href={"/api/auth/signin"} className="text-green-500">
          Sign In
        </Link>
      )}
    </li>
  );
}
