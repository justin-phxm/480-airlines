"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTransaction } from "./TransactionContext";
import { toast } from "react-toastify";
import { TicketColor } from "~/app/booking/[id]/components/BookingOverview";
import { twMerge } from "tailwind-merge";
import { cancelTransaction } from "~/app/actions";
import { useRouter } from "next/navigation";
import { formattedDateTime } from "~/lib/utils";
export default function CancellationModal() {
  const { isModalOpen, setIsModalOpen, transaction } = useTransaction();

  const router = useRouter();
  if (!transaction) {
    return <div className="">Error loading. Please try again later</div>;
  }
  const {
    price,
    seatType,
    seatCode,
    updatedAt,
    arrivalAirportCode,
    departureAirportCode,
    arrivalCity,
    departureCity,
    departureTime,
    arrivalTime,
    airline,
  } = transaction;
  const formattedUpdateDate = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const formattedDepartureTime = formattedDateTime(departureTime);
  const formattedArrivalTime = formattedDateTime(arrivalTime);
  const taxesAndFees = price * 0.05;
  const total = price + taxesAndFees;
  const ticketColor = TicketColor[seatType];
  const handleCancelFlight = async () => {
    const cancellationReq = await toast.promise(
      cancelTransaction({ transactionID: transaction.id }),
      {
        pending: "Cancelling flight...",
        success: {
          render({ data }) {
            router.refresh();
            setIsModalOpen(false);
            return data.message;
          },
        },
        error: "Error cancelling flight. Please try again later.",
      },
    );
    if (!cancellationReq.success) {
      toast.error("Cancellation did not succeed. Please contact support.");
    }
  };
  return (
    <>
      <Dialog
        open={isModalOpen}
        fullWidth
        maxWidth="md"
        onClose={() => setIsModalOpen(false)}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex flex-1 text-2xl font-bold">
            Transaction Details
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-4 text-black">
              <div
                className={twMerge(
                  `flex flex-row gap-4 rounded-lg bg-gradient-to-l p-3 text-lg ${ticketColor} from-white`,
                )}
              >
                <div className=" flex flex-col gap-4 font-bold ">
                  <div className="flex flex-col">
                    <div className="">Seat Code:</div>
                    <div className="">Seat Class:</div>
                    <div className="">Airline:</div>
                    <div className="">Booked on:</div>
                  </div>

                  <div className="flex flex-col">
                    <div className="">Flight Number:</div>
                    <div className="">Flight Origin:</div>
                    <div className="">Flight Destination:</div>
                    <div className="">Flight Departure Time:</div>
                    <div className="">Flight Arrival Time:</div>
                  </div>
                </div>
                <div className=" flex flex-col gap-4 ">
                  <div className="flex flex-col">
                    <div className="">{seatCode}</div>
                    <div className="capitalize">{seatType} Class</div>
                    <div className="">{airline}</div>
                    <div className="">{formattedUpdateDate}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="">14</div>
                    <div className="">
                      {departureAirportCode}, {departureCity}
                    </div>
                    <div className="">
                      {arrivalAirportCode}, {arrivalCity}
                    </div>
                    <div className="">{formattedDepartureTime}</div>
                    <div className="">{formattedArrivalTime}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-2">
                <div className="flex flex-col items-end gap-1">
                  <p>Subtotal:</p>
                  <p>Taxes and Fees:</p>
                  <p>Total:</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <p>${price}</p>
                  <p>${taxesAndFees.toFixed(2)}</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className=" flex w-full items-center justify-center gap-4">
              <Button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                color="error"
                variant="outlined"
                className=" w-1/2 rounded bg-red-500 py-2 text-lg normal-case text-white hover:bg-red-600"
              >
                Back to order history
              </Button>

              <Button
                type="submit"
                variant="outlined"
                color="success"
                onClick={handleCancelFlight}
                className=" w-1/2 rounded bg-green-500 py-2 text-lg normal-case text-white hover:bg-green-600"
              >
                Cancel Flight
              </Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
