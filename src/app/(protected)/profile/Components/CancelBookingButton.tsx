"use client";

import { Button } from "@mui/material";
import { type Transaction } from "@prisma/client";
import { useTransaction } from "./TransactionContext";

export default function CancelBookingButton({
  transaction,
}: {
  transaction: Transaction;
}) {
  const { setTransaction, setIsModalOpen } = useTransaction();
  function handleClick(): void {
    setTransaction(transaction);
    setIsModalOpen(true);
  }
  if (transaction.canceled)
    return (
      <Button variant="outlined" color="error" disabled>
        Cancelled
      </Button>
    );
  return (
    <Button variant="outlined" color="error" onClick={handleClick}>
      Cancel
    </Button>
  );
}
