import { Avatar } from "@mui/material";
import Image from "next/image";
import AvatarGroup from "@mui/material/AvatarGroup";

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
  imageSrc: string;
  title: string;
  departureTime: string;
  currentBid: string;
  customerImages: string[];
}
export default function TrendingFlightCard({
  imageSrc,
  title,
  departureTime,
  currentBid,
  customerImages,
}: CardProps) {
  return (
    <div className="flex flex-col items-start justify-between rounded-2xl p-4">
      <Image
        className="size-48 rounded-2xl"
        src={imageSrc}
        alt={title}
        width={208}
        height={126}
      />
      <div className="flex flex-col">
        <p className="text-lg font-bold leading-loose">{title}</p>
        <p className="truncate text-sm text-slate-400">{departureTime}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm font-bold text-indigo-600">{currentBid}</p>
        <button className=" rounded-3xl bg-violet-950 px-4 text-white">
          Book Flight
        </button>
      </div>
      <Avatars customerImages={customerImages} />
    </div>
  );
}
