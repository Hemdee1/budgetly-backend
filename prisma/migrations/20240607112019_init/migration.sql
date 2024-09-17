/*
  Warnings:

  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `percentage` on the `Category` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percent` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "description",
DROP COLUMN "percentage",
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "percent" INTEGER NOT NULL;
