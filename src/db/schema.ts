import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  boolean,
  timestamp,
  text,
  integer
} from "drizzle-orm/pg-core";

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  fname: varchar("fname", { length: 50 }),
  lname: varchar("lname", { length: 50 }),
  phone: varchar("phone", { length: 15 }),
  address1: text("address1"),
  address2: text("address2"),
  city: varchar("city", { length: 50 }),
  state: varchar("state", { length: 50 }),
  zip: varchar("zip", { length: 10 }),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const tickets = pgTable("tickets", {
  id: serial("id").primaryKey(),
  customerId: integer("customer_id").notNull().references(() => customers.id),
  title: varchar("title", { length: 100 }),
  description: text("description"),
  tech: varchar("tech").notNull().default("unassigned"),

  completed: boolean("completed").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});


export const customerRelations = relations(
  customers, ({ many }) => ({ tickets: many(tickets), })
)
export const ticketRelations = relations(tickets, ({ one }) => ({
  customers: one(customers, {
    fields: [tickets.customerId],
    references: [customers.id],
  }),
}));
