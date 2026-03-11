import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.mongoDBURL;

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

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
