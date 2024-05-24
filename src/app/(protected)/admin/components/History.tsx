import Image from "next/image";
import React from "react";

interface HistoryCardProps {
  gradient: string;
  amount: string;
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
    className={`p-4 ${gradient} flex flex-row items-center justify-between gap-4 rounded-2xl shadow`}
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
        <div className=" text-sm font-normal text-slate-400">{name}</div>
      </div>
    </div>
    <div className=" font-bold text-indigo-900">${amount}</div>
    <div className=" font-normal text-slate-400">{timeAgo}</div>
  </div>
);

export default function History() {
  const historyItems: HistoryCardProps[] = [
    {
      gradient: "bg-gradient-to-r from-yellow-200 to-white",
      amount: "1300.00",
      timeAgo: "30s ago",
      route: "YYC -> YVR",
      name: "Mark Benjamin",
      imageUrl: "https://via.placeholder.com/66x66",
    },
    {
      gradient: "bg-violet-100",
      amount: "1300.00",
      timeAgo: "30s ago",
      route: "YYC -> YVR",
      name: "Mark Benjamin",
      imageUrl: "https://via.placeholder.com/66x66",
    },
    {
      gradient: "bg-gradient-to-r from-green-300 to-white",
      amount: "1300.00",
      timeAgo: "30s ago",
      route: "YYC -> YVR",
      name: "Mark Benjamin",
      imageUrl: "https://via.placeholder.com/66x66",
    },
    {
      gradient: "bg-gradient-to-r from-yellow-200 to-white",
      amount: "1300.00",
      timeAgo: "30s ago",
      route: "YYC -> YVR",
      name: "Mark Benjamin",
      imageUrl: "https://via.placeholder.com/66x66",
    },
  ];

  return (
    <div className="flex flex-col gap-7">
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
