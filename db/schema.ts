import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  name: text("name"),
  age: text("age")
});

export const messagesTable = pgTable("messages", {
    id: text("id").primaryKey(),
    username: text("username"),
    content: text("content"),
    timestamp: timestamp("timestamp"),
    room: text("room"),
  });