import React, { useState, useEffect, useRef } from "react";
import './MainPage.css';
import SideBar from "./SideBar";
import Search from "./Search";
import axios from 'axios';
import Book from './Books/Book';

const MainPage = () => {
    const containerRef = useRef();
    const [bookData, setBookData] = useState([]);
    const [loadedBooks, setLoadedBooks] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:8800/'); // Updated endpoint
            const data = res.data;
            setBookData(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    // useEffect(() => {
    //     if (containerRef.current) {
    //         const containerHeight = containerRef.current.clientHeight;
    //         const numBooksToLoad = Math.floor(containerHeight / 10); // Adjust the book card height accordingly

    //         // Load only the number of books that fit within the container
    //         setLoadedBooks(bookData.slice(0, numBooksToLoad));
    //     }
    // }, [bookData]);

    return (
        <div className="container">
            <div className="grid-container">
                {bookData.length > 0 ? (
                    bookData.map((bookItem, index) => (
                        <Book key={index} bookData={bookItem} />
                    ))
                ) : (
                    <p>No books found</p>
                )}
            </div>
            <SideBar />
            <Search />
        </div>
    );
}

export default MainPage;
