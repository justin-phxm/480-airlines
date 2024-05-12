import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function SigninButton() {
  const session = await getServerAuthSession();
  return (
    <Link
      href={session ? "/api/auth/signout" : "/api/auth/signin"}
      className={`rounded-full bg-white/10 font-semibold no-underline transition hover:bg-white/20 ${session ? "text-red-500" : "text-green-500"}`}
    >
      {session ? "Sign out" : "Sign in"}
    </Link>
  );
}
