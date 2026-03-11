import { Book } from "#models/book.model";

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ books, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json({ book, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ book, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ book, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Book deleted successfully", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };