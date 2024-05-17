import type { Flight } from "@prisma/client";
import React from "react";
export default function FlightInformation(props: { flight: Flight }) {
  const { flight } = props;
  const departureTime = flight ? new Date(flight.dateOfDeparture) : new Date();

  const arrivalTime = flight ? new Date(flight.dateOfArrival) : new Date();

  const originCode = flight?.departureAirport;
  const originLocation = flight?.departureCity;
  const destinationCode = flight?.arrivalAirport;
  const destinationLocation = flight?.arrivalCity;

  const formattedDepartureDate = departureTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedArrivalDate = arrivalTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <>
      <div className="inline-flex items-center justify-between self-stretch bg-slate-800">
        {/* Location Details */}
        <div className="flex items-center justify-start">
          {/* Origin Details */}
          <div className="inline-flex h-24 w-32 flex-col items-start justify-start bg-slate-800 px-6 py-5">
            <div className="w-20 text-2xl font-extrabold uppercase text-neutral-50">
              {originCode}
            </div>
            <div className="w-20 text-xs text-violet-100">{originLocation}</div>
          </div>

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

          {/* Destination Details */}
          <div className="relative h-8 w-8 rounded" />
          <div className="inline-flex h-24 w-32 flex-col items-start justify-start bg-slate-800 px-6 py-5">
            <div className="w-20 text-2xl font-extrabold uppercase text-neutral-50">
              {destinationCode}
            </div>
            <div className="w-20 text-xs font-normal text-violet-100">
              {destinationLocation}
            </div>
          </div>
        </div>
        {/* Time Details */}
        <div className="flex items-start justify-start">
          <div className="h-22 w-px bg-slate-800">
            <div className="h-22 w-px bg-slate-500" />
          </div>
          {/* Departure Time */}
          <div className="inline-flex flex-col items-center justify-start">
            <div className=" h-22 inline-flex w-44 flex-col items-start justify-center gap-1 bg-indigo-500 px-6 py-5">
              <div className="self-stretch">
                <span className="text-base font-normal text-white">
                  {formattedDepartureDate}
                </span>
              </div>
              <div className="self-stretch text-xs font-normal text-violet-100">
                Departing
              </div>
            </div>
            <div className="h-px w-5" />
          </div>
          {/* Arrival Time */}
          <div className="h-22 w-px bg-slate-800">
            <div className="h-22 w-px bg-slate-500" />
          </div>
          <div className="inline-flex h-24 w-44 flex-col items-start justify-center gap-1 bg-slate-800 px-6 py-5">
            <div className="self-stretch">
              <span className="text-base font-normal text-white">
                {formattedArrivalDate}
              </span>
            </div>
            <div className="self-stretch text-xs font-normal text-violet-100">
              Arriving
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
