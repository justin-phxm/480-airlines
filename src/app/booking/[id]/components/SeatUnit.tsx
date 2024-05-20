"use client";

import type { Seat } from "@prisma/client";
import { SeatColor } from "./PlaneSeat";
import { useFlight } from "../FlightContext";

export default function SeatUnit({
  seat,
  seatColor,
}: {
  seat: Seat;
  seatColor: string;
}) {
  const { setChosenSeats, chosenSeats } = useFlight();
  const handleClick = () => {
    if (!seat.available) return;

    setChosenSeats((prevChosenSeats) => {
      if (
        !prevChosenSeats.find(
          (chosenSeat) => chosenSeat.seatCode === seat.seatCode,
        )
      ) {
        return [...prevChosenSeats, seat];
      } else {
        return prevChosenSeats.filter(
          (chosenSeat) => chosenSeat.seatCode !== seat.seatCode,
        );
      }
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`h-10 w-7 rounded bg-gradient-to-b ${seat.available && "cursor-pointer"} ${
        chosenSeats.find((chosenSeat) => chosenSeat.seatCode === seat.seatCode)
          ? SeatColor.SELECTED
          : seatColor
      }`}
    />
  );
}
