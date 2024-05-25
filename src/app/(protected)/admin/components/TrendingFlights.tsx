import Image from "next/image";
import React from "react";

function AvatarGroup() {
  const users = [
    "https://via.placeholder.com/28x41",
    "https://via.placeholder.com/31x46",
    "https://via.placeholder.com/31x38",
  ];
  return (
    <div className="flex w-full items-center justify-start gap-2">
      {users.map((user, index) => (
        <div
          key={index}
          className="flex size-7 items-center justify-center rounded-full bg-indigo-600"
        >
          <Image
            className="rounded-full"
            src={user}
            alt="User"
            width={28}
            height={28}
          />
        </div>
      ))}
      <div className="flex size-7 items-center justify-center rounded-full bg-indigo-600">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-200">
          <span className="text-xs font-bold text-indigo-600">18+</span>
        </div>
      </div>
    </div>
  );
}
interface CardProps {
  imageSrc: string;
  title: string;
  creator: string;
  currentBid: string;
}

function Card({ imageSrc, title, creator, currentBid }: CardProps) {
  return (
    <div className="flex w-80 flex-col justify-between rounded-2xl bg-white p-4">
      <div className=" flex h-52 w-full items-center justify-center rounded-2xl">
        <Image
          className="size-full rounded-2xl"
          src={imageSrc}
          alt={title}
          width={208}
          height={126}
        />
      </div>
      <div className="mb-4 w-full">
        <div className="text-lg font-bold leading-loose text-blue-950">
          {title}
        </div>
        <div className="text-sm font-normal leading-tight text-slate-400">
          By {creator}
        </div>
      </div>
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="text-sm font-bold leading-normal text-indigo-600">
          Current Bid: {currentBid}
        </div>
        <div className="flex h-8 w-28 items-center justify-center rounded-3xl bg-violet-950">
          <span className="text-sm font-medium text-white">Place Bid</span>
        </div>
      </div>
      <AvatarGroup />
    </div>
  );
}

export default function TrendingFlights() {
  const flights = [
    {
      imageSrc: "https://via.placeholder.com/396x238",
      title: "Abstract Colors",
      creator: "Esthera Jackson",
      currentBid: "0.91 ETH",
    },
    {
      imageSrc: "https://via.placeholder.com/782x594",
      title: "ETH AI Brain",
      creator: "Nick Wilson",
      currentBid: "2.82 ETH",
    },
    {
      imageSrc: "https://via.placeholder.com/358x446",
      title: "Mesh Gradients",
      creator: "Will Smith",
      currentBid: "0.56 ETH",
    },
  ];
  return (
    <div className=" flex w-full flex-col items-start justify-start rounded-2xl bg-white p-4">
      <div className="text-2xl font-bold">Trending Flights</div>
      <div className="flex w-full items-end justify-start gap-5">
        {flights.map((flight, index) => (
          <Card
            key={index}
            imageSrc={flight.imageSrc}
            title={flight.title}
            creator={flight.creator}
            currentBid={flight.currentBid}
          />
        ))}
      </div>
    </div>
  );
}
