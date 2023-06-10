import React, { Component } from 'react';
import Main from './home/Main.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Cats from './getcats/GetCats.jsx';
import GetRandomCats from './getrandomcats/GetRandomCats.jsx';
import Nav from './Nav.jsx';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import Contact from './contact/Contact.jsx';
import About from './about/About.jsx';

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
                        <Route 
                            path='/' 
                            element={<Main />} />
                        <Route 
                            path='/getcats' 
                            element={<Cats />} />
                        <Route 
                            path='getrandomcats'
                            element={<GetRandomCats />} />
                        <Route 
                            path='about'
                            element={<About />} />
                        <Route 
                            path='contact'
                            element={<Contact />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;