"use client";

import { useSession } from "next-auth/react";

export default function Heading() {
  const session = useSession();
  return (
    <h1 className=" text-xl font-bold">Welcome, {session.data?.user.name}</h1>
  );
}
