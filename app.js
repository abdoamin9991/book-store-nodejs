import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "#routes/book.routes";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const mongoDBURL = process.env.mongoDBURL;

app.use(express.json());
app.use("/api/books", bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


