"use server";

import { db } from "~/server/db";

export async function searchFlights({
  origin,
  destination,
  date,
  time,
}: {
  origin: string;
  destination: string;
  date: Date;
  time: string;
}) {
  const flights = await db.flight.findMany({
    where: {
      OR: [
        {
          AND: {
            departureCity: { contains: origin },
            departureTime: { gte: date },
          },
        },
        {
          AND: {
            arrivalCity: { contains: destination },
            departureTime: { gte: date },
          },
        },
        {
          AND: {
            departureAirportCode: { contains: origin },
            departureTime: { gte: date },
          },
        },
        {
          AND: {
            arrivalAirportCode: { contains: destination },
            departureTime: { gte: date },
          },
        },
      ],
    },
  });
  return flights;
}
