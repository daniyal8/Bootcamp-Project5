import React from 'react'
import './Header.css'
import logo from './logo.jpg'
import RubberBand from 'react-reveal/RubberBand';

function Header() {
    return (
        <div className="Header-par">
            <RubberBand>
            <div className="header">
                <img className="logo" src={logo} />
                <div className="Nav-links">
                    <ul className="nav-ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li>
                        <button className="cu-btn">Contact Us</button>
                    </ul>
                </div>
            </div>
            </RubberBand>
        </div>

    );
}
export default Header
