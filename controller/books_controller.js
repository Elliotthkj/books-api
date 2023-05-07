const express = require('express');
const Book = require('../model/books');

const router = express.Router();

// ROUTES
// Stub GET route for all books
router.get('/books', async (req, res) => {
  res.send('GET all books');
});

// Stub POST route for a new book
router.post('/books', async (req, res) => {
  res.send('POST a new book');
});


module.exports = router;
