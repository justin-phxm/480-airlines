import { Suspense } from "react";
import { db } from "~/server/db";
import Loading from "./Loading";
import { type Transaction } from "@prisma/client";
import dynamic from "next/dynamic";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const transactionID = parseInt(id);
  const transaction = await db.transaction.findUnique({
    where: { id: transactionID },
  });
  if (!transaction) {
    return <div>Transaction not found</div>;
  }
  return (
    <div className="flex flex-1 flex-col items-center">
      <Suspense fallback={<Loading />}>
        <WaitingWrapper
          transaction={transaction}
          transactionID={transactionID}
        />
      </Suspense>
    </div>
  );
}

const WaitingWrapper = async ({
  transaction,
  transactionID,
}: {
  transaction: Transaction;
  transactionID: number;
}) => {
  const [ReceiptComponent] = await Promise.all([
    dynamic(() => import("./Receipt")),
    new Promise((resolve) => setTimeout(resolve, 5000)),
  ]);
  return (
    <ReceiptComponent transaction={transaction} transactionID={transactionID} />
  );
};
