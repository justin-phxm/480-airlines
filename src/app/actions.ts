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
  date: string;
  time: string;
}) {
  const FormData = z.object({
    origin: z.string().max(50),
    destination: z.string().max(50),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    time: z.string(),
  });
  const res = FormData.safeParse({
    origin,
    destination,
    date,
    time,
  });
  if (!res.success) {
    return;
    // return "Invalid input. Please try again.";
  }
  const parsedDate = new Date(date);
  const flights = await db.flight.findMany({
    where: {
      OR: [
        {
          AND: {
            departureCity: { contains: origin },
            departureTime: { gte: parsedDate },
          },
        },
        {
          AND: {
            arrivalCity: { contains: destination },
            departureTime: { gte: parsedDate },
          },
        },
        {
          AND: {
            departureAirportCode: { contains: origin },
            departureTime: { gte: parsedDate },
          },
        },
        {
          AND: {
            arrivalAirportCode: { contains: destination },
            departureTime: { gte: parsedDate },
          },
        },
      ],
    },
  });
  return flights;
}
