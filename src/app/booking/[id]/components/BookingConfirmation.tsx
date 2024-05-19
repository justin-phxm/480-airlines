"use client";

import { useRef } from "react";
import CancelSeats from "./CancelSeats";
import PaymentModal from "./PaymentModal";
import { bookFlight } from "~/app/actions";

export default function BookingConfirmation() {
  const portalRef = useRef<HTMLButtonElement>(null);
  const handleFlightBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const flightBooking: Parameters<typeof bookFlight>[0] = {
      seatIDs: [],
      userID: "",
      flightCoupon: false,
      flightID: 0,
    };
    const response = await bookFlight(flightBooking);
    console.log(response);
  };
  return (
    <form
      onSubmit={handleFlightBooking}
      className="flex w-full flex-col items-end gap-4"
    >
      <div className="flex flex-row gap-4">
        <CancelSeats />
        <PaymentModal portalRef={portalRef} />
        <div />
      </div>
      <div
        className="flex max-h-72 w-full flex-col overflow-y-auto text-black"
        id="portalExit"
      />
      <button type="submit" ref={portalRef} />
    </form>
  );
}
