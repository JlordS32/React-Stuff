import React from 'react';
import cat from '../assets/cat.png';

const Header = (props) => {
    return (
        <header>
            <div className='header-container'>
                <img src={cat} />
                <h1>Luv Cats</h1>
            </div>
        </header>
    );
}

export default Header;