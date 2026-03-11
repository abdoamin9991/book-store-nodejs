import { db } from "../db/index.js";
import { books } from "../models/book.model.js";
import { eq } from "drizzle-orm";

// GET /api/books — return all books
export const getAllBooks = async (req, res) => {
  const result = await db.select().from(books);
  res.json(result);
};

// GET /api/books/:id — return one book by ID
export const getBook = async (req, res) => {
  const result = await db.select().from(books).where(eq(books.id, Number(req.params.id)));
  if (result.length === 0) return res.status(404).json({ message: "Not found" });
  res.json(result[0]);
};

// POST /api/books — create a new book
export const createBook = async (req, res) => {
  const result = await db.insert(books).values(req.body);
  res.status(201).json({ id: result[0].insertId, ...req.body });
};

// PUT /api/books/:id — update an existing book
export const updateBook = async (req, res) => {
  await db.update(books).set(req.body).where(eq(books.id, Number(req.params.id)));
  const updated = await db.select().from(books).where(eq(books.id, Number(req.params.id)));
  if (updated.length === 0) return res.status(404).json({ message: "Not found" });
  res.json(updated[0]);
};

// DELETE /api/books/:id — delete a book
export const deleteBook = async (req, res) => {
  await db.delete(books).where(eq(books.id, Number(req.params.id)));
  res.status(204).send();
};
