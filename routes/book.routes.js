import { Router } from "express";
import {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";

const router = Router();

router.get("/", getAllBooks);        // GET    /api/books
router.get("/:id", getBook);        // GET    /api/books/1
router.post("/", createBook);       // POST   /api/books
router.put("/:id", updateBook);     // PUT    /api/books/1
router.delete("/:id", deleteBook);  // DELETE /api/books/1

export default router;
