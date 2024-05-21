import { type Transaction } from "@prisma/client";
import RandomAirlineImage from "~/app/components/RandomAirlineImage";

export default function OrderRow({
  transaction,
}: {
  transaction: Transaction;
}) {
  const formattedArrivalTime = transaction.arrivalTime.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedDepartureTime = transaction.departureTime.toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    },
  );
  const formattedTransactionTime = transaction.createdAt.toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    },
  );
  return (
    <li className="flex cursor-pointer flex-col gap-2 border-b-2 border-violet-500 p-4 shadow transition duration-300 ease-in hover:-translate-y-1 hover:bg-indigo-200">
      <div className="flex items-center gap-4">
        <p>{formattedTransactionTime}</p>
        <p className="font-light">${transaction.price.toFixed(0)}</p>
      </div>
      <div className=" grid w-full auto-cols-auto grid-flow-col gap-2 ">
        <section className="flex w-auto items-center gap-4 text-sm">
          <RandomAirlineImage />
          <div className="flex w-3/5 flex-col">
            <p>{`Transaction ID: ${transaction.id}`}</p>
            <p className="truncate font-light">{`Aircraft ID: ${transaction.aircraftID}`}</p>
          </div>
        </section>
        <section className="flex flex-row gap-4">
          <div className="flex flex-col">
            <div className="">Departure Date:</div>
            <div className="">Arrival Date:</div>
          </div>
          <div className="flex flex-col">
            <div className="">{formattedDepartureTime}</div>
            <div className="">{formattedArrivalTime}</div>
          </div>
        </section>
        <section className="flex w-full flex-col ">
          <p className="truncate ">{`${transaction.departureCity} - ${transaction.arrivalCity}`}</p>
          <p>
            {`${transaction.departureAirportCode} - ${transaction.arrivalAirportCode}`}
          </p>
        </section>
        <section className="flex flex-col text-end ">
          <p>Seat Type: {transaction.seatType}</p>
          <p className=" font-light">Seat Code: {transaction.seatCode}</p>
        </section>
      </div>
    </li>
  );
}
