/*
  Warnings:

  - You are about to drop the column `userId` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Income` table. All the data in the column will be lost.
  - Added the required column `budgetId` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_userId_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_userId_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "userId",
ADD COLUMN     "budgetId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
