/*
  Warnings:

  - The primary key for the `Aircraft` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `customerUserId` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Flight" DROP CONSTRAINT "Flight_aircraftId_fkey";

-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_aircraftId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_customerUserId_fkey";

-- AlterTable
ALTER TABLE "Aircraft" DROP CONSTRAINT "Aircraft_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Aircraft_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Aircraft_id_seq";

-- AlterTable
ALTER TABLE "Flight" ALTER COLUMN "aircraftId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Seat" ALTER COLUMN "aircraftId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "customerUserId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_aircraftId_fkey" FOREIGN KEY ("aircraftId") REFERENCES "Aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_aircraftId_fkey" FOREIGN KEY ("aircraftId") REFERENCES "Aircraft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerUserId_fkey" FOREIGN KEY ("customerUserId") REFERENCES "Customer"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
