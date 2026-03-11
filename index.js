import "dotenv/config";
import express from "express";
import bookRoutes from "./routes/book.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON request bodies — without this, req.body is undefined
app.use(express.json());

// Mount book routes — all routes in book.routes.js are prefixed with /api/books
app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
