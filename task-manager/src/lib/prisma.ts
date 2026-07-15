/**
 * ============================================================================
 * Prisma Client Singleton
 * ============================================================================
 *
 * This file exports a single PrismaClient instance for the entire application.
 *
 * Why use a singleton?
 * - Prevents creating multiple database connections during development.
 * - Works correctly with Next.js Fast Refresh.
 * - Ensures a single shared Prisma Client instance is reused.
 *
 * Compatible with:
 * - Next.js 16
 * - Prisma 7
 * - TypeScript
 * ============================================================================
 */

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  globalThis.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;