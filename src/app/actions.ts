"use server";

import { z } from "zod";
import { db } from "~/server/db";
import { type SearchParams } from "./flights/page";
import type { Flight, Prisma, Seat } from "@prisma/client";
export async function searchFlights({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const FormData = z.object({
    origin: z.string().max(50).optional(),
    destination: z.string().max(50).optional(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    time: z.string().optional(),
    page: z.string().optional(),
  });
  const res = FormData.safeParse(searchParams);
  if (!res.success) {
    return;
  }
  const { origin, destination, date, page } = res.data;
  const cursorObj = page ? { id: parseInt(page) } : undefined;
  const parsedDate = new Date(date);
  const flights = await db.flight.findMany({
    take: 10,
    skip: page ? 1 : 0,
    cursor: cursorObj,
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
  const nextCursor =
    flights.length === 10 ? flights[flights.length - 1]?.id : null;

  return { flights, nextCursor };
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
    console.log({ seatIDs, userID, flightCoupon, flightID });
    // Get Customer
    const customer = await db.customer.findUnique({
      where: { userId: userID },
    });
    if (!customer) {
      return { success: false, message: "User not found" };
    }

    // Check if seats are available
    for (const seatID of seatIDs) {
      const seat = await db.seat.findUnique({ where: { id: seatID } });
      if (!seat?.available) {
        return { success: false, message: `Seat ${seatID} not available` };
      }
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
          customerUserId: userID,
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
export async function createTransaction({
  userID,
  flight,
  seats,
}: {
  userID: string;
  flight: Flight;
  seats: Seat[];
  payment?: { amount: number; method: string };
}): Promise<{ success: boolean; message: string }> {
  try {
    // Create a transaction record
    const transactionPromises = seats.map(async (seat) => {
      const transaction: Prisma.TransactionCreateInput = {
        price: flight.price,
        aircraftID: flight.aircraftId,
        seatType: seat.seatType,
        seatCode: seat.seatCode,
        departureAirportCode: flight.departureAirportCode,
        arrivalAirportCode: flight.arrivalAirportCode,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        departureCity: flight.departureCity,
        arrivalCity: flight.arrivalCity,
        customer: { connect: { userId: userID } },
        airline: flight.airline,
        flightID: flight.id,
      };
      await db.transaction.create({
        data: transaction,
      });
    });
    await Promise.all(transactionPromises);
    return { success: true, message: "Transaction successful" };
  } catch (error) {
    console.error("Error creating transaction:", error);
    return { success: false, message: "An error occurred during transaction" };
  }
}
export async function cancelTransaction({
  transactionID,
}: {
  transactionID: number;
}): Promise<{ success: boolean; message: string }> {
  try {
    const transaction = await db.transaction.findUnique({
      where: { id: transactionID },
    });
    if (!transaction) {
      return { success: false, message: "Transaction not found" };
    }
    await db.transaction.delete({ where: { id: transactionID } });
    // call cancelFlight
    // await cancelFlight({ ticketID: transaction.ticketId });
    return { success: true, message: "Transaction cancelled" };
  } catch (error) {
    console.error("Error cancelling transaction:", error);
    return { success: false, message: "An error occurred during cancellation" };
  }
}
export async function cancelFlight({
  ticketID,
}: {
  ticketID: number;
}): Promise<{ success: boolean; message: string }> {
  try {
    const ticket = await db.ticket.findUnique({ where: { id: ticketID } });
    if (!ticket) {
      return { success: false, message: "Ticket not found" };
    }
    await db.ticket.delete({ where: { id: ticketID } });
    return { success: true, message: "Flight cancelled" };
  } catch (error) {
    console.error("Error cancelling flight:", error);
    return { success: false, message: "An error occurred during cancellation" };
  }
}
