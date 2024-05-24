import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-around bg-gradient-to-t from-indigo-300 to-white text-3xl">
      <p className="flex flex-col items-center gap-4">
        You do not have permission to view this page.
        <p className="text-base">
          If you think this is a mistake, please contact support.
        </p>
        <Link
          className="rounded bg-indigo-300 p-2 text-lg text-white outline outline-indigo-400"
          href="/"
        >
          Go back home
        </Link>
      </p>
      <div />
      <div />
    </div>
  );
}
