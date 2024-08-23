const { relations } = require("drizzle-orm");
const {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
});
const records = pgTable("records", {
  id: serial("id").primaryKey(),
  userId: integer("userId"),
  categoryId: integer("categoryId"),
  amount: integer("amount"),
  date: varchar("date"),
  time: varchar("time"),
  transaction_type: varchar("transaction_type", { length: 256 }),
  payee: varchar("payee", { length: 256 }),
  note: varchar("note", { length: 256 }),
});

const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  icon_name: varchar("icon_name", { length: 256 }),
  userId: integer("userId"),
});

const usersRelations = relations(users, ({ many }) => ({
  records: many(records),
}));

const categoryRelations = relations(categories, ({ many, one }) => ({
  records: many(records),
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
}));

const recordsRelations = relations(records, ({ one }) => ({
  user: one(users, {
    fields: [records.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [records.categoryId],
    references: [categories.id],
  }),
}));

module.exports = {
  users,
  records,
  categories,
  usersRelations,
  recordsRelations,
  categoryRelations,
};
