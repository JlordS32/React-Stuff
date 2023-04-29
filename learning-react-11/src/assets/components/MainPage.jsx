import React, { Component } from 'react';
import Header from './Header';
import '../styles/styles.scss';
import Countries from './Countries';

class Main extends Component{
    render() {
        return (
            <div className='app'>
                <Header title={this.props.title}/>
                <div className='container'>
                    <Countries onButtonClick={this.props.onButtonClick}/>
                </div>
            </div>
        )
    }
}

export default Main;