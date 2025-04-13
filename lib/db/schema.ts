import {
  boolean,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const TodosTable = pgTable("todos", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  description: varchar({ length: 80 }).notNull(),
  complete: boolean().$default(() => false),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string", precision: 3 })
    .defaultNow()
    .$onUpdate(() => new Date().toISOString()),
});


export type TodosInsert = typeof TodosTable.$inferInsert;