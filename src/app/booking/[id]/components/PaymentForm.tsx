import { Button } from "@mui/material";
import React, { useState, type ChangeEvent, type FormEvent } from "react";

// Define the PaymentState type
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
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <>
          <label htmlFor={field.name}>{field.name}</label>
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
          type="submit"
          className=" w-1/2 rounded bg-green-500 py-2 text-lg normal-case text-white hover:bg-green-600"
        >
          Make Payment
        </Button>
      </div>
    </form>
  );
}
