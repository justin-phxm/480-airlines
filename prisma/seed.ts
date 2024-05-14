import { db } from "../src/server/db";
import { type Flight, Role, SeatType, type User } from "@prisma/client";
import { faker } from "@faker-js/faker";
const SEED_NUM = 123;
const NUM_FAKE_DATA = 10;
faker.seed(SEED_NUM);
const createCustomerInformation = () => {
  return {
    isMember: faker.datatype.boolean(),
    newsletter: faker.datatype.boolean(),
    loungeDiscount: faker.datatype.boolean(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    onFlight: faker.datatype.boolean(),
    flightCoupon: faker.datatype.boolean(),
  };
};
/** create a transaction
 * Departure time is within the last 30 days
 * Price is at least 250
 * Aircraft ID is between 1 and 10
 * seatCode is between A1 and J4
 * @returns a transaction object
 */
const createTransaction = () => {
  const departureTime = faker.date.recent({ days: 30 });
  const transaction = {
    price: Number(faker.finance.amount({ min: 250 })),
    aircraftID: faker.number.int({ min: 1, max: 10 }),
    seatType: faker.helpers.enumValue(SeatType),
    departureAirportCode: faker.airline.airport().iataCode,
    arrivalAirportCode: faker.airline.airport().iataCode,
    departureTime: departureTime,
    arrivalTime: faker.date.soon({ days: 1, refDate: departureTime }),
    arrivalCity: faker.location.city(),
    departureCity: faker.location.city(),
    seatCode: faker.helpers.arrayElement(generateSeatCodes(40, "A", 4).seats),
  };
  return transaction;
};
const createUser = () => {
  const role = faker.helpers.enumValue(Role);
  const user = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: role,
    emailVerified: faker.datatype.boolean() ? faker.date.past() : null,
    image: faker.image.avatar(),
    customerInformation:
      role === Role.CUSTOMER ? createCustomerInformation() : undefined,
    employee:
      role === Role.EMPLOYEE
        ? {
            role: faker.person.jobTitle(),
          }
        : undefined,
  };
  return user;
};
const createFlight = () => {
  return {
    departureAirportCode: faker.airline.airport().iataCode,
    arrivalAirportCode: faker.airline.airport().iataCode,
    departureTime: faker.date.future(),
    arrivalTime: faker.date.future(),
    arrivalCity: faker.location.city(),
    departureCity: faker.location.city(),
    airline: faker.airline.airline().name,
  };
};
const createAircraft = (numFlights = 10) => {
  return {
    name: faker.airline.airplane().name,
    flights: Array.from({ length: numFlights }).map(() => {
      return createFlight();
    }),
    seats: (() => {
      const seatCodes = generateSeatCodes(40, "A", 4);
      const seatCodes2 = generateSeatCodes(80, seatCodes.endingCharCode, 6);
      return [...seatCodes.seats, ...seatCodes2.seats];
    })().map((seatCode) => {
      const seat = {
        seatCode: seatCode,
        seatType: faker.helpers.enumValue(SeatType),
      };
      return seat;
    }),
  };
};
async function seedUsers(numUsers: number) {
  const users = Array.from({ length: numUsers }).map(() => {
    return createUser();
  });
  const newUsers = [];
  for (const user of users) {
    const newUser = await db.user.upsert({
      where: {
        email: user.email,
      },
      create: {
        ...user,
        customerInformation: {
          create: user.customerInformation,
        },
        employee: {
          create: user.employee,
        },
      },
      update: {},
    });
    newUsers.push(newUser);
  }
  return newUsers;
}
async function seedAircrafts(numAircrafts: number) {
  const aircrafts = Array.from({ length: numAircrafts }).map(() => {
    return createAircraft();
  });
  for (const aircraft of aircrafts) {
    await db.aircraft.create({
      data: {
        ...aircraft,
        flights: {
          createMany: { data: aircraft.flights },
        },
        seats: {
          createMany: { data: aircraft.seats },
        },
      },
    });
  }
}
async function seedTransactions(numTransactions: number, users: User[]) {
  const transactions = Array.from({
    length: numTransactions,
  }).map(() => {
    return createTransaction();
  });
  for (const transaction of transactions) {
    await db.transaction.create({
      data: {
        ...transaction,
        user: {
          connect: faker.helpers.arrayElement(users),
        },
      },
    });
  }
}
async function seedTickets(numTickets: number, users: User[]) {
  const tickets = Array.from({ length: numTickets }).map(() => {
    return {};
  });
  for (const ticket of tickets) {
    await db.ticket.create({
      data: {
        ...ticket,
        seat: {
          connect: {
            id: faker.number.int({ min: 1, max: 1000 }),
          },
        },
        flight: {
          connect: {
            id: faker.number.int({ min: 1, max: NUM_FAKE_DATA }),
          },
        },
        user: {
          connect: {
            email: faker.helpers.arrayElement(users).email,
          },
        },
      },
    });
  }
}
async function main() {
  const users: User[] = await seedUsers(NUM_FAKE_DATA);
  /* @ts-expect-error: Unreachable code error */
  if (SEED_NUM === 0) {
    await seedAircrafts(NUM_FAKE_DATA);
  }
  await seedTransactions(NUM_FAKE_DATA, users);
  await seedTickets(NUM_FAKE_DATA, users);
}
/** generate seats for num people
 * @param numPassengers number of passengers
 * @param startChar starting character for seat code
 * @param seatsPerRow number of seats per row
 * @example generateSeatCodes(40, "A", 4) // { seats: [ 'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', ...], endingCharCode: 'K' }
 */
function generateSeatCodes(
  numPassengers: number,
  startChar: string,
  seatsPerRow: number,
): { seats: string[]; endingCharCode: string } {
  const seatCodes: string[] = [];
  for (let i = 0; i < Math.ceil(numPassengers / seatsPerRow); i++) {
    const charCode = startChar.charCodeAt(0) + i;
    const letter = String.fromCharCode(charCode);
    for (let number = 1; number <= seatsPerRow; number++) {
      seatCodes.push(letter + number.toString());
    }
  }
  const endingCharCode = String.fromCharCode(
    startChar.charCodeAt(0) + Math.floor(numPassengers / seatsPerRow),
  );
  return { seats: seatCodes, endingCharCode: endingCharCode };
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
