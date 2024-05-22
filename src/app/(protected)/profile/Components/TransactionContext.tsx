"use client";

import { type Transaction } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface TransactionContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  transaction: Transaction | undefined;
  setTransaction: React.Dispatch<React.SetStateAction<Transaction | undefined>>;
}
const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined,
);
export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transaction, setTransaction] = useState<Transaction | undefined>(
    {} as Transaction,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <TransactionContext.Provider
      value={{ transaction, setTransaction, isModalOpen, setIsModalOpen }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
