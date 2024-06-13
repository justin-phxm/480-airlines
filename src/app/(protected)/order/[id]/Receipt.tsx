import Link from "next/link";
import AlertComponent from "./components/AlertComponent";
import PaymentMethod, { CardHolderName } from "./components/PaymentMethod";
import FlightSummary from "./components/FlightSummary";
import PriceBreakdown from "./components/PriceBreakdown";
import { type Transaction } from "@prisma/client";
import DownloadCalendar from "./components/DownloadCalendar";

export default function Receipt({
  transaction,
  transactionID,
}: {
  transaction: Transaction;
  transactionID: number;
}) {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-4 p-4">
      <AlertComponent transaction={transaction} />
      <div className=" flex flex-col gap-2 text-lg ">
        <div className="flex text-2xl font-bold text-indigo-500">
          Bon voyage, <CardHolderName />!
        </div>
        <div className="text-lg font-semibold text-slate-500">
          Confirmation number: #{transactionID}
        </div>
        <div className="text-slate-400">
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to {transaction.arrivalAirportCode} airport in{" "}
          {transaction.arrivalCity}. We’ve sent a copy of your booking
          confirmation to your email address. You can also find this page again
          in{" "}
          <Link href={"/profile"} className="text-indigo-500">
            My trips
          </Link>
          .
        </div>
      </div>

      <FlightSummary transaction={transaction} />
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
        <div className=" w-full">
          <div className="flex w-full max-w-lg flex-col gap-4">
            <PriceBreakdown transaction={transaction} />
            <div className="flex w-full flex-row justify-between">
              <Link
                href={"/profile"}
                className="w-fit rounded-xl bg-indigo-400 p-4 font-semibold text-white"
              >
                View Profile 🏠
              </Link>
              <DownloadCalendar transaction={transaction} />
            </div>
          </div>
        </div>
        <PaymentMethod />
      </div>
    </div>
  );
}
