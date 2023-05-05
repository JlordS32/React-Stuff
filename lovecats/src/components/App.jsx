import React, { Component } from 'react';
import Cats from './RenderCats.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

class App extends Component {
    state = {
        data: [],
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;