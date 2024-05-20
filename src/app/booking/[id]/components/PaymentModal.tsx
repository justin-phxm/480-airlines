"use client";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import PaymentForm from "./PaymentForm";

export default function PaymentModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        color="secondary"
        className="border-violet-500 text-lg font-bold normal-case text-violet-500"
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        Checkout
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Payment Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <PaymentForm setOpen={setOpen} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
