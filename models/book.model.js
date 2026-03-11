import { mysqlTable, int, varchar, float, timestamp } from "drizzle-orm/mysql-core";

// This defines the "books" table — each field maps to a column in MySQL
export const books = mysqlTable("books", {
  id: int("id").primaryKey().autoincrement(),      // auto-incrementing integer ID
  title: varchar("title", { length: 255 }).notNull(),   // required string, max 255 chars
  author: varchar("author", { length: 255 }).notNull(), // required string, max 255 chars
  price: float("price").notNull(),                      // decimal number
  stock: int("stock").default(0),                       // integer, defaults to 0
  createdAt: timestamp("created_at").defaultNow(),      // auto-set to current time
});
