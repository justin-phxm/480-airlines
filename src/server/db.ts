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

export const getUserByID = async (id: string) =>
  db.user.findUnique({
    where: { id },
    include: {
      employee: true,
      customerInformation: true,
      tickets: true,
      transactions: true,
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
