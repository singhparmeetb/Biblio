import React from 'react';
import './Book.css';

const Book = ({ bookData }) => {
    return (
        <div className="book-card">
            <div className="book-cover">
                <img src={bookData.imageURL} alt="Book Cover" />
            </div>
            <div className="book-info">
                <h3 className="book-title">{bookData.bookTitle}</h3>
                <p className="book-ISBN">{bookData.ISBN}</p>
                <p className="book-author">{bookData.bookAuthor}</p>
                <p className='book-count'>{`Copies Available: ${bookData.availableCopies}`}</p>
                <p className="book-publish-date">{bookData.yearOfPublication}</p>
            </div>
        </div>
    );
};

export default Book;
