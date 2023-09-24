import React, { useState, useEffect, useRef } from "react";
import './MainPage.css';
import Search from "./Search";
import axios from 'axios';
import Book from './Books/Book';
import TopBar from "./TopBar";

const MainPage = () => {
    const containerRef = useRef();
    const [bookData, setBookData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:8800/'); //  endpoint
            const data = res.data;
            setBookData(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const filteredBooks = bookData.filter((bookItem) =>
        bookItem.bookTitle.toLowerCase().includes(searchText.toLowerCase())
    );

    const sortBooks = (type) => {
        setSortType(type);
    };

    const getSortedBooks = () => {
        let sortedBooks = [...bookData];
        if (sortType === "year") {
            sortedBooks.sort((a, b) => a.yearOfPublication - b.yearOfPublication);
        } else if (sortType === "availability") {
            sortedBooks.sort((a, b) => a.availableCopies - b.availableCopies);
        }
        return sortedBooks;
    };

    return (

        <div className="container">
            <TopBar />
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
                sortBooks={sortBooks}
            />
            <div className="grid-container">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((bookItem, index) => (
                        <Book key={index} bookData={bookItem} />
                    ))
                ) : (
                    <h3 className="error">No books found</h3>
                )}
            </div>
        </div>
    );
}

export default MainPage;
