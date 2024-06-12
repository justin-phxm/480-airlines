import { type Transaction } from "@prisma/client";
import FlightTicketSummary from "./FlightTicketSummary";
import { checkIsWindowSeat, formattedDate } from "~/lib/utils";

export default function FlightSummary({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <>
      <div className="text-2xl font-bold text-slate-500">Flight summary</div>
      <p className="text-lg font-semibold text-slate-500">
        Departing {formattedDate(transaction.departureTime)}
      </p>
      <FlightTicketSummary transaction={transaction} />
      <p className="text-slate-400">
        Seat {transaction.seatCode} {"("}
        <span className="lowercase">{transaction.seatType}</span>,{" "}
        {checkIsWindowSeat(transaction.seatCode, transaction.seatType)
          ? "window"
          : "aisle"}
        {")"}, 1 checked bag{" "}
      </p>
    </>
  );
}
