/*
  Warnings:

  - You are about to drop the column `availability` on the `Seat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "isMember" SET DEFAULT false,
ALTER COLUMN "newsletter" SET DEFAULT false,
ALTER COLUMN "loungeDiscount" SET DEFAULT false,
ALTER COLUMN "onFlight" SET DEFAULT false,
ALTER COLUMN "flightCoupon" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "availability",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true;
