import React from "react";
import BookingOverview from "./BookingOverview";
import PaymentDetails from "./PaymentDetails";

export default function PaymentForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className=" grid grid-cols-3 gap-4">
      <PaymentDetails setOpen={setOpen} />
      <BookingOverview />
    </div>
  );
}
