import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { customers } from '@/db/schema';

export const insertCustomerSchema = createInsertSchema(customers, {
  fname: (schema) => schema.min(1, "First name is required"),
  lname: (schema) => schema.min(1, "Last name is required"),
  address1: (schema) => schema.min(1, "Address is required"),
  address2: (schema) => schema.min(1, "Address line 2 is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.min(1, "State is required"),
  zip: (schema) => schema.min(1, "ZIP code is required"),
  phone: (schema) => schema.min(1, "Phone number is required"),
 
});

export const selectCustomerSchema = createSelectSchema(customers)
export type SelectCustomerSchema = typeof selectCustomerSchema._type

export type SelectCustomerSchemaType = typeof insertCustomerSchema._type
export type InsertCustomerSchemaType = typeof insertCustomerSchema._type

