
const express = require('express');
const Book = require('../models/Book');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/books', authMiddleware, async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
});

router.get('/books', async (req, res) => {
    const books = await Book.find().populate('reviews');
    res.json(books);
});

module.exports = router;
