require('dotenv').config();
const express = require('express');
// const router = Router();
const mongoose = require('mongoose');
const { bookSchema } = require("./Schema/book");
const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port", process.env.PORT);
    })
}).catch((error) => {
    console.log(error.message);
})


// Create a new book
app.post('/', async (req, res) => {
    try {
        const newBook = new bookSchema(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ error: 'Could not create book' });
    }
});

// Get all books
app.get('/', async (req, res) => {
    try {
        const books = await find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a specific book by ID
app.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await bookSchema.findById(bookId);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a book by ID
app.put('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const updatedBook = await bookSchema.findByIdAndUpdate(bookId, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a book by ID
app.delete('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const deletedBook = await bookSchema.findByIdAndRemove(bookId);
        if (!deletedBook) {
            res.status(200).json(deletedBook);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});