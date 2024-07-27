"use client";

import { Tooltip } from "@mui/material";
import { type Transaction } from "@prisma/client";
import Link from "next/link";
import RandomAirlineImage from "~/app/components/RandomAirlineImage";

export default function TicketInformation({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <Tooltip
      title={"Book Additional Flights"}
      placement="top"
      arrow
      followCursor
    >
      <Link href={`/booking/${transaction.flightID}`}>
        <section className="flex items-center gap-4 text-sm">
          <RandomAirlineImage />
          <div className="flex w-3/5 flex-col">
            <p>
              <span className="hidden lg:block">Confirmation Number:</span>#
              {transaction.id}
            </p>
            <p className="truncate font-light">
              Aircraft ID: {transaction.aircraftID}
            </p>
          </div>
        </section>
      </Link>
    </Tooltip>
  );
}
