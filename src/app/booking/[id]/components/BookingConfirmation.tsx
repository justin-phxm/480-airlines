"use client";

import PaymentModal from "./PaymentModal";
import { bookFlight } from "~/app/actions";
import { useFlight } from "../FlightContext";
import ChosenSeatItem from "./ChosenSeatItem";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
export default function BookingConfirmation() {
  const { chosenSeats, setChosenSeats, flight } = useFlight();
  const { data: session, status } = useSession();
  const handleFlightBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(status === "authenticated")) {
      toast.error("Please login to book a flight");
      return;
    }
    const seatIDs = chosenSeats.map((seat) => seat.id);
    const flightBooking: Parameters<typeof bookFlight>[0] = {
      seatIDs: seatIDs,
      userID: String(session?.user.id),
      flightCoupon: false,
      flightID: flight.id,
    };
    console.log(flightBooking);
    const response = await bookFlight(flightBooking);
    console.log(response);
  };
  return (
    <form
      onSubmit={handleFlightBooking}
      className="flex w-full flex-col items-end gap-4"
    >
      <div className="flex w-full flex-row justify-between px-4">
        <Button
          color="secondary"
          variant="outlined"
          className=" border-violet-500 text-lg font-bold normal-case text-violet-500"
        >
          Total Seats: {chosenSeats.length}
        </Button>
        <div className=" flex flex-row gap-4">
          <Button
            color="secondary"
            onClick={() => setChosenSeats([])}
            variant="outlined"
            className=" border-violet-500 text-lg font-bold normal-case text-violet-500"
          >
            Cancel
          </Button>
          <PaymentModal />
        </div>
      </div>
      <ol className="flex max-h-[15vh] w-full flex-col overflow-y-auto text-black">
        {chosenSeats.map((seat, index) => {
          return <ChosenSeatItem key={seat.id} index={index} seat={seat} />;
        })}
      </ol>
    </form>
  );
}
