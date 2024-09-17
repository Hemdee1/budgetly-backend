/*
  Warnings:

  - You are about to drop the column `annualRent` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `modeOfTransport` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyIncome` on the `User` table. All the data in the column will be lost.
  - Added the required column `annualRent` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modeOfTransport` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyIncome` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "annualRent" INTEGER NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "maritalStatus" TEXT NOT NULL,
ADD COLUMN     "modeOfTransport" TEXT NOT NULL,
ADD COLUMN     "monthlyIncome" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "annualRent",
DROP COLUMN "gender",
DROP COLUMN "maritalStatus",
DROP COLUMN "modeOfTransport",
DROP COLUMN "monthlyIncome";
