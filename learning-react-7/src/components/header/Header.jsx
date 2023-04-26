import React from 'react';

const Header = (props) => {
    const {
        welcome,
        title,
        subtitle,
        author: {firstname, lastname},
        date,
    } = props.data
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstname}
                    {lastname}
                </p>
                <smalle>{date}</smalle>
            </div>
        </header>
    )
}

export default Header;