import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

class CatList extends Component {
    render() {
        const { cat } = this.props;
        return (
            <div
                className='catlist-items'
                tabIndex="0"
                onClick={this.props.onClick}   
            >
                {cat.name || <Skeleton />} 
            </div>
        )
    }
}
export default CatList;