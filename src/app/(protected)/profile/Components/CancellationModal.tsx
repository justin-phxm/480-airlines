"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTransaction } from "./TransactionContext";

export default function CancellationModal() {
  const { isModalOpen, setIsModalOpen, transaction } = useTransaction();
  const transactionID = transaction?.id;
  const handleCancelFlight = async () => {
    try {
      // Call the API to cancel the flight
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error cancelling flight", error);
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
          Cancel Flight {transactionID}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="flex flex-col items-center justify-center">
            <p className="p-2 text-xl font-bold">
              Are you sure you want to cancel your flight?
            </p>
            <div className="">Transaction Details</div>
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
