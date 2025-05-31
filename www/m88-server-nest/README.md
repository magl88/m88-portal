# M88 Server (NestJS Backend)

## Description

This is the backend part of the M88 portal, written in NestJS. The project implements a modern API for user management, authentication, pages, statistics, restrictions, and integrations with external services.

## Main Features

- **Authentication and Account Management**
  - Registration, login (including via external providers: OAuth)
  - Multi-factor authentication (MFA, TOTP, recovery codes)
  - Password reset and change, email change
  - Email verification
  - Session management (create, delete, view all active sessions)
- **Users**
  - Get user list (admins only)
  - Update profile and avatar
- **Restrictions**
  - Ban/restrict users with the ability to revoke (admin)
  - Get information about the current ban
- **Pages**
  - CRUD for pages by slug (content part)
- **Statistics**
  - General statistics on users, courses, views, lessons
  - Registration statistics by day
- **External Services**
  - Integration with OAuth providers (Google, GitHub, etc.)
  - Link/unlink external accounts
- **Infrastructure**
  - Database via Prisma
  - Redis for cache/queues
  - Email sending (confirmation, password recovery, etc.)
  - File storage (S3/cloud)
  - Swagger documentation at `/swagger`
  - Security via helmet, CORS, validation, logging

## Technologies

- **NestJS** (TypeScript)
- **Prisma** (PostgreSQL)
- **Redis**
- **BullMQ** (queues)
- **Swagger** (auto-generated API docs)
- **Cloudflare Turnstile/Recaptcha** (anti-bot)
- **Mailer** (email)
- **S3** (files)
- **OAuth** (Google, GitHub, etc.)

## Purpose

This is a universal backend for a portal with user accounts, authentication, content, statistics, and integrations. Suitable for educational platforms, SaaS, corporate portals.
