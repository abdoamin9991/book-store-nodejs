import { drizzle } from "drizzle-orm/mysql2";
import "dotenv/config";
import mysql from "mysql2/promise";
import { books } from "../models/book.model";

const pool = mysql.createPool(process.env.DATABASE_URL as string);
const schema = { books } as const;
export const db = drizzle(pool, { schema, mode: "default" });


