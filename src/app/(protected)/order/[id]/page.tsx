import { db } from "~/server/db";
import AlertComponent from "./components/AlertComponent";
import Link from "next/link";
import FlightSummary from "./components/FlightSummary";
export async function generateStaticParams() {
  const flights = await db.flight.findMany();
  return flights.map((flight) => ({
    params: { id: flight.id.toString() },
  }));
}
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
          <div className="text-2xl font-bold text-indigo-500">
            Bon voyage, Sophia!
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
        <div className="text-2xl font-bold text-slate-500">Payment method</div>
        <div className="relative h-48 w-72 rounded-2xl bg-gradient-to-b from-pink-500 to-red-400 shadow-inner">
          <div className="absolute left-[24px] top-[109px] text-lg font-semibold text-violet-50">
            Sophia Knowles
          </div>
          <div className="absolute left-[24px] top-[142px]">
            <span className="font-['Roboto'] text-base font-medium tracking-widest text-violet-50">
              ••••••••••••
            </span>
            <span className="text-base font-semibold tracking-wide text-violet-50">
              3456
            </span>
          </div>
          <div className="absolute left-[228px] top-[142px] text-right text-base font-semibold tracking-wide text-violet-50">
            10/23
          </div>
          <div className="absolute left-[24px] top-[28px] h-6 w-20">
            <div className="absolute left-0 top-[-0px] h-6 w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
