"use server";

import { z } from "zod";
import { db } from "~/server/db";
// TODO: Add pagination, allow optional parameters
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
  }
  const parsedDate = new Date(date);
  const flights = await db.flight.findMany({
    where: {
      OR: [
        {
          AND: {
            departureCity: { contains: origin, mode: "insensitive" },
            departureTime: { gte: parsedDate },
          },
        },
        {
          AND: {
            arrivalCity: { contains: destination, mode: "insensitive" },
            departureTime: { gte: parsedDate },
          },
        },
        {
          AND: {
            departureAirportCode: { contains: origin, mode: "insensitive" },
            departureTime: { gte: parsedDate },
          },
        },
        {
          AND: {
            arrivalAirportCode: { contains: destination, mode: "insensitive" },
            departureTime: { gte: parsedDate },
          },
        },
      ],
    },
  });
  return flights;
}
/* 
Check if seat is available
Check if customer has companion ticket

Update for concurrent operations

Creates a Ticket
Sets Seat Availability
Adds Tickets to User
?Adds tickets to Flight
Creates a Transaction,
*/
export async function bookFlight({
  seatIDs,
  userID,
  flightCoupon,
  flightID,
}: {
  seatIDs: number[];
  userID: string;
  flightCoupon: boolean;
  flightID: number;
}): Promise<{ success: boolean; message: string }> {
  try {
    // Check if seats are available
    for (const seatID of seatIDs) {
      const seat = await db.seat.findUnique({ where: { id: seatID } });
      if (!seat?.available) {
        return { success: false, message: `Seat ${seatID} not available` };
      }
    }

    const customer = await db.customer.findUnique({
      where: { userId: userID },
    });
    if (!customer) {
      return { success: false, message: "User not found" };
    }

    if (flightCoupon && !customer.flightCoupon) {
      return { success: false, message: "User does not have a flight coupon" };
    }

    // Create tickets, set seat availability, and add tickets to user and flight
    const tickets = [];
    for (const seatID of seatIDs) {
      const seat = await db.seat.update({
        where: { id: seatID },
        data: { available: false },
      });

      const ticket = await db.ticket.create({
        data: {
          userId: userID,
          seatId: seat.id,
          flightId: flightID,
        },
      });

      tickets.push(ticket);

      // Add the ticket to the flight
      await db.flight.update({
        where: { id: flightID },
        data: { tickets: { connect: { id: ticket.id } } },
      });
    }

    return { success: true, message: "Booking successful" };
  } catch (error) {
    console.error("Error booking flight:", error);
    return { success: false, message: "An error occurred during booking" };
  }
}
