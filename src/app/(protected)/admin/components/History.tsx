import Image from "next/image";
import React from "react";
import { searchTransactions } from "~/app/actions";
import { SeatColor } from "~/app/booking/[id]/components/PlaneSeat";

interface HistoryCardProps {
  gradient: string;
  amount: number;
  timeAgo: string;
  route: string;
  name: string;
  imageUrl: string;
}
// Reusable HistoryCard component
const HistoryCard = ({
  gradient,
  amount,
  timeAgo,
  route,
  name,
  imageUrl,
}: HistoryCardProps) => (
  <div
    className={`p-4 ${gradient} flex flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-l shadow`}
  >
    <div className="flex flex-row items-center gap-2">
      <Image
        className="size-16 rounded-xl"
        src={imageUrl}
        alt={`${name}'s profile`}
        width={64}
        height={64}
      />
      <div className="flex flex-col">
        <div className=" text-base font-bold text-black">{route}</div>
        <div className=" text-sm font-normal italic text-slate-800">{name}</div>
      </div>
    </div>
    <div className=" font-bold text-indigo-900">${amount}</div>
    <div className=" font-normal text-slate-400">{timeAgo}</div>
  </div>
);

export default async function History() {
  const searchPaginatedTransactions = await searchTransactions({});
  const { transactions, nextCursor } = searchPaginatedTransactions;
  const historyItems: HistoryCardProps[] = transactions.map((transaction) => {
    const seatType = transaction.seatType as keyof typeof SeatColor; // Ensure seatType is a valid key for SeatColor
    const gradient = SeatColor[seatType]; // Assign the corresponding value to gradient
    const timeAgo = transaction.createdAt.getHours() + "h ago";
    const route = `${transaction.departureAirportCode} -> ${transaction.arrivalAirportCode}`;
    return {
      gradient, // Use the gradient variable
      amount: transaction.price,
      timeAgo,
      route,
      name: transaction.customer.user.name,
      imageUrl: transaction.customer.user.image,
    };
  });
  return (
    <div className="flex flex-col gap-7 rounded-2xl bg-white p-4">
      <div className="flex items-center justify-between">
        <div className=" text-xl font-bold text-blue-950">History</div>
        <button className=" rounded-3xl bg-violet-50 px-4 py-2">
          <span className=" text-sm font-medium text-indigo-600">See all</span>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {historyItems.map((item, index) => (
          <HistoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
