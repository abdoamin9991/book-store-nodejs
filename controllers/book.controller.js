import { Book } from "#models/book.model";

const getAllBooksPaginated = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const books = await Book.find()
            .skip((page - 1) * limit)
            .limit(limit);
        if (!books) throw new Error("No books found");
        res.status(200).json({ books, success: true, total: books.length, page, limit });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findOne({ id: req.params.id });
        if (!book) throw new Error("Book not found");
        res.status(200).json({ book, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        if (!book) throw new Error("Failed to create book");
        res.status(201).json({ book, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!book) throw new Error("Book not found");
        res.status(200).json({ book, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({ id: req.params.id });
        if (!book) throw new Error("Book not found");
        res.status(200).json({ message: "Book deleted successfully", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

export { getAllBooksPaginated, getBookById, createBook, updateBook, deleteBook };