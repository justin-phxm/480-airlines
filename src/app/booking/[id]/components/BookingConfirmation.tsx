"use client";

import { useRef } from "react";
import CancelSeats from "./CancelSeats";
import PaymentModal from "./PaymentModal";
import { bookFlights } from "~/app/actions";

export default function BookingConfirmation() {
  const portalRef = useRef<HTMLButtonElement>(null);
  return (
    <form action={bookFlights} className="flex w-full flex-col items-end gap-4">
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
