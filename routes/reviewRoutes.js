
const express = require('express');
const Review = require('../models/Review');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/books/:id/reviews', authMiddleware, async (req, res) => {
    const review = new Review({ ...req.body, user: req.user.id, book: req.params.id });
    await review.save();
    res.status(201).json(review);
});

module.exports = router;
