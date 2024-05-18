import type { Flight } from "@prisma/client";
import FlightInformation from "./FlightInformation";
import SeatOptions from "./SeatOptions";

export default function BookingDetails({ flight }: { flight: Flight }) {
  return (
    <div className=" fixed right-0 top-20 inline-flex h-[650px] flex-col items-start justify-start self-stretch border-b border-l bg-opacity-50 backdrop-blur-xl">
      <FlightInformation flight={flight} />
      <SeatOptions />
      {/* <UserSelection selectedSeat={selectedSeat} /> */}
    </div>
  );
}
