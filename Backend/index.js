require('dotenv').config();
const express = require('express');
// const router = Router();
const cors = require('cors');
const mongoose = require('mongoose');
const bookSchema = require("./Schema/book");
const userSchema = require("./Schema/user");
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port", process.env.PORT);
    })
}).catch((error) => {
    console.log(error.message);
})


// Get all books
app.get('/', async (req, res) => {
    try {
        const books = await bookSchema.find({});
        // res.send("Hello World");
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


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

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // You can generate a JWT token here for authenticated users

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});
