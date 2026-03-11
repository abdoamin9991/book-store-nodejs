import "dotenv/config";
import express from "express";
import bookRoutes from "./routes/book.routes";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/api/books", bookRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
