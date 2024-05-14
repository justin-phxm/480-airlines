/*
  Warnings:

  - Added the required column `aircraftID` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrivalAirportCode` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrivalCity` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrivalTime` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureAirportCode` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureCity` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureTime` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatCode` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatType` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "aircraftID" INTEGER NOT NULL,
ADD COLUMN     "arrivalAirportCode" TEXT NOT NULL,
ADD COLUMN     "arrivalCity" TEXT NOT NULL,
ADD COLUMN     "arrivalTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "departureAirportCode" TEXT NOT NULL,
ADD COLUMN     "departureCity" TEXT NOT NULL,
ADD COLUMN     "departureTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "seatCode" TEXT NOT NULL,
ADD COLUMN     "seatType" "SeatType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
