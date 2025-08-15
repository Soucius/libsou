import express from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/books.controller.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;