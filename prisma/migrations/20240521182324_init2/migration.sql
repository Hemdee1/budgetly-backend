/*
  Warnings:

  - Changed the type of `gender` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `maritalStatus` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `modeOfTransport` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL,
DROP COLUMN "maritalStatus",
ADD COLUMN     "maritalStatus" TEXT NOT NULL,
DROP COLUMN "modeOfTransport",
ADD COLUMN     "modeOfTransport" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "Mode";

-- DropEnum
DROP TYPE "Status";
