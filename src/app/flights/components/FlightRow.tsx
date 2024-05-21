import type { Flight } from "@prisma/client";
import Link from "next/link";
import RandomAirlineImage from "~/app/components/RandomAirlineImage";
export default function FlightRow({ flight }: { flight: Flight }) {
  const {
    arrivalTime,
    departureTime,
    departureCity,
    arrivalCity,
    departureAirportCode,
    arrivalAirportCode,
    price,
    airline,
  } = flight;
  const flightDuration = new Date(
    arrivalTime.getTime() - departureTime.getTime(),
  );

  const flightDurationHours = flightDuration.getUTCHours();

  const flightDurationMinutes = flightDuration.getUTCMinutes();

  const formattedArrivalTime = arrivalTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedDepartureTime = departureTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <Link href={`/booking/${flight.id}`}>
      <li className=" grid w-full cursor-pointer grid-cols-4 gap-2 rounded border-b-2 border-violet-500 p-4 shadow transition duration-300 ease-in hover:-translate-y-1 hover:bg-indigo-200">
        <section className="flex w-auto  gap-4 ">
          <RandomAirlineImage />
          <div className="flex w-3/5 flex-col">
            <p>{`${flightDurationHours}h ${flightDurationMinutes}m`}</p>
            <p className=" truncate font-light">{airline}</p>
          </div>
        </section>
        <section className="flex flex-col ">
          <p>{`${formattedDepartureTime} - ${formattedArrivalTime}`}</p>
        </section>
        <section className="flex w-full flex-col ">
          <p className="truncate ">{`${departureCity} - ${arrivalCity}`}</p>
          <p> {`${departureAirportCode} - ${arrivalAirportCode}`}</p>
        </section>
        <section className="flex flex-col text-end ">
          <p>${price.toFixed(0)}</p>
          <p className=" font-light">round trip</p>
        </section>
      </li>
    </Link>
  );
}
