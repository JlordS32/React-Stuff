import React, { Component } from 'react';
import { fetchCats } from '../../backend/getCats';

class CatList extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetchCats().then((res) => {
            this.setState({
                data: res,
            })
        })
    }

    render() {
        const { data } = this.state;

        return data.map((cat) => {
            return (
                <div 
                    key={cat.id} 
                    className='catlist-items'
                    tabindex="0"   
                >
                    {cat.name} 
                </div>
            )
        })
    }
}
export default CatList;