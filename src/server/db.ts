import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();
export const getUserBasicInfo = async (id: string) =>
  db.user.findUniqueOrThrow({
    where: { id },
    include: {
      employee: true,
      customerInformation: true,
    },
  });
export const getUserByID = async (id: string) =>
  db.user.findUniqueOrThrow({
    where: { id },
    include: {
      employee: true,
      customerInformation: {
        include: {
          tickets: {
            orderBy: {
              createdAt: "desc",
            },
          },
          transactions: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      },
    },
  });
export const getCustomerWithTransactions = async (id: string) =>
  db.customer.findUnique({
    where: {
      userId: id,
    },
    include: {
      transactions: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
export const getCustomerWithTickets = async (id: string) =>
  db.customer.findUnique({
    where: {
      userId: id,
    },
    include: {
      tickets: {
        include: {
          flight: true,
          seat: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
export const createCustomer = async (userID: string) => {
  try {
    const res = await db.customer.upsert({
      where: {
        userId: userID,
      },
      create: { userId: userID },
      update: {},
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};
if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
