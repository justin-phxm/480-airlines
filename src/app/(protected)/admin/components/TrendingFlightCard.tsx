import { Avatar } from "@mui/material";
import Image from "next/image";
import AvatarGroup from "@mui/material/AvatarGroup";
import Link from "next/link";

function Avatars({ customerImages }: { customerImages: string[] }) {
  return (
    <AvatarGroup className="mt-2" max={5}>
      {customerImages.map((image, index) => (
        <Avatar key={index} alt="Remy Sharp" src={image} />
      ))}
    </AvatarGroup>
  );
}

interface CardProps {
  imageSrc: string | JSX.Element;
  title: string;
  departureTime: string;
  currentBid: string;
  customerImages: string[];
  flightID: number;
}
export default function TrendingFlightCard({
  imageSrc,
  title,
  departureTime,
  currentBid,
  customerImages,
  flightID,
}: CardProps) {
  return (
    <div className="flex flex-col items-start justify-between rounded-2xl p-4">
      <Link
        href={`/booking/${flightID}`}
        className="flex size-48 items-center justify-center rounded-2xl border border-slate-400 bg-slate-50 p-4 transition duration-300 hover:bg-indigo-400"
      >
        {typeof imageSrc === "string" ? (
          <Image
            className="size-48 rounded-2xl"
            src={imageSrc}
            alt={title}
            width={208}
            height={126}
          />
        ) : (
          <div className="size-18 relative rounded-xl border border-blue-500 p-8">
            {imageSrc}
          </div>
        )}
      </Link>
      <div className="flex flex-col">
        <p className="text-lg font-bold leading-loose">{title}</p>
        <p className="truncate text-sm text-slate-400">{departureTime}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-bold text-indigo-600">{currentBid}</p>
        <Link
          href={`/booking/${flightID}`}
          className=" rounded-3xl bg-violet-950 px-4 text-white"
        >
          Book Flight
        </Link>
      </div>
      <Avatars customerImages={customerImages} />
    </div>
  );
}
