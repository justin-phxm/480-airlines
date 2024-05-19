import type { Flight } from "@prisma/client";
import FlightInformation from "./FlightInformation";
import SeatOptions from "./SeatOptions";
import CancelSeats from "./CancelSeats";

export default function BookingDetails({ flight }: { flight: Flight }) {
  const formAction = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className=" fixed right-0 top-20 inline-flex flex-1 flex-col items-start justify-start self-stretch border-b border-l bg-opacity-50 backdrop-blur-xl">
      <FlightInformation flight={flight} />
      <SeatOptions />
      <form
        action={formAction}
        className="flex w-full flex-col items-end gap-4"
      >
        <div>
          <CancelSeats />
          <button
            type="submit"
            className=" mr-4 rounded border border-violet-500 p-2 text-lg font-bold text-violet-500"
          >
            Checkout
          </button>
        </div>
        <div
          className="flex max-h-72 w-full flex-col overflow-y-auto text-black"
          id="portalExit"
        />
      </form>
    </div>
  );
}
