import React from 'react';
import {
    Link,
} from "react-router-dom";

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <Link to="/" className="logo link">YOGA</Link>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/class" className="nav-link link">Class</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link link">Blog</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default HeaderNav;