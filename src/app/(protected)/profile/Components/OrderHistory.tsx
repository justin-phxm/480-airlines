import OrderRow from "./OrderRow";
import CancellationModal from "./CancellationModal";
import { getServerAuthSession } from "~/server/auth";
import OrderHistoryClient from "./OrderHistoryClient";
import { getCustomerWithTransactions } from "~/server/db";
export default async function OrderHistory() {
  const session = await getServerAuthSession();
  if (!session) {
    return <div>Not authenticated</div>;
  }
  const user = await getCustomerWithTransactions(session.user.id);
  const transactions = user?.transactions;
  if (!transactions || transactions.length === 0) {
    return <div>No orders found</div>;
  }
  return (
    <OrderHistoryClient>
      <ul className="inline-flex w-full flex-col gap-2 rounded-lg border border-violet-100 bg-white p-4">
        {transactions.map((flight, index) => (
          <OrderRow transaction={flight} key={index} />
        ))}
        <CancellationModal />
      </ul>
    </OrderHistoryClient>
  );
}
