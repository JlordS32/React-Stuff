import React, { Component } from 'react';
import { fetchCats, fetchCatImage } from '../backend/getCats.jsx';

class Cats extends Component {
    state = {
        data: [],
        img: [],
    }

    componentDidMount() {
        fetchCats().then(async (res) => {
            const imagePromises = res.map((cat) => {
                return fetchCatImage(cat.id).then((img) => {
                    return img;
                });
            });
    
            const arr = await Promise.all(imagePromises);
            console.log(arr);

            const test = [...res];

            console.log(test);

            this.setState({
                data: res,
            });
        });
    }

    render() {
        const { data, img } = this.state;


        return (
            <div>
                {/* {data.map((cat) => {
                    if (cat) {
                        <img src={imgUrls[cat.reference_image_id]} />
                    }
                })} */}
            </div>
        );
    }
}

export default Cats;
