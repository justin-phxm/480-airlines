import type { Flight } from "@prisma/client";
import FlightInformation from "./FlightInformation";
import SeatOptions from "./SeatOptions";

export default function BookingDetails({ flight }: { flight: Flight }) {
  return (
    <div className=" fixed right-0 top-20 inline-flex flex-1 flex-col items-start justify-start self-stretch border-l bg-opacity-50 backdrop-blur-xl">
      <FlightInformation flight={flight} />
      <SeatOptions />
      <ol
        className="flex max-h-96 w-full list-decimal flex-col overflow-y-auto text-black"
        id="portalExit"
      />
    </div>
  );
}
