-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('single', 'married', 'divorce');

-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('privateCar', 'publicTransport');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "monthlyIncome" INTEGER NOT NULL,
    "annualRent" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "maritalStatus" "Status" NOT NULL,
    "modeOfTransport" "Mode" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
