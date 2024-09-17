/*
  Warnings:

  - You are about to drop the column `percent` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Budget` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "percent",
DROP COLUMN "title";
