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
                <div className='grid-cell'>
                    <li key={cat.id}>
                        {cat.name}
                    </li>
                </div>
            )
        })
    }
}
export default CatList;