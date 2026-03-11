import { eq } from "drizzle-orm";
import type { Request, Response } from "express";
import { db } from "../db";
import { books } from "../models/book.model";


const getAllBooks = async (_req: Request, res: Response) => {
  try{
    const payload = await db.select().from(books);
    res.status(200).json(payload);
  } catch (error) {
    res.status(422).json({ message: "Failed to get all books", error: error });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try{
    const id = Number(req.params.id);
    const [payload] = await db.select().from(books).where(eq(books.id, id));
    res.status(200).json(payload ?? null);
  } catch (error) {
    res.status(422).json({ message: "Failed to get book by id", error: error });
  }
};

const createBook = async (req: Request, res: Response) => {
  try{
    const payload = await db.insert(books).values(req.body);
    res.status(201).json(payload);
  } catch (error) {
    res.status(422).json({ message: "Failed to create book", error: error });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try{
    const id = Number(req.params.id);
    const payload = await db.update(books).set(req.body).where(eq(books.id, id));
    res.status(200).json(payload);
  } catch (error) {
    res.status(422).json({ message: "Failed to update book", error: error });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try{
    const id = Number(req.params.id);
    const payload = await db.delete(books).where(eq(books.id, id));
    res.status(200).json(payload);
  } catch (error) {
    res.status(422).json({ message: "Failed to delete book", error: error });
  }
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };