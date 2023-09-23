// models/book.js
// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    ISBN: String,
    available: Number
});

module.exports = mongoose.model('Book', bookSchema);
