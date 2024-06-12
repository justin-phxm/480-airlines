"use client";

import { type Transaction } from "@prisma/client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function AlertComponent({
  transaction,
}: {
  transaction: Transaction;
}) {
  const [isDismissed, setIsDismissed] = useState(false);
  if (isDismissed) {
    return <div className="h-16" />;
  }
  return (
    <div
      className="flex h-16 items-center justify-between rounded-xl border border-green-700 bg-green-100 p-4 text-green-800 drop-shadow"
      color="success"
      data-aos="fade-right"
    >
      Your flight has been booked successfully! Your confirmation number is #
      {transaction.id}.
      <button
        onClick={() => setIsDismissed(true)}
        className=" rounded p-2 transition duration-300 hover:bg-slate-500/50"
      >
        <IoMdClose />
      </button>
    </div>
  );
}
