/*
  Warnings:

  - Made the column `customerUserId` on table `Ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_customerUserId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "customerUserId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "aircraftID" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES "Customer"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
