import { db } from "../src/server/db";

async function main() {
  const alice = await db.user.upsert({
    where: {
      email: "alice@prisma.io",
    },
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      role: "CUSTOMER",
      customerInformation: {
        create: {
          isMember: true,
          newsletter: true,
          loungeDiscount: false,
          onFlight: false,
          flightCoupon: false,
          address: " 420 5th Ave, New York, NY 10018, USA",
        },
      },
    },
    update: {},
  });
  const bob = await db.user.upsert({
    where: {
      email: "bob@prisma.io",
    },
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      role: "ADMIN",
    },
    update: {},
  });
  const charlie = await db.user.upsert({
    where: {
      email: "charlie@prisma.io",
    },
    create: {
      email: "charlie@prisma.io",
      name: "Charlie",
      role: "ADMIN",
    },
    update: {},
  });
  const dave = await db.user.upsert({
    where: {
      email: "dave@prisma.io",
    },
    create: {
      email: "dave@prisma.io",
      name: "Dave",
      role: "CUSTOMER",
      customerInformation: {
        create: {
          isMember: true,
          newsletter: true,
          loungeDiscount: false,
          onFlight: false,
          flightCoupon: false,
          address: " 420 5th Ave, New York, NY 10018, USA",
        },
      },
    },
    update: {},
  });

  console.log({ alice, bob, charlie, dave });
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
