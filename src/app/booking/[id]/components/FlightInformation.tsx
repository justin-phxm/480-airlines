import type { Flight } from "@prisma/client";

export default function FlightInformation({ flight }: { flight: Flight }) {
  const {
    departureTime,
    arrivalTime,
    arrivalAirportCode,
    departureCity,
    arrivalCity,
    departureAirportCode,
  } = flight;

  const formatDate = (date: Date) =>
    date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  const formattedDepartureDate = formatDate(departureTime);
  const formattedArrivalDate = formatDate(arrivalTime);

  const airportInfo = (code: string, city: string) => (
    <div className="inline-flex h-24 w-32 flex-col items-start justify-start bg-slate-800 px-6 py-5">
      <div className="w-20 text-2xl font-extrabold uppercase text-neutral-50">
        {code}
      </div>
      <div className="w-20 text-xs text-violet-100">{city}</div>
    </div>
  );
  const arrow = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 16.0005H25.5M25.5 16.0005L18 8.50049M25.5 16.0005L18 23.5005"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const dateInfo = (date: string, label: string) => (
    <div className="inline-flex h-24 w-44 flex-col items-start justify-center gap-1 bg-slate-800 px-6 py-5">
      <div className="self-stretch">
        <span className="text-base font-normal text-white">{date}</span>
      </div>
      <div className="self-stretch text-xs font-normal text-violet-100">
        {label}
      </div>
    </div>
  );

  return (
    <div className="inline-flex justify-between self-stretch bg-slate-800">
      <div className="flex items-center">
        {airportInfo(departureAirportCode, departureCity)}
        {arrow}
        {airportInfo(arrivalAirportCode, arrivalCity)}
      </div>
      <div className="flex items-start">
        {dateInfo(formattedDepartureDate, "Departing")}
        {dateInfo(formattedArrivalDate, "Arriving")}
      </div>
    </div>
  );
}
