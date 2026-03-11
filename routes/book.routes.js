import { updateBook, deleteBook, createBook, getBookById, getAllBooksPaginated } from "#controllers/book.controller";

import { Router } from "express";

const router = Router();

router.get("/", getAllBooksPaginated);
router.get("/:id", getBookById);
router.post("/", createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;