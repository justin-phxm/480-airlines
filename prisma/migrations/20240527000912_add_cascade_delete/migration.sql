-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_aircraftId_fkey";

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_aircraftId_fkey" FOREIGN KEY ("aircraftId") REFERENCES "Aircraft"("id") ON DELETE CASCADE ON UPDATE CASCADE;
