/*
  Warnings:

  - You are about to drop the column `onFlight` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "onFlight",
ALTER COLUMN "address" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "customerUserId" TEXT;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "customerUserId" TEXT;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES "Customer"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES "Customer"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
