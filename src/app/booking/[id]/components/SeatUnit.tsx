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

  // const priceMultiplier =
  //   seat.seatType === "FIRST" ? 1.5 : seat.seatType === "BUSINESS" ? 1.25 : 1;
  // const seatPrice = flight.price * priceMultiplier;
  return (
    <>
      <div
        onClick={handleClick}
        className={`h-10 w-7 rounded bg-gradient-to-b ${seat.available && "cursor-pointer"} ${
          chosenSeats.find(
            (chosenSeat) => chosenSeat.seatCode === seat.seatCode,
          )
            ? SeatColor.SELECTED
            : seatColor
        }`}
      />
      {/* {selected &&
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
        )} */}
    </>
  );
}
