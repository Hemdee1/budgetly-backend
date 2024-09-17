/*
  Warnings:

  - You are about to drop the column `verified` on the `Budget` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "verified";

-- CreateIndex
CREATE UNIQUE INDEX "Budget_userId_key" ON "Budget"("userId");
