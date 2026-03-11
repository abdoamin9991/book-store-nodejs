import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

// Create a connection pool — reuses connections instead of opening a new one per query
const pool = mysql.createPool(process.env.DATABASE_URL);

// Wrap the pool with Drizzle so we can use its query API
export const db = drizzle(pool);
