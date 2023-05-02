import React, { Component } from 'react';
import { fetchCats } from '../backend/getCats.jsx';

class Cats extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        fetchCats().then((response) => {
            this.setState({
                data: response,
            })
        })
    }
    render() {
        const { data } = this.state;
        return data.map((cat) => {
            return (
                <ul>
                    <li>{cat.name}</li>
                </ul>
            )
        })
    }
}

export default Cats;