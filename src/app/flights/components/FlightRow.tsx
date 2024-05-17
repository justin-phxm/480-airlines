import type { Flight } from "@prisma/client";
import Link from "next/link";

export default function FlightRow({ flight }: { flight: Flight }) {
  const { arrivalTime, departureTime, departureCity, arrivalCity, id } = flight;
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
  const planeIcon = (
    <div className="my-auto flex h-10 w-10 items-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08964 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
          fill="#6E7491"
        />
      </svg>
    </div>
  );
  return (
    <Link href="/seatSelection">
      <li className="inline-flex w-full cursor-pointer gap-2 rounded border-b-2 border-violet-500 px-4 py-1 shadow transition duration-300 ease-in hover:-translate-y-1 hover:bg-indigo-200">
        {planeIcon}
        <div className="flex w-full flex-col whitespace-nowrap text-slate-800">
          <section className="flex w-full flex-row justify-between rounded-full bg-indigo-300 px-4 py-2">
            <div>ID: {id}</div>
            <div>
              Duration: {flightDurationHours}h {flightDurationMinutes}m
            </div>
            <div>
              {formattedDepartureTime} - {formattedArrivalTime}
            </div>
            <div>$500</div>
          </section>
          <div className="flex flex-row justify-between gap-2">
            <div>Origin City: {departureCity}</div>
            <div>Destination: {arrivalCity}</div>
          </div>
        </div>
      </li>
    </Link>
  );
}
