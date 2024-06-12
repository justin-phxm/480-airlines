import { type Transaction } from "@prisma/client";
import RandomAirlineImage from "~/app/components/RandomAirlineImage";
import { calculateFlightDuration, formattedTime } from "~/lib/utils";

export default function FlightTicketSummary({
  transaction,
}: {
  transaction: Transaction;
}) {
  const departureTime = formattedTime(transaction.departureTime);
  const arrivalTime = formattedTime(transaction.arrivalTime);
  const { flightDurationInHours, flightDurationInMinutes } =
    calculateFlightDuration(transaction.arrivalTime, transaction.departureTime);
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-500/50 p-4 shadow transition duration-300 ease-in hover:-translate-y-1 hover:bg-indigo-200">
      <div className=" grid w-full auto-cols-auto grid-flow-col gap-2 py-2 ">
        <section className="flex items-center gap-4">
          <RandomAirlineImage />
          <div className="flex w-3/5 flex-col">
            <p>
              {flightDurationInHours}h {flightDurationInMinutes}m
            </p>
            <p className="truncate text-slate-400">{transaction.airline}</p>
          </div>
        </section>
        <section className="flex w-auto flex-col">
          <p className="flex flex-col">
            {departureTime} - {arrivalTime}
          </p>
          <p className="text-slate-400">{transaction.seatType}</p>
        </section>
        <section className="flex w-auto flex-col text-end ">
          <p className=" truncate ">
            {transaction.departureCity} - {transaction.arrivalCity}
          </p>
          <p className="text-slate-400">
            {`${transaction.departureAirportCode} - ${transaction.arrivalAirportCode}`}
          </p>
        </section>
        <section className="flex w-auto flex-col text-end ">
          <p>${transaction.price}</p>
          <p className=" text-slate-400">round trip</p>
        </section>
      </div>
    </div>
  );
}
