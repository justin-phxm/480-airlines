import { db } from "../src/server/db";
import { Role, SeatType, type User } from "@prisma/client";
import { faker } from "@faker-js/faker";
const SEED_NUM = 0;
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
    seatCode: faker.helpers.arrayElement(generateSeatCodes(7, 8, 11)).seatCode,
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
  const departureTime = faker.date.soon({ days: 180 });
  return {
    departureAirportCode: faker.airline.airport().iataCode,
    arrivalAirportCode: faker.airline.airport().iataCode,
    departureTime: departureTime,
    arrivalTime: faker.date.soon({ days: 1, refDate: departureTime }),
    arrivalCity: faker.location.city(),
    departureCity: faker.location.city(),
    airline: faker.airline.airline().name,
    price: Number(faker.finance.amount({ min: 250, max: 1000 })),
  };
};
const createAircraft = (numFlights = 10) => {
  return {
    name: faker.airline.airplane().name,
    flights: Array.from({ length: numFlights }).map(() => {
      return createFlight();
    }),
    seats: generateSeatCodes(7, 8, 11),
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
  if (SEED_NUM === 0) {
    await seedAircrafts(NUM_FAKE_DATA);
  }
  await seedTransactions(NUM_FAKE_DATA, users);
  await seedTickets(NUM_FAKE_DATA, users);
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
