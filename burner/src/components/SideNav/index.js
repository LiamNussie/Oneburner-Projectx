import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function SideNav({ toggleMenu }) {

    return (
        <div className="side_nav">
            <button className="close_menu" onClick={toggleMenu}>
                X
          </button>
            <ul>
                <li className="link">Products</li>
                <li className="link">Prices</li>
                <li className="link">Support</li>
                <li className="link">Contact sales</li>
                <li className="link">Login</li>
                <li id="last_link" className="link">Try for Free</li>
            </ul>
        </div>
    )
}

export default SideNav
