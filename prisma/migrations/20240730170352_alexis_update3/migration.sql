/*
  Warnings:

  - You are about to drop the `resena` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "resena" DROP CONSTRAINT "resena_libroId_fkey";

-- DropForeignKey
ALTER TABLE "resena" DROP CONSTRAINT "resena_usuarioId_fkey";

-- DropTable
DROP TABLE "resena";
