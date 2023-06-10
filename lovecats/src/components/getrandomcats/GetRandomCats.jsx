import React, { Component } from 'react';
import { fetchCatImage } from '../../backend/getCats';

class GetRandomCats extends Component {

   state = {
      url: '',
   };

   componentDidMount() {
      fetchCatImage().then(async (res) => {
         const url = await res.url;

         this.setState({
            url: url,
         })
      });
   };

   render() {
      return (
         <div className='random-cats'>
            <h1>Hello World</h1>
            <h1>Welcome to the cats!</h1>
            <img src={this.state.url} alt='Cat Image' />            
         </div>
      )
   };
};

export default GetRandomCats;