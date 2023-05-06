import React, { Component } from 'react';
import RenderCat from './RenderCats';
import '../../styles/getcats.modules.css';
import CatList from './CatList';

class Cats extends Component {
    render() {
        return (
            <div className='getcats-container'>
                <div className='getcats-content'>
                    <h1>Select your cat</h1>
                    <ul className='catlist-container'>
                        <CatList />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cats;