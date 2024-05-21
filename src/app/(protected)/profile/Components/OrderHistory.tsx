import OrderRow from "./OrderRow";
import CancellationModal from "./CancellationModal";
import { getServerAuthSession } from "~/server/auth";
export default async function OrderHistory() {
  const session = await getServerAuthSession();
  const transactions = session?.user.transactions;
  return (
    <ul className="inline-flex w-full flex-col gap-2 rounded-lg border border-violet-100 bg-white p-4">
      {transactions?.map((flight, index) => (
        <button key={index}>
          {/* <OrderRow key={index} transaction={flight} /> */}
        </button>
      ))}
      {transactions && transactions.length === 0 && <div>No orders found</div>}
      {transactions && transactions.length > 0 && (
        <CancellationModal transactionID={transactions[0]?.id} />
      )}
    </ul>
  );
}
