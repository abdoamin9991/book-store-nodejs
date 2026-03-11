import {
  int,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const books = mysqlTable("books", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  publishedYear: int("published_year").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
