import { db } from "../src/server/db";
import {
  type Prisma,
  Role,
  SeatType,
  type Flight,
  type Ticket,
  type Seat,
} from "@prisma/client";
import { faker } from "@faker-js/faker";
const SEED_NUM = 0;
const NUM_FAKE_DATA = 10;
faker.seed(SEED_NUM);
const createCustomerInformation = () => {
  const customer: Prisma.CustomerCreateNestedOneWithoutUserInput = {
    create: {
      isMember: faker.datatype.boolean(),
      newsletter: faker.datatype.boolean(),
      loungeDiscount: faker.datatype.boolean(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      flightCoupon: faker.datatype.boolean(),
    },
  };
  return customer;
};

const createUser = () => {
  const role = faker.helpers.enumValue(Role);
  const baseUser = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: role,
    emailVerified: faker.datatype.boolean() ? faker.date.past() : null,
    image: faker.image.avatar(),
  };
  if (role === Role.CUSTOMER) {
    const user: Prisma.UserCreateWithoutEmployeeInput = {
      ...baseUser,
      customerInformation: createCustomerInformation(),
    };
    return user;
  } else if (role === Role.EMPLOYEE) {
    const user: Prisma.UserCreateWithoutCustomerInformationInput = {
      ...baseUser,
      employee: {
        create: {
          role: faker.person.jobTitle(),
        },
      },
    };
    return user;
  } else {
    return baseUser;
  }
};
const createFlight = (
  aircrafts: Prisma.AircraftGetPayload<{
    include: { seats: true };
  }>[],
) => {
  const departureTime = faker.date.soon({ days: 180 });
  const flight: Prisma.FlightCreateInput = {
    departureAirportCode: faker.airline.airport().iataCode,
    arrivalAirportCode: faker.airline.airport().iataCode,
    departureTime: departureTime,
    arrivalTime: faker.date.soon({ days: 1, refDate: departureTime }),
    arrivalCity: faker.location.city(),
    departureCity: faker.location.city(),
    airline: faker.airline.airline().name,
    price: Number(faker.finance.amount({ min: 250, max: 1000 })),
    aircraft: {
      connect: { id: faker.helpers.arrayElement(aircrafts).id },
    },
  };
  return flight;
};
const createAircraft = () => {
  const aircraft: Prisma.AircraftCreateInput = {
    name: faker.airline.airplane().name,
  };
  return aircraft;
};
const createTicket = (
  customers: Prisma.UserGetPayload<{
    include: { customerInformation: true; employee: true };
  }>[],
  bookedSeat: Seat,
  flight: Flight,
) => {
  const ticket: Prisma.TicketCreateInput = {
    seat: {
      connect: { id: bookedSeat.id },
    },
    flight: {
      connect: { id: flight.id },
    },
    customer: {
      connect: { userId: faker.helpers.arrayElement(customers).id },
    },
  };
  return ticket;
};

/** create a transaction
 * Departure time is within the last 30 days
 * Price is at least 250
 * Aircraft ID is between 1 and 10
 * seatCode is between A1 and J4
 * @returns a transaction object
 */
const createTransaction = (seat: Seat, flights: Flight[], ticket: Ticket) => {
  const flight = faker.helpers.arrayElement(flights);
  const transaction: Prisma.TransactionCreateInput = {
    price: flight.price,
    aircraftID: flight.aircraftId,
    seatType: seat.seatType,
    departureAirportCode: flight.departureAirportCode,
    arrivalAirportCode: flight.arrivalAirportCode,
    departureTime: flight.departureTime,
    arrivalTime: flight.arrivalTime,
    arrivalCity: flight.arrivalCity,
    departureCity: flight.departureCity,
    seatCode: seat.seatCode,
    customer: { connect: { userId: ticket.customerUserId } },
  };
  return transaction;
};
async function seedUsers(numUsers: number) {
  const userPromises = Array.from({ length: numUsers }).map(async () => {
    const user: Prisma.UserGetPayload<{
      include: { customerInformation: true; employee: true };
    }> = await db.user.create({
      data: createUser(),
      include: { customerInformation: true, employee: true },
    });
    return user;
  });
  const users = await Promise.all(userPromises);
  const customers = users.filter((user) => user.role === Role.CUSTOMER);
  return customers;
}
async function seedAircrafts(numAircrafts: number) {
  const aircraftPromises = Array.from({ length: numAircrafts }).map(
    async () => {
      const aircraft = createAircraft();
      const newAircraft: Prisma.AircraftGetPayload<{
        include: { seats: true };
      }> = await db.aircraft.create({
        data: { ...aircraft, seats: { create: generateSeatCodes(7, 8, 11) } },
        include: { seats: true },
      });
      return newAircraft;
    },
  );

  const aircrafts = await Promise.all(aircraftPromises);
  return aircrafts;
}

async function seedFlights(
  aircrafts: Prisma.AircraftGetPayload<{
    include: { seats: true };
  }>[],
) {
  const flightPromises = Array.from({ length: aircrafts.length * 10 }).map(
    async () => {
      const flight = await db.flight.create({
        data: createFlight(aircrafts),
      });
      return flight;
    },
  );
  const flights = await Promise.all(flightPromises);
  return flights;
}
async function seedTransactions(flights: Flight[], tickets: Ticket[]) {
  const transactionPromises = tickets.map(async (ticket) => {
    const seat = await db.seat.findUniqueOrThrow({
      where: { id: ticket.seatId },
    });
    const transaction = await db.transaction.create({
      data: createTransaction(seat, flights, ticket),
    });
    return transaction;
  });
  const transactions = await Promise.all(transactionPromises);
  return transactions;
}
async function seedTickets(
  numTickets: number,
  customers: Prisma.UserGetPayload<{
    include: { customerInformation: true; employee: true };
  }>[],
  flights: Flight[],
) {
  const ticketPromises = Array.from({
    length: numTickets,
  }).map(async () => {
    const flight = faker.helpers.arrayElement(flights);
    const aircraft = await db.aircraft.findUniqueOrThrow({
      where: { id: flight.aircraftId },
      include: { seats: true },
    });
    const possibleSeats = aircraft.seats;
    const bookedSeat = faker.helpers.arrayElement(possibleSeats);
    const ticket = await db.ticket.create({
      data: createTicket(customers, bookedSeat, flight),
    });
    await db.seat.update({
      where: { id: bookedSeat.id },
      data: { available: false },
    });
    return ticket;
  });
  const tickets = await Promise.all(ticketPromises);
  return tickets;
}
async function main() {
  const customers: Prisma.UserGetPayload<{
    include: { customerInformation: true; employee: true };
  }>[] = await seedUsers(NUM_FAKE_DATA);
  const aircrafts: Prisma.AircraftGetPayload<{
    include: { seats: true };
  }>[] = await seedAircrafts(NUM_FAKE_DATA);
  const flights = await seedFlights(aircrafts);
  const tickets = await seedTickets(NUM_FAKE_DATA, customers, flights);
  await seedTransactions(flights, tickets);
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
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
