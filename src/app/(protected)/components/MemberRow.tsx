import React from "react";
import Image from "next/image";
import { TableCell } from "flowbite-react";
interface MemberRowProps {
  username: string;
  flights: number;
  classPercentage: number[];
  imageUrl: string;
}

export default function MemberRow({
  username,
  flights,
  classPercentage,
  imageUrl,
}: MemberRowProps) {
  return (
    <>
      <TableCell>
        <div className="flex flex-row items-center gap-2">
          <Image
            className="size-7 rounded-xl"
            src={imageUrl}
            width={30}
            height={30}
            alt={`${username}'s profile`}
          />
          <div className=" font-bold text-indigo-900">{username}</div>
        </div>
      </TableCell>
      <TableCell>
        <div className="font-medium text-slate-400">{flights}</div>
      </TableCell>
      <TableCell>
        <div className="flex h-2 w-16 flex-row rounded-3xl bg-slate-100">
          {classPercentage.map((percentage, index) => (
            <div
              key={index}
              className={`h-2 rounded-3xl ${
                index === 0
                  ? "bg-green-300"
                  : index === 1
                    ? "bg-yellow-200"
                    : "bg-violet-300"
              }
              `}
              // eslint-disable-next-line
              // @ts-ignore
              style={{ width: `${percentage}%` }}
            />
          ))}
        </div>
      </TableCell>
    </>
  );
}
