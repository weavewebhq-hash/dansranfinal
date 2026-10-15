import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const customRequests = pgTable("custom_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  contact: text("contact").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})
