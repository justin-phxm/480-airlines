/*
  Warnings:

  - Added the required column `ticketID` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "ticketID" INTEGER NOT NULL;
