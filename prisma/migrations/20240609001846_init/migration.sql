/*
  Warnings:

  - Added the required column `balance` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balance` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Income` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "balance" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "balance" INTEGER NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "title" DROP DEFAULT;
