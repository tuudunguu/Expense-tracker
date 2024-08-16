// Import necessary functions from drizzle-orm/pg-core
const {
  integer,
  pgTable,
  serial,
  varchar,
  pgEnum,
  date,
  time,
} = require("drizzle-orm/pg-core");

// Define the enum
const recordTypeEnum = pgEnum("recordType", ["Income", "Expense"]);

// Define the users table
const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

// Define the records table
const records = pgTable("records", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  type: recordTypeEnum("type"),
  date: date("date"),
  time: time("time"),
  payee: varchar("payee"),
  note: varchar("note", { length: 256 }),
  category: varchar("category").references(() => category.id),
  userId: integer("userId").references(() => users.id),
});

// Define the category table
const category = pgTable("category", {
  id: serial("id").primaryKey(),
  categoryIcon: varchar("categoryIcon", { length: 256 }),
  categoryName: varchar("categoryName", { length: 256 }),
  userId: integer("userId").references(() => users.id),
});

// Export the modules
module.exports = {
  recordTypeEnum,
  users,
  records,
  category,
};
