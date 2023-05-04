import React, { Component } from 'react';
import { fetchCats, getCatImg } from '../backend/getCats.jsx';

class Cats extends Component {
    state = {
        data: [],
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
            getCatImg(cat.id).then((response) => {
                return response;
            });
            console.log(getCatImg(cat.id).then((response) => {
                return response;
            }))
            return(
                <div key={cat.id}>
                    <h1>{cat.name}</h1>
                </div>
            )
        })
    }
}

export default Cats;