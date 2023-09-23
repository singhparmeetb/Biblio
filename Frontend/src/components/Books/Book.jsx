import React from 'react';
import './Book.css';

const Book = ({ bookData }) => {
    return (
        <div className="book-card">
            <div className="book-cover">
                <img src={bookData.coverImageUrl} alt="Book Cover" />
            </div>
            <div className="book-info">
                <h3 className="book-title">{bookData.title}</h3>
                <p className="book-author">{bookData.author}</p>
                <p className="book-publish-date">{bookData.publishDate}</p>
            </div>
        </div>
    );
};

export default Book;
