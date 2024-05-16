"use server";

import { z } from "zod";
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
  const FormData = z.object({
    origin: z.string().max(50),
    destination: z.string().max(50),
    date: z.date(),
    time: z.string(),
  });
  const res = FormData.safeParse({
    origin,
    destination,
    date: new Date(date),
    time,
  });
  console.log(res);
  if (!res.success) {
    return "Invalid input. Please try again.";
  }
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
