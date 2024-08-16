// Import necessary functions from drizzle-orm/pg-core
import { integer, pgTable, serial, varchar, pgEnum } from "drizzle-orm/pg-core";

// Define the enum
export const recordTypeEnum = pgEnum("recordType", ["INCOME", "EXPENSE"]);

// Define the users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

// Define the records table
export const records = pgTable("records", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  type: recordTypeEnum("type"),
  userId: integer("userId").references(() => users.id),
});

// Define the category table
export const category = pgTable("category", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  userId: integer("userId").references(() => users.id),
});
