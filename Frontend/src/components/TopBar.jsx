import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css';

function TopBar() {
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="TopBar">
            <div className="navigation">
                <Link to="/" className="button" onClick={handleLogout}>
                    <img src="https://www.svgrepo.com/show/420337/animal-avatar-bear.svg" alt="Avatar" />
                    <div className="logout">LOGOUT</div>
                </Link>
            </div>
        </div>
    );
}

export default TopBar;
