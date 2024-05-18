"use client";

import type { Seat } from "@prisma/client";

export default function SeatUnit({
  seat,
  seatColor,
}: {
  seat: Seat;
  seatColor: string;
}) {
  return (
    <div
      onClick={() => console.log(seat.seatCode)}
      className={`h-10 w-7 rounded bg-gradient-to-b ${seat.available && "cursor-pointer"} ${seatColor}`}
    />
  );
}
