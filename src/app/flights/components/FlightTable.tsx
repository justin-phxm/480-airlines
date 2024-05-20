import type { Flight } from "@prisma/client";
import FlightRow from "./FlightRow";

export default function FlightTable({ flights }: { flights: Flight[] }) {
  return (
    <ul className="inline-flex w-full flex-col gap-4 rounded-lg border border-violet-100 bg-white p-4">
      {flights?.map((flight, index) => (
        <FlightRow key={index} flight={flight} />
      ))}
    </ul>
  );
}
