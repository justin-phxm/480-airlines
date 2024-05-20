"use client";
import { Dropdown } from "flowbite-react";
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
    >
      <Dropdown.Header>
        <div className="font-bold capitalize">{session.user?.name}</div>
        <div> {session.user?.email}</div>
      </Dropdown.Header>

      <Dropdown.Item className=" hover:bg-slate-200/50">
        <Link href="/profile"> Profile</Link>
      </Dropdown.Item>
      <Dropdown.Item className="text-red-500 hover:bg-slate-200/50">
        <Link href="/api/auth/signout">Sign out</Link>
      </Dropdown.Item>
    </Dropdown>
  );
}
