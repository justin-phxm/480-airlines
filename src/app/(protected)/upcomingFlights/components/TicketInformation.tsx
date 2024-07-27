"use client";
import { Tooltip } from "@mui/material";
import { type Prisma } from "@prisma/client";
import Link from "next/link";
import React from "react";
import RandomAirlineImage from "~/app/components/RandomAirlineImage";

export default function TicketInformation({
  ticket,
}: {
  ticket: Prisma.TicketGetPayload<{
    include: {
      flight: true;
      seat: true;
    };
  }>;
}) {
  const { flight } = ticket;
  return (
    <Tooltip
      title={"Book Additional Flights"}
      placement="top"
      arrow
      followCursor
    >
      <Link href={`/booking/${ticket.flightId}`}>
        <section className="flex items-center gap-4 text-sm">
          <RandomAirlineImage />
          <div className="flex w-3/5 flex-col">
            <p>Flight Number: #{flight.id}</p>
            <p className="truncate font-light">Ticket ID: {ticket.id}</p>
          </div>
        </section>
      </Link>
    </Tooltip>
  );
}
