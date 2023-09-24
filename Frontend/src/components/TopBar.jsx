import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css';

function TopBar() {
    const handleLogout = () => {
        // Perform the logout action here (e.g., clear authentication tokens, state, etc.)
        // Redirect the user to the login page
        // Example:
        // clearAuthenticationTokens(); // Implement this function
        // window.location.href = "/login"; // Redirect to the login page
    };

    return (
        <div className="TopBar">
            <div className="navigation">
                <a className="cart-link" href="https://www.freeiconspng.com/img/28344" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://www.freeiconspng.com/uploads/shopping-cart-icon-3.png"
                        alt="Cart Icon"
                        className="cart-icon"
                    />
                </a>
                <Link to="/login" className="button" onClick={handleLogout}>
                    <img src="https://www.svgrepo.com/show/420337/animal-avatar-bear.svg" alt="Avatar" />
                    <div className="logout">LOGOUT</div>
                </Link>
            </div>
        </div>
    );
}

export default TopBar;
