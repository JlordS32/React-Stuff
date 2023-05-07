import React from "react";
import {
    NavLink,
} from "react-router-dom";


const Nav = () => {
    return (
        <nav className='nav-container'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/getcats'>Get Cats</NavLink>
                </li>
                <li>
                    <NavLink to='/getrandomcats'>Get Random Cats</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;