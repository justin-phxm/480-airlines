import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import Hero from "@/components/Hero";

export default async function HomePage() {
  const session = await getServerAuthSession();
  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-indigo-300 to-white text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 ">
        <Hero />
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </div>
    </main>
  );
}
