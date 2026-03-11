import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./models/*.js",          // where your table definitions live
  out: "./drizzle",                 // where migration SQL files are saved
  dialect: "mysql",                 // database type
  dbCredentials: {
    url: process.env.DATABASE_URL,  // connection string from .env
  },
});
