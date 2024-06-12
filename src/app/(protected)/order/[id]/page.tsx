import { db } from "~/server/db";
import AlertComponent from "./components/AlertComponent";
import Link from "next/link";
import FlightSummary from "./components/FlightSummary";
import PriceBreakdown from "./components/PriceBreakdown";
import PaymentMethod, { CardHolderName } from "./components/PaymentMethod";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const transactionID = parseInt(id);
  const transaction = await db.transaction.findUnique({
    where: { id: transactionID },
  });
  if (!transaction) {
    return <div>Transaction not found</div>;
  }
  return (
    <div className="flex flex-1 flex-col items-center">
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
            confirmation to your email address. You can also find this page
            again in{" "}
            <Link href={"/profile"} className="text-indigo-500">
              My trips
            </Link>
            .
          </div>
        </div>

        <FlightSummary transaction={transaction} />
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <PriceBreakdown transaction={transaction} />
          <PaymentMethod />
        </div>
        <Link
          href={"/profile"}
          className="w-fit rounded-xl bg-indigo-400 p-4 font-semibold text-white"
        >
          View Profile 🏠
        </Link>
      </div>
    </div>
  );
}