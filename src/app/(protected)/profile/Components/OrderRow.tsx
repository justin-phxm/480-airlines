import { type Transaction } from "@prisma/client";
import CancelBookingButton from "./CancelBookingButton";
import { formattedDateTime } from "~/lib/utils";
import TicketInformation from "./TicketInformation";

export default function OrderRow({
  transaction,
}: {
  transaction: Transaction;
}) {
  const formattedArrivalTime = formattedDateTime(transaction.arrivalTime);
  const formattedDepartureTime = formattedDateTime(transaction.departureTime);
  const formattedTransactionTime = formattedDateTime(transaction.createdAt);
  return (
    <li className="flex flex-col gap-2 border-b-2 border-violet-500 p-4 shadow transition duration-300 ease-in hover:-translate-y-1 hover:bg-indigo-200">
      <div className="flex items-center gap-4">
        <p>{formattedTransactionTime}</p>
        <p className="font-light">${transaction.price.toFixed(0)}</p>
      </div>
      <div className=" grid w-full auto-cols-auto grid-flow-col gap-2 ">
        <TicketInformation transaction={transaction} />
        <section className="flex w-auto flex-row gap-4">
          <div className="flex flex-col">
            <div className=" text-nowrap">Departure Date:</div>
            <div className=" text-nowrap">Arrival Date:</div>
          </div>
          <div className="flex w-3/5 flex-col">
            <div className="truncate">{formattedDepartureTime}</div>
            <div className="truncate">{formattedArrivalTime}</div>
          </div>
        </section>
        <section className="flex w-auto flex-col ">
          <p className=" w-11/12 truncate ">
            {transaction.departureCity} - {transaction.arrivalCity}
          </p>
          <p>
            {`${transaction.departureAirportCode} - ${transaction.arrivalAirportCode}`}
          </p>
        </section>
        <section className="flex w-auto flex-col text-end ">
          <p>{transaction.seatType}</p>
          <p className=" font-light">
            <span className="hidden lg:block">Seat Code:</span>
            {transaction.seatCode}
          </p>
        </section>
        <section className="flex w-auto items-center justify-center">
          <CancelBookingButton transaction={transaction} />
        </section>
      </div>
    </li>
  );
}
