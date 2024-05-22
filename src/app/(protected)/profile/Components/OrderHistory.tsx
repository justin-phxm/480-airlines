import OrderRow from "./OrderRow";
import CancellationModal from "./CancellationModal";
import { getServerAuthSession } from "~/server/auth";
import OrderHistoryClient from "./OrderHistoryClient";
export default async function OrderHistory() {
  const session = await getServerAuthSession();
  const transactions = session?.user.customerInformation.transactions;
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
