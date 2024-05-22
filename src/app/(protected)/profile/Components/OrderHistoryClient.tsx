"use client";
import { TransactionProvider } from "./TransactionContext";
export default function OrderHistoryClient({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <TransactionProvider>{children}</TransactionProvider>;
}
