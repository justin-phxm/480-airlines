"use client";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import LoginStatus from "./LoginStatus";
import { useState } from "react";
export default function Navbar() {
  const routes = [
    { name: "Home", href: "/" },
    { name: "Admin", href: "/admin" },
    { name: "Airline Employee", href: "/employee" },
    { name: "Membership", href: "/membership" },
  ];
  const [isOpen, setIsOpen] = useState(false);
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
          <ul className="hidden flex-col items-center font-medium md:flex-row md:space-x-8 lg:flex rtl:space-x-reverse dark:text-white">
            {routes.map((route) => (
              <li key={route.name} className=" hover:text-indigo-500">
                <Link href={route.href}>{route.name}</Link>
              </li>
            ))}
            <LoginStatus />
          </ul>
          <div className="flex lg:hidden">
            <GiHamburgerMenu size={24} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        {isOpen && (
          <ul className="flex flex-col items-end space-y-4 px-4 pb-4 font-medium lg:hidden ">
            {routes.map((route) => (
              <li
                key={route.name}
                className=" w-full border-b border-slate-500/50 text-end hover:text-indigo-500"
              >
                <Link href={route.href}>{route.name}</Link>
              </li>
            ))}
            <LoginStatus />
          </ul>
        )}
      </nav>
    </>
  );
}
