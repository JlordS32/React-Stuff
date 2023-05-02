import React, { Component } from 'react';
import Cats from './RenderCats.jsx';



class App extends Component {
    state = {
        data: [],
    }

    render() {
        return (
            <div className='app'>
                <Cats />
            </div>
        )
    }
}

export default App;