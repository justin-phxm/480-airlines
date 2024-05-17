import type { Flight } from "@prisma/client";
import FlightInformation from "./FlightInformation";
import SeatOptions from "./SeatOptions";
import UserSelection from "./UserSelection";

export default function BookingDetails({ flight }: { flight: Flight }) {
  return (
    <div className=" fixed right-0 top-20 inline-flex h-[650px] items-center justify-start bg-white bg-opacity-50 backdrop-blur-xl">
      <div className="w-px self-stretch bg-slate-300" />
      <div className="inline-flex flex-col items-start justify-start self-stretch">
        {/* Top Flight Information */}
        <FlightInformation flight={flight} />

        {/* Center Flight details */}
        <SeatOptions />
        {/* Bottom Passenger Selection */}
        {/* <UserSelection selectedSeat={selectedSeat} /> */}
      </div>
    </div>
  );
}
