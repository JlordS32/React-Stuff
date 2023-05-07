import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const { cat } = this.props;
        return (
            <div
                className='catlist-items'
                tabIndex="0"
                onClick={this.props.onClick}   
            >
                {cat.name} 
            </div>
        )
    }
}
export default CatList;