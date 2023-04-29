import React, { Component } from 'react';
import headerStyles from '../styles/header.module.scss';

class Header extends Component {
    render() {
        return(
            <header className={headerStyles.header}>
                <div className='header-wrapper'>
                    <h1>{this.props.title}</h1>
                    <h2>Find all info you need before visiting Europe</h2>
                </div>
            </header>
        )
    }
}

export default Header;