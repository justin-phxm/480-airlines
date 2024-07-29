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
import { cancelTransaction } from "~/app/actions";
import { useRouter } from "next/navigation";
import { calculatePrice, formattedDateTime } from "~/lib/utils";
import { ColorOfTicket, TAXRATE } from "~/lib/constants";
export default function CancellationModal() {
  const { isModalOpen, setIsModalOpen, transaction } = useTransaction();

  const router = useRouter();
  if (!transaction) {
    return;
  }
  const {
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
  const formattedUpdateDate = formattedDateTime(updatedAt);
  const formattedDepartureTime = formattedDateTime(departureTime);
  const formattedArrivalTime = formattedDateTime(arrivalTime);
  const ticketColor = `decoration-${ColorOfTicket[seatType]}`;
  const { basePrice, seatUpcharge, subTotal, taxes, total } = calculatePrice(
    transaction.price,
    transaction.seatType,
  );
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
            <div className="flex w-full items-center justify-between gap-4 text-black">
              <div className={`flex flex-row gap-4 rounded-lg p-3 text-lg`}>
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
                    <div
                      className={`rounded-lg capitalize underline ${ticketColor} decoration-4 `}
                    >
                      {seatType} Class
                    </div>
                    <div className="">{airline}</div>
                    <div className="">{formattedUpdateDate}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="">{transaction.flightID}</div>
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
              <ol className="flex max-w-lg flex-1 flex-col text-lg text-slate-500">
                <li className="flex justify-between">
                  <p>Departing Flight</p>
                  <p>${basePrice.toFixed(2)}</p>
                </li>
                <li className="flex justify-between">
                  <p>Seat upgrade </p>
                  <p>${seatUpcharge.toFixed(2)}</p>
                </li>
                <li className="flex justify-between">
                  <p>Baggage Fees</p>
                  <p>$0.00</p>
                </li>
                <br />
                <li className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${subTotal.toFixed(2)}</p>
                </li>
                <li className="flex justify-between">
                  <p>Taxes ({((TAXRATE - 1) * 100).toFixed(2)}%)</p>
                  <p>${taxes.toFixed(2)}</p>
                </li>
                <br />
                <li className="flex justify-between border-y border-slate-400 py-2">
                  <p>Amount paid</p>
                  <p>${total.toFixed(2)}</p>
                </li>
              </ol>
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
