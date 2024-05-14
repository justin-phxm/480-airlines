import { db } from "../src/server/db";
import { Role, SeatType } from "@prisma/client";
import { faker } from "@faker-js/faker";
faker.seed(122);
async function seedUsers() {
  const users = Array.from({ length: 10 }).map(() => {
    const role = faker.helpers.enumValue(Role);
    const userEmail = faker.internet.email();
    const user = {
      email: userEmail,
      name: faker.person.fullName(),
      role: role,
      emailVerified: faker.datatype.boolean() ? faker.date.past() : null,
      image: faker.image.avatar(),
      customerInformation:
        role === Role.CUSTOMER
          ? {
              isMember: faker.datatype.boolean(),
              newsletter: faker.datatype.boolean(),
              loungeDiscount: faker.datatype.boolean(),
              address: faker.location.streetAddress({ useFullAddress: true }),
              onFlight: faker.datatype.boolean(),
              flightCoupon: faker.datatype.boolean(),
            }
          : undefined,
      employee:
        role === Role.EMPLOYEE
          ? {
              role: faker.person.jobTitle(),
            }
          : undefined,
    };

    return user;
  });
  for (const user of users) {
    await db.user.upsert({
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
  }
}
async function seedAircrafts() {
  const aircrafts = Array.from({ length: 10 }).map(() => {
    const aircraft = {
      name: faker.airline.airplane().name,
      flights: Array.from({ length: 10 }).map(() => {
        const flight = {
          departureAirportCode: faker.airline.airport().iataCode,
          arrivalAirportCode: faker.airline.airport().iataCode,
          departureTime: faker.date.future(),
          arrivalTime: faker.date.future(),
          arrivalCity: faker.location.city(),
          departureCity: faker.location.city(),
          airline: faker.airline.airline().name,
        };
        return flight;
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
    return aircraft;
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
async function main() {
  await seedUsers();
  await seedAircrafts();
}

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
