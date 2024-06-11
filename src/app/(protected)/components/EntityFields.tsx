import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { CiCircleList } from "react-icons/ci";

import { BsAirplane } from "react-icons/bs";

export enum Entities {
  AIRCRAFT = "Aircraft",
  FLIGHT = "Flight",
  NEWSLETTER = "Newsletter",
  USER = "User",
  OTHER = "...",
}
function EntityTypeCard({
  src,
  text,
  isSelected = false,
  setSelectedType,
}: {
  src?: React.ReactNode;
  alt: string;
  text: Entities;
  isSelected?: boolean;
  setSelectedType: React.Dispatch<React.SetStateAction<Entities>>;
}) {
  return (
    <button
      onClick={() => setSelectedType(text)}
      className={` aspect-video max-h-40 w-full ${isSelected ? "border-2 border-blue-600" : "border border-zinc-200"} flex flex-col items-center justify-center gap-1 rounded bg-white`}
    >
      {src}
      <div
        className={`${isSelected ? "text-blue-600" : "text-gray-500"}  text-base font-normal leading-normal`}
      >
        {text}
      </div>
    </button>
  );
}

type EntitiesSelection = {
  name: Entities;
  logo: React.ReactNode;
};
export default function EntityFields({
  selectedType,
  setSelectedType,
}: {
  selectedType: Entities;
  setSelectedType: React.Dispatch<React.SetStateAction<Entities>>;
}) {
  const entities: EntitiesSelection[] = [
    { name: Entities.AIRCRAFT, logo: <BsAirplane size={24} /> },
    { name: Entities.FLIGHT, logo: <PiAirplaneTakeoffLight size={24} /> },
    { name: Entities.USER, logo: <CiUser size={24} /> },
    { name: Entities.NEWSLETTER, logo: <CiMail size={24} /> },
    { name: Entities.OTHER, logo: <CiCircleList size={24} /> },
  ];
  return (
    <div className="flex justify-around gap-2.5">
      {entities.map((entity) => {
        const { name } = entity;
        return (
          <EntityTypeCard
            key={name}
            src={entity.logo}
            alt={name}
            text={name}
            isSelected={selectedType === name}
            setSelectedType={setSelectedType}
          />
        );
      })}
    </div>
  );
}
