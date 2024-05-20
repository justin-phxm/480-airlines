"use client";
import { Button } from "@mui/material";
import React, { useState, type ChangeEvent, type FormEvent } from "react";

// Define the PaymentState type
interface PaymentState {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cancellationInsurance: boolean;
}

// Define the props type for each input component
interface InputProps {
  paymentState: PaymentState;
  setPaymentState: React.Dispatch<React.SetStateAction<PaymentState>>;
}

// Card Number Input Component
const CardNumberInput: React.FC<InputProps> = ({
  paymentState,
  setPaymentState,
}) => (
  <>
    <label htmlFor="cardNumber">Card Number:</label>
    <input
      type="text"
      id="cardNumber"
      name="cardNumber"
      placeholder="1234 5678 9012 3456"
      className="w-full rounded border border-gray-300 p-2"
      value={paymentState.cardNumber}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        const truncatedInput = input.substring(0, 16);
        setPaymentState((prevState) => ({
          ...prevState,
          cardNumber: truncatedInput,
        }));
      }}
      required
    />
  </>
);

// Expiration Date Input Component
const ExpirationDateInput: React.FC<InputProps> = ({
  paymentState,
  setPaymentState,
}) => (
  <>
    <label htmlFor="expirationDate">Expiration Date:</label>
    <input
      type="text"
      id="expirationDate"
      name="expirationDate"
      placeholder="MM/YY"
      className="w-full rounded border border-gray-300 p-2"
      value={paymentState.expirationDate}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
      }}
      required
    />
  </>
);

// CVV Input Component
const CvvInput: React.FC<InputProps> = ({ paymentState, setPaymentState }) => (
  <>
    <label htmlFor="cvv">CVV:</label>
    <input
      type="text"
      id="cvv"
      name="cvv"
      placeholder="123"
      className="w-full rounded border border-gray-300 p-2"
      value={paymentState.cvv}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, "");
        const truncatedInput = input.substring(0, 3);
        setPaymentState((prevState) => ({ ...prevState, cvv: truncatedInput }));
      }}
      required
    />
  </>
);

// Cancellation Insurance Checkbox Component
const CancellationInsuranceInput: React.FC<InputProps> = ({
  paymentState,
  setPaymentState,
}) => (
  <div className="flex flex-row gap-4">
    <label htmlFor="cancellationInsurance">Cancellation Insurance</label>
    <input
      type="checkbox"
      id="cancellationInsurance"
      name="cancellationInsurance"
      className="justify-start rounded border border-gray-300 p-2"
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

const PaymentForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <CardNumberInput
        paymentState={paymentState}
        setPaymentState={setPaymentState}
      />
      <ExpirationDateInput
        paymentState={paymentState}
        setPaymentState={setPaymentState}
      />
      <CvvInput paymentState={paymentState} setPaymentState={setPaymentState} />
      <CancellationInsuranceInput
        paymentState={paymentState}
        setPaymentState={setPaymentState}
      />
      <div className=" flex w-full items-center justify-center gap-4">
        <Button
          onClick={() => {
            setOpen(false);
          }}
          color="error"
          variant="outlined"
          className=" w-1/2 rounded bg-red-500 py-2 text-lg normal-case text-white hover:bg-red-600"
        >
          Cancel
        </Button>

        <Button
          onClick={() => setOpen(false)}
          type="submit"
          className=" w-1/2 rounded bg-green-500 py-2 text-lg normal-case text-white hover:bg-green-600"
        >
          Make Payment
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
