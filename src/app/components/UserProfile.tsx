import { Dropdown, DropdownHeader, DropdownItem } from "flowbite-react";
import type { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
export default function UserProfile({ session }: { session: Session }) {
  const imageSrc = session.user?.image ?? "";
  return (
    <Dropdown
      inline
      label={
        <Image
          src={imageSrc}
          width={45}
          height={45}
          alt="profile image"
          className="rounded-full text-sm"
        />
      }
      className="z-50"
    >
      <DropdownHeader className="z-50">
        <div className="font-bold capitalize">{session.user?.name}</div>
        <div> {session.user?.email}</div>
      </DropdownHeader>
      <Link href="/profile">
        <DropdownItem className=" hover:bg-slate-200/50">Profile</DropdownItem>
      </Link>
      <Link href="/upcomingFlights">
        <DropdownItem className=" hover:bg-slate-200/50">
          Upcoming Flights
        </DropdownItem>
      </Link>
      <Link href="/api/auth/signout">
        <DropdownItem className="text-red-500 hover:bg-slate-200/50">
          Sign out
        </DropdownItem>
      </Link>
    </Dropdown>
  );
}
