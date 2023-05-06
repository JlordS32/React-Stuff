import React from 'react';
import cat from '../assets/cat.png';
import {
    NavLink,
} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <img src={cat} />
                <h1>Luv Cats</h1>
            </div>
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
        </header>
    );
};

export default Header;