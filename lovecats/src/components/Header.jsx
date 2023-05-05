import React from 'react';
import cat from '../assets/cat.png';

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <img src={cat} />
                <h1>Luv Cats</h1>
            </div>
            <nav className='nav-container'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Book</a></li>
                    <li><a href="#">Get Cats</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;