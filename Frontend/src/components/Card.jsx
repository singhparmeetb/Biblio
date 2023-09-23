import React from "react";
import './Card.css';
import SideBar from "./SideBar";
import Search from "./Search";



function Card() {
    return (<div className="container">
        <SideBar></SideBar>
        <Search></Search>
    </div>);

}

export default Card;