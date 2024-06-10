"use server";
import { z } from "zod";
import { db } from "~/server/db";
import { type SearchParams } from "./flights/page";
import { type Prisma, SeatType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import type { BenefitParams } from "./membership/components/BenefitList";
export async function signupMembership({ userID }: { userID: string }) {
  try {
    await db.customer.update({
      where: { userId: userID },
      data: { isMember: true },
    });
    revalidatePath("/membership");
  } catch (error) {
    console.error("Error signing up for membership:", error);
  }
}
export async function upgradeMembership(formData: BenefitParams) {
  const userIDValidator = z.object({
    userID: z.string(),
    benefit: z.string(),
  });
  const validatedForm = userIDValidator.safeParse(formData);
  if (!validatedForm.success) return;
  const benefitField: Record<string, boolean> = {
    [validatedForm.data.benefit]: true,
  };
  console.log(benefitField);
  try {
    await db.customer.update({
      where: { userId: validatedForm.data?.userID },
      data: benefitField,
    });
    revalidatePath("/membership");
  } catch (error) {
    console.error("Error upgrading membership:", error);
  }
}
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
export async function searchTransactions({ page }: { page?: number }) {
  const transactions = await db.transaction.findMany({
    take: 4,
    skip: page ? 1 : 0,
    cursor: page ? { id: page } : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      customer: { include: { user: true } },
    },
  });
  const nextCursor =
    transactions.length === 4
      ? transactions[transactions.length - 1]?.id
      : null;
  return { transactions, nextCursor };
}
export async function searchCustomers({ skip }: { skip?: number }) {
  const customers = await db.customer.findMany({
    take: 10,
    skip: skip ?? 0,
    include: {
      user: true,
      transactions: true,
    },
    orderBy: { transactions: { _count: "desc" } },
  });
  return customers;
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
}): Promise<{
  success: boolean;
  message: string;
  tickets?: Prisma.TicketGetPayload<{
    include: {
      customer: true;
      seat: true;
      flight: true;
    };
  }>[];
}> {
  try {
    const customer = await db.customer.findUniqueOrThrow({
      where: { userId: userID },
    });
    if (flightCoupon && !customer.flightCoupon) {
      throw new Error("User does not have a flight coupon");
    }

    const seatPromises = seatIDs.map((seatID) =>
      db.seat.findUniqueOrThrow({ where: { id: seatID } }),
    );
    let seats = await Promise.all(seatPromises);
    for (const seat of seats) {
      if (!seat.available) {
        throw new Error(`Seat ${seat.id} not available`);
      }
    }
    const seatUpdatePromises = seatIDs.map((seatID) =>
      db.seat.update({ where: { id: seatID }, data: { available: false } }),
    );
    seats = await Promise.all(seatUpdatePromises);
    const ticketPromises = seats.map((seat) =>
      db.ticket.create({
        data: {
          customerUserId: userID,
          seatId: seat.id,
          flightId: flightID,
        },
        include: {
          customer: true,
          seat: true,
          flight: true,
        },
      }),
    );
    const tickets = await Promise.all(ticketPromises);
    await createTransaction({ tickets });
    return { success: true, message: "Booking successful", tickets: tickets };
  } catch (error) {
    console.error("Error booking flight:", error);
    return { success: false, message: "An error occurred during booking" };
  }
}
export async function createTransaction({
  tickets,
}: {
  tickets: Prisma.TicketGetPayload<{
    include: {
      customer: true;
      seat: true;
      flight: true;
    };
  }>[];
  payment?: { amount: number; method: string };
}): Promise<{ success: boolean; message: string }> {
  try {
    // Create a transaction record
    const transactionPromises = tickets.map(async (ticket) => {
      const { flight, seat, customerUserId } = ticket;
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
        customer: { connect: { userId: customerUserId } },
        airline: flight.airline,
        flightID: flight.id,
        ticketID: ticket.id,
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
    const transaction = await db.transaction.update({
      where: { id: transactionID },
      data: { canceled: true },
    });
    const cancelFlightReq = await cancelFlight({
      ticketID: transaction.ticketID,
    });
    if (cancelFlightReq.success) {
      return { success: true, message: "Transaction cancelled" };
    } else {
      throw new Error("Error cancelling flight");
    }
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
    const ticket = await db.ticket.delete({ where: { id: ticketID } });
    await db.seat.update({
      where: { id: ticket.seatId },
      data: { available: true },
    });
    return { success: true, message: "Flight cancelled" };
  } catch (error) {
    console.error("Error cancelling flight:", error);
    return {
      success: false,
      message: "An error occurred while cancelling flight",
    };
  }
}
export async function createAircraft({
  aircraftName,
  businessClassSeats,
  firstClassSeats,
  economyClassSeats,
}: {
  aircraftName: string;
  businessClassSeats: number;
  firstClassSeats: number;
  economyClassSeats: number;
}) {
  try {
    const aircraft = await db.aircraft.create({
      data: {
        name: aircraftName,
        seats: {
          create: generateSeatCodes(
            firstClassSeats,
            businessClassSeats,
            economyClassSeats,
          ),
        },
      },
      include: {
        seats: true,
      },
    });
    return { success: true, message: `Aircraft created ID: ${aircraft.id}` };
  } catch (error) {
    console.error("Error creating aircraft:", error);
    return {
      success: false,
      message: "An error occurred while creating aircraft",
    };
  }
}
export async function createFlight({
  aircraftID,
  props,
}: {
  aircraftID: string;
  props: Prisma.FlightCreateInput;
}) {
  try {
    const flightInput: Prisma.FlightCreateInput = {
      ...props,
      aircraft: {
        connect: { id: aircraftID },
      },
    };
    const flight = await db.flight.create({
      data: flightInput,
    });
    return { success: true, message: `Flight created ID: ${flight.id}` };
  } catch (error) {
    console.error("Error creating flight:", error);
    return {
      success: false,
      message: "An error occurred while creating flight",
    };
  }
}
type Seats = { seatCode: string; seatType: SeatType }[];
/** generate seats for num people
 * @param firstPassengerRows number of first class rows in the plane
 * @param businessPassengerRows number of business rows in the plane
 * @param economyPassengerRows number of economy rows in the plane
 * @param startChar starting character for seat code
 * @param firstClassRange number of seats in a first class row
 * @param businessClassRange number of seats in a business class row
 * @param economyClassRange number of seats in an economy class row
 * @example generateSeatCodes(6, 7, 10)
 * (126)[{seatCode: "A1", seatClass: "FIRST"}, {seatCode: "A2", seatClass: "FIRST"}]
 * Ratios should be around 20/30/50 for first/business/economy
 **/
function generateSeatCodes(
  firstPassengerRows: number,
  businessPassengerRows: number,
  economyPassengerRows: number,
  startChar = "A",
  firstClassRange = 4,
  businessClassRange = 6,
  economyClassRange = 6,
) {
  const seats: Seats = [];
  for (let i = 0; i < firstPassengerRows; i++) {
    const charCode = startChar.charCodeAt(0) + i;
    const letter = String.fromCharCode(charCode);
    for (let number = 1; number <= firstClassRange; number++) {
      seats.push({
        seatCode: letter + number.toString(),
        seatType: SeatType.FIRST,
      });
    }
  }
  for (let i = 0; i < businessPassengerRows; i++) {
    const charCode = startChar.charCodeAt(0) + i + firstPassengerRows;
    const letter = String.fromCharCode(charCode);
    for (let number = 1; number <= businessClassRange; number++) {
      seats.push({
        seatCode: letter + number.toString(),
        seatType: SeatType.BUSINESS,
      });
    }
  }
  for (let i = 0; i < economyPassengerRows; i++) {
    const charCode =
      startChar.charCodeAt(0) + i + firstPassengerRows + businessPassengerRows;
    const letter = String.fromCharCode(charCode);
    for (let number = 1; number <= economyClassRange; number++) {
      seats.push({
        seatCode: letter + number.toString(),
        seatType: SeatType.ECONOMY,
      });
    }
  }
  return seats;
}
export async function modifyAircraft({
  aircraftID,
  aircraftName,
  businessClassSeats,
  firstClassSeats,
  economyClassSeats,
}: {
  aircraftID: string;
  aircraftName: string;
  businessClassSeats: number;
  firstClassSeats: number;
  economyClassSeats: number;
}) {
  try {
    const aircraft = await db.aircraft.update({
      where: { id: aircraftID },
      data: {
        name: aircraftName,
        seats: {
          create: generateSeatCodes(
            firstClassSeats,
            businessClassSeats,
            economyClassSeats,
          ),
        },
      },
      include: {
        seats: true,
      },
    });
    return { success: true, message: `Aircraft updated ${aircraft.id}` };
  } catch (error) {
    console.error("Error updating aircraft:", error);
    return {
      success: false,
      message: "An error occurred while updating aircraft",
    };
  }
}
export async function deleteAircraft({ aircraftID }: { aircraftID: string }) {
  try {
    await db.aircraft.delete({ where: { id: aircraftID } });
    return { success: true, message: `Aircraft deleted ID: ${aircraftID}` };
  } catch (error) {
    console.error("Error deleting aircraft:", error);
    return {
      success: false,
      message: "An error occurred while deleting aircraft",
    };
  }
}

export async function getTrendingFlights() {
  const flights: Prisma.FlightGetPayload<{
    include: {
      tickets: {
        select: {
          customer: {
            select: {
              user: { select: { image: true } };
            };
          };
        };
      };
    };
  }>[] = await db.flight.findMany({
    take: 5,
    orderBy: {
      tickets: {
        _count: "desc",
      },
    },
    include: {
      tickets: {
        select: {
          customer: {
            select: {
              user: { select: { image: true } },
            },
          },
        },
      },
    },
  });
  return flights;
}
export async function readAircrafts() {
  const aircrafts = await db.aircraft.findMany({});
  return aircrafts;
}
export async function readFlights() {
  const flights = await db.flight.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return flights;
}
export async function readUsers() {
  const users = await db.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return users;
}
export async function editFlight({
  flightID,
  props,
}: {
  flightID: number;
  props: Prisma.FlightUpdateInput;
}) {
  try {
    const flight = await db.flight.update({
      where: { id: flightID },
      data: props,
    });
    return { success: true, message: `Flight updated ${flight.id}` };
  } catch (error) {
    console.error("Error updating flight:", error);
    return {
      success: false,
      message: "An error occurred while updating flight",
    };
  }
}
export async function editUser({
  userID,
  props,
}: {
  userID: string;
  props: Prisma.UserUpdateInput;
}) {
  try {
    const user = await db.user.update({
      where: { id: userID },
      data: props,
    });
    return { success: true, message: `User updated ${user.id}` };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      success: false,
      message: "An error occurred while updating user",
    };
  }
}
