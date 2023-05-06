import React, { Component } from 'react';
import { fetchCats, fetchCatImage } from '../../backend/getCats.jsx';

class RenderCat extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        fetchCats().then(async (res) => {
            const imagePromises = res.map((cat) => {
                return fetchCatImage(cat.id).then((img) => {
                    return {...cat, img};
                });
            });
    
            const arr = await Promise.all(imagePromises);

            const filteredRes = arr.filter(cat => cat.img !== undefined);

            this.setState({
                data: filteredRes,
            });
        });
    }

    render() {
        const { data } = this.state;

        return (
            <>
                {data.map((cat) => {
                    if (cat) {
                        return (
                            <div key={cat.id}>
                                <h1>{cat.name}</h1>
                                <p style={{fontWeight: '500'}}>{cat.description}</p>
                                <img src={cat.img.url} style={{
                                    width: '450px', 
                                    height: 'auto',
                                }}/>
                            </div>
                        )
                    }
                })}
            </>
        );
    }
}

export default RenderCat;
