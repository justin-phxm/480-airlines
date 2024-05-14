/*
  Warnings:

  - Added the required column `airline` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flight" ADD COLUMN     "airline" TEXT NOT NULL;
