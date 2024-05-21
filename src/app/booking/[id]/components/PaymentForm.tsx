import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState, type ChangeEvent, type FormEvent } from "react";
import BookingOverview from "./BookingOverview";

interface PaymentState {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cancellationInsurance: boolean;
}

const CancellationInsuranceInput = ({
  paymentState,
  setPaymentState,
}: {
  paymentState: PaymentState;
  setPaymentState: React.Dispatch<React.SetStateAction<PaymentState>>;
}) => (
  <div className="flex flex-row gap-4">
    <label htmlFor="cancellationInsurance">Cancellation Insurance</label>
    <input
      type="checkbox"
      id="cancellationInsurance"
      name="cancellationInsurance"
      className=" justify-start rounded border border-gray-300 p-2"
      checked={paymentState.cancellationInsurance}
      onChange={() =>
        setPaymentState((prevState) => ({
          ...prevState,
          cancellationInsurance: !prevState.cancellationInsurance,
        }))
      }
    />
  </div>
);
type InputField = {
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  title?: string;
  value?: string;
};

export default function PaymentForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [paymentState, setPaymentState] = useState<PaymentState>({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cancellationInsurance: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(paymentState);
  };
  const inputFields: InputField[] = [
    {
      type: "text",
      name: "cardNumber",
      title: "Card Number",
      placeholder: "1234 5678 9012 3456",
      value: paymentState.cardNumber,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        const truncatedInput = input.substring(0, 16);
        setPaymentState((prevState) => ({
          ...prevState,
          cardNumber: truncatedInput,
        }));
      },
      required: true,
    },
    {
      type: "text",
      name: "expirationDate",
      title: "Expiration Date",
      placeholder: "MM/YY",
      value: paymentState.expirationDate,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        let formattedInput = input;
        if (formattedInput.length > 2) {
          formattedInput =
            formattedInput.slice(0, 2) + "/" + formattedInput.slice(2, 4);
        }
        formattedInput = formattedInput.substring(0, 5);
        setPaymentState((prevState) => ({
          ...prevState,
          expirationDate: formattedInput,
        }));
      },
      required: true,
    },
    {
      type: "text",
      title: "CVV",
      name: "cvv",
      placeholder: "123",
      value: paymentState.cvv,
      defaultValue: new Date().toISOString().split("T")[0],
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        const truncatedInput = input.substring(0, 3);
        setPaymentState((prevState) => ({ ...prevState, cvv: truncatedInput }));
      },
      required: true,
    },
  ];
  return (
    <div className=" grid grid-cols-3 gap-4">
      <form
        className="col-span-2 flex w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {inputFields.map((field) => (
          <>
            <label htmlFor={field.name}>{field.title}</label>
            <input
              className="w-full rounded border border-gray-300 p-2"
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              required={field.required}
            />
          </>
        ))}
        <CancellationInsuranceInput
          paymentState={paymentState}
          setPaymentState={setPaymentState}
        />
        <div className=" text-light text-lg">
          <h1> Cancellation policy</h1>
          <div className="text-sm text-slate-400">
            This flight has a flexible cancellation policy. If you cancel or
            change your flight up to 30 days before the departure date, you are
            eligible for a free refund. All flights booked on Tripma are backed
            byour satisfaction guarantee, however cancellation policies vary
            byairline. See the
            <Link className=" text-indigo-500" href="/policy">
              {" "}
              full cancellation policy{" "}
            </Link>
            for this flight.
          </div>
        </div>
        <div className=" flex w-full items-center justify-center gap-4">
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="error"
            variant="outlined"
            className=" w-1/2 rounded bg-red-500 py-2 text-lg normal-case text-white hover:bg-red-600"
          >
            Back to seat select
          </Button>

          <Button
            type="submit"
            variant="outlined"
            color="success"
            className=" w-1/2 rounded bg-green-500 py-2 text-lg normal-case text-white hover:bg-green-600"
          >
            Make Payment
          </Button>
        </div>
      </form>
      <BookingOverview />
    </div>
  );
}
