import { Prisma } from "@prisma/client";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}
