-- CreateEnum
CREATE TYPE "user_roles" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "account_providers" AS ENUM ('GOOGLE', 'GITHUB');

-- CreateEnum
CREATE TYPE "email_verification_statuses" AS ENUM ('PENDING', 'VERIFIED');

-- CreateEnum
CREATE TYPE "totp_statuses" AS ENUM ('DISABLED', 'PENDING', 'ENABLED');

-- CreateEnum
CREATE TYPE "restriction_reasons" AS ENUM ('INAPPROPRIATE_USERNAME', 'SPAM', 'OFFENSIVE_BEHAVIOR');

-- CreateEnum
CREATE TYPE "restriction_statuses" AS ENUM ('ACTIVE', 'EXPIRED', 'CANCELED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "username" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "avatar" TEXT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "role" "user_roles" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "external_accounts" (
    "id" TEXT NOT NULL,
    "provider" "account_providers" NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expiry" INTEGER,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "external_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_verification" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiry" TIMESTAMP(3),
    "status" "email_verification_statuses" NOT NULL DEFAULT 'PENDING',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "email_verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "password_resets" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiry" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "password_resets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "multi_factor_authentication" (
    "id" TEXT NOT NULL,
    "recovery_codes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "totp_id" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "multi_factor_authentication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "totps" (
    "id" TEXT NOT NULL,
    "status" "totp_statuses" NOT NULL DEFAULT 'DISABLED',
    "secret" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "totps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restrictions" (
    "id" TEXT NOT NULL,
    "reason" "restriction_reasons" NOT NULL,
    "until" TIMESTAMP(3),
    "status" "restriction_statuses" NOT NULL DEFAULT 'ACTIVE',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restrictions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "external_accounts_provider_account_id_key" ON "external_accounts"("provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "external_accounts_user_id_provider_key" ON "external_accounts"("user_id", "provider");

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_token_key" ON "email_verification"("token");

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_user_id_key" ON "email_verification"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "password_resets_token_key" ON "password_resets"("token");

-- CreateIndex
CREATE UNIQUE INDEX "password_resets_user_id_key" ON "password_resets"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "multi_factor_authentication_totp_id_key" ON "multi_factor_authentication"("totp_id");

-- CreateIndex
CREATE UNIQUE INDEX "multi_factor_authentication_user_id_key" ON "multi_factor_authentication"("user_id");

-- AddForeignKey
ALTER TABLE "external_accounts" ADD CONSTRAINT "external_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_verification" ADD CONSTRAINT "email_verification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "password_resets" ADD CONSTRAINT "password_resets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "multi_factor_authentication" ADD CONSTRAINT "multi_factor_authentication_totp_id_fkey" FOREIGN KEY ("totp_id") REFERENCES "totps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "multi_factor_authentication" ADD CONSTRAINT "multi_factor_authentication_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restrictions" ADD CONSTRAINT "restrictions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
