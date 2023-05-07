import React, { Component } from 'react';
import Main from './home/Main.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Cats from './getcats/GetCats.jsx';
import Nav from './Nav.jsx';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

class App extends Component {
    state = {
        data: [],
        style: {
            position: 'sticky',
            top: '0',
            transform: '',
        }
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Header style={this.state.style}/>
                    <Nav />
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