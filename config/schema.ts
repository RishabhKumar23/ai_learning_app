import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  subscriptionId: varchar(),
});

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: varchar().notNull(),
  name: varchar().notNull(),
  description: varchar({ length: 1000 }),
  noOfChapters: integer().notNull(),
  includeVideo: boolean().notNull().default(false),
  difficulty: varchar().notNull(),
  courseJson: varchar(),
  userEmail: varchar('userEmail').references(() => usersTable.email),
});