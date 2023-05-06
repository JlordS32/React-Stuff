import React, { Component } from 'react';
import Main from './home/Main.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Cats from './getcats/RenderCats.jsx';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

class App extends Component {
    state = {
        data: [],
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/getcats' element={<Cats />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;