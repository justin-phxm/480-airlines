import { type Prisma } from "@prisma/client";
import React from "react";
import { formattedDateTime } from "~/lib/utils";
import TicketInformation from "./TicketInformation";

export default function TicketRow({
  ticket,
}: {
  ticket: Prisma.TicketGetPayload<{
    include: {
      flight: true;
      seat: true;
    };
  }>;
}) {
  const { flight, seat } = ticket;
  return (
    <li className="flex flex-col gap-2 border-b-2 border-violet-500 p-4 shadow transition duration-300 ease-in hover:-translate-y-1 hover:bg-indigo-200">
      <div className=" grid w-full auto-cols-auto grid-flow-col gap-2 py-2 ">
        <TicketInformation ticket={ticket} />
        <section className="flex w-auto flex-row gap-4">
          <div className="flex flex-col">
            <div className=" text-nowrap">Departure Date:</div>
            <div className=" text-nowrap">Arrival Date:</div>
          </div>
          <div className="flex w-3/5 flex-col">
            <div className="truncate">
              {formattedDateTime(flight.departureTime)}
            </div>
            <div className="truncate">
              {formattedDateTime(flight.arrivalTime)}
            </div>
          </div>
        </section>
        <section className="flex w-auto flex-col ">
          <p className=" w-11/12 truncate ">
            {flight.departureCity} - {flight.arrivalCity}
          </p>
          <p>
            {`${flight.departureAirportCode} - ${flight.arrivalAirportCode}`}
          </p>
        </section>
        <section className="flex w-auto flex-col text-end ">
          <p>{seat.seatType}</p>
          <p className=" font-light">Seat Code: {seat.seatCode}</p>
        </section>
      </div>
    </li>
  );
}
