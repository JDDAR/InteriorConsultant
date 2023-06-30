/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NavBar.css";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="container">
            <div className="navbar">
                <div className="nav-logo">THIS INTERIOR</div>
                <div className={`nav-toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={`nav-items ${isOpen && "open"}`}>
                    <ul>
                        <li>
                            <a href="" className="active">Home</a>
                        </li>
                        <li>
                            <a href="">Collection</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </section>
    );
}
export default NavBar