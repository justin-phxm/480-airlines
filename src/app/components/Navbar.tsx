import Link from "next/link";
export default function Navbar() {
  const routes = [
    { name: "Home", href: "/" },
    { name: "Admin", href: "/admin" },
    { name: "Airline Employee", href: "/airlineEmployee" },
    { name: "Membership", href: "/membershipRegistration" },
  ];
  return (
    <>
      <nav className="border-gray-200 bg-slate-50 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href="/"
            className=" text-2xl font-semibold rtl:space-x-reverse"
          >
            480 Airlines
          </Link>
          <ul className="flex flex-col font-medium md:flex-row md:space-x-8 rtl:space-x-reverse dark:text-white">
            {routes.map((route) => (
              <li key={route.name} className=" hover:text-indigo-500">
                <Link href={route.href}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
