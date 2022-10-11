import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h2> working </h2>
            <ul>
                <NavLink to= '/'>Home</NavLink>
                <NavLink to= '/statistics '>Statistics</NavLink>
                <NavLink to= '/blog '>Blog </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;