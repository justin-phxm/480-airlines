import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PaymentForm from "./PaymentForm";
import { useFlight } from "../FlightContext";

export default function PaymentModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { chosenSeats } = useFlight();
  return (
    <>
      <Button
        color="secondary"
        className="border-violet-500 text-lg font-bold normal-case text-violet-500"
        variant="outlined"
        disabled={chosenSeats.length === 0}
        onClick={() => setOpen(true)}
      >
        Checkout
      </Button>
      <Dialog
        fullWidth
        maxWidth="lg"
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
