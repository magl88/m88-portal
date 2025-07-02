-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('EN', 'RU');

-- AlterTable
ALTER TABLE "pages" ADD COLUMN     "locale" "Locale" NOT NULL DEFAULT 'EN';
