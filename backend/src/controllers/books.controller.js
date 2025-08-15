import Book from "../models/Book.js";

export async function getAllBooks(_, res) {
    try {
        const books = await Book.find().sort({ createdAt: -1 });

        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);

        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    } catch (error) {
        console.error("Error fetching book by ID: ", error);

        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createBook(req, res) {
    try {
        const { title, description, author, publisher, year, image } = req.body;

        const newBook = new Book({
            title,
            description,
            author,
            publisher,
            year,
            image
        });

        const savedBook = await newBook.save();

        res.status(201).json(savedBook);    
    } catch (error) {
        console.error("Error creating book: ", error);
        
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updateBook(req, res) {
    try {
        const { title, description, author, publisher, year, image } = req.body;

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                author,
                publisher,
                year,
                image
            },
            { new: true }
        );

        if (!updatedBook) return res.status(404).json({ message: "Book not found" });

        res.status(200).json(updatedBook);
    } catch (error) {
        console.error("Error updating book: ", error);
        
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) return res.status(404).json({ message: "Book not found" });

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book: ", error);
        
        res.status(500).json({ message: "Internal Server Error" });
    }
}