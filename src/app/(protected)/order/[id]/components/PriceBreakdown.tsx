import { type Transaction } from "@prisma/client";
import { TAXRATE } from "~/lib/constants";
import { calculatePrice } from "~/lib/utils";
export default function FlightSummary({
  transaction,
}: {
  transaction: Transaction;
}) {
  const { basePrice, seatUpcharge, subTotal, taxes, total } = calculatePrice(
    transaction.price,
    transaction.seatType,
  );
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="text-2xl font-bold text-slate-500">Price breakdown</div>
      <ol className="flex max-w-lg flex-col text-lg text-slate-500">
        <li className="flex justify-between">
          <p>Departing Flight</p>
          <p>${basePrice.toFixed(2)}</p>
        </li>
        <li className="flex justify-between">
          <p>Seat upgrade {transaction.seatType}</p>
          <p>${seatUpcharge.toFixed(2)}</p>
        </li>
        <li className="flex justify-between">
          <p>Baggage Fees</p>
          <p>$0.00</p>
        </li>
        <br />
        <li className="flex justify-between">
          <p>Subtotal</p>
          <p>${subTotal.toFixed(2)}</p>
        </li>
        <li className="flex justify-between">
          <p>Taxes ({((TAXRATE - 1) * 100).toFixed(2)}%)</p>
          <p>${taxes.toFixed(2)}</p>
        </li>
        <br />
        <li className="flex justify-between border-y border-slate-400 py-2">
          <p>Amount paid</p>
          <p>${total.toFixed(2)}</p>
        </li>
      </ol>
    </div>
  );
}
