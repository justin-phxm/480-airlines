import { Suspense } from "react";
import { db } from "~/server/db";
import Loading from "./Loading";
import { Role, type Transaction } from "@prisma/client";
import dynamic from "next/dynamic";
import { getServerAuthSession } from "~/server/auth";
import DeniedPage from "~/app/denied/page";
export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const transactionID = parseInt(id);
  const transaction = await db.transaction.findUnique({
    where: { id: transactionID },
  });
  const session = await getServerAuthSession();
  if (
    !transaction ||
    (transaction.customerUserId !== session?.user.id &&
      session?.user.role !== Role.ADMIN)
  ) {
    return <DeniedPage />;
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
