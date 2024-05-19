"use client";

import type { Flight, Seat } from "@prisma/client";
import { useState } from "react";
import { SeatColor } from "./PlaneSeat";
import { createPortal } from "react-dom";

export default function SeatUnit({
  seat,
  seatColor,
  flight,
}: {
  flight: Flight;
  seat: Seat;
  seatColor: string;
}) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (!seat.available) return;
    setSelected(!selected);
  };
  const priceMultiplier =
    seat.seatType === "FIRST" ? 1.5 : seat.seatType === "BUSINESS" ? 1.25 : 1;
  const seatPrice = flight.price * priceMultiplier;
  return (
    <>
      <div
        onClick={handleClick}
        className={`h-10 w-7 rounded bg-gradient-to-b ${seat.available && "cursor-pointer"} ${selected ? SeatColor.SELECTED : seatColor}`}
      />
      {selected &&
        createPortal(
          <li
            data-aos="fade-right"
            className="flex w-full flex-row justify-around border-b bg-opacity-50 p-4 backdrop-blur-xl transition-opacity"
          >
            {selected && (
              <input
                type="text"
                className="hidden"
                name={seat.seatCode}
                value={seatPrice.toFixed(2)}
              />
            )}
            <div className="flex flex-col">
              <p className="font-light">Seat Type</p>
              <div className=" font-bold">{seat.seatType}</div>
            </div>
            <div className="flex flex-col">
              <p className=" font-light">Seat Code</p>
              <div className=" font-bold">{seat.seatCode}</div>
            </div>
            <div className="flex flex-col">
              <p className="font-light">Price</p>
              <div className=" font-bold">{seatPrice.toFixed(2)}</div>
            </div>
            <button
              onClick={() => {
                setSelected(false);
              }}
              className=" flex items-center justify-center"
            >
              Remove
            </button>
          </li>,
          document.getElementById("portalExit")!,
        )}
    </>
  );
}
