import airlineImages from "@/components/airlineImage";
import Image from "next/image";
import PlaneIcon from "./PlaneIcon";
export default function RandomAirlineImage({
  none,
  className,
}: {
  none?: boolean;
  className?: string;
}) {
  const randomAirlineImage = none
    ? null
    : airlineImages[Math.floor(Math.random() * airlineImages.length)];
  return (
    <>
      {randomAirlineImage ? (
        <div className="relative size-12">
          <Image
            src={randomAirlineImage}
            alt={""}
            className={"object-contain " + className}
            placeholder="blur"
            fill
            sizes="10vw"
          />
        </div>
      ) : (
        <div className=" w-1/5">
          <PlaneIcon />
        </div>
      )}
    </>
  );
}
