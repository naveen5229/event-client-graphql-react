import React from "react";
import { NavLink } from 'react-router-dom';
import './navigation.css';

const MainNavigation = (props) => {
    return <header className="main-navigation">
        <div className="header_icon">
            <h1>Navigation Bar</h1>
        </div>
        <nav className="route-selection">
            <ul>
                <li><NavLink to="/auth">Auth</NavLink></li>
                <li><NavLink to="/event">Event</NavLink></li>
                <li><NavLink to="/booking">Booking</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;