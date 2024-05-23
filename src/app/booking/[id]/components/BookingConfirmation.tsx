"use client";

import PaymentModal from "./PaymentModal";
import { bookFlight, createTransaction } from "~/app/actions";
import { useFlight } from "../FlightContext";
import ChosenSeatItem from "./ChosenSeatItem";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function BookingConfirmation() {
  const { chosenSeats, setChosenSeats, flight } = useFlight();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleFlightBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status !== "authenticated") {
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

    const flightPromise = bookFlight(flightBooking);
    const transactionPromise = createTransaction({
      userID: session?.user.id,
      flight: flight,
      seats: chosenSeats,
    });

    const submitBooking = async () => {
      const [flightRes, transactionRes] = await Promise.all([
        flightPromise,
        transactionPromise,
      ]);
      if (flightRes.success && transactionRes.success) {
        return { success: true, message: "Booking successful" };
      } else {
        throw new Error("Error booking flight. Please try again later.");
      }
    };
    void toast.promise(submitBooking(), {
      pending: "Booking flight...",
      success: {
        render({ data }) {
          setChosenSeats([]);
          setOpen(false);
          // TODO: Redirect to congratulations page
          router.push("/profile");
          return data.message;
        },
      },
      error: "Error booking flight. Please try again later.",
    });
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
            disabled={chosenSeats.length === 0}
            className={` border-violet-500 text-lg font-bold normal-case text-violet-500 `}
          >
            Cancel
          </Button>
          <PaymentModal open={open} setOpen={setOpen} />
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
