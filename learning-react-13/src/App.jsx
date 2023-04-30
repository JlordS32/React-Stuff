import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { NavBar } from './NavBar';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Challenges } from './Challenges.1';
import { User, Welcome } from './User';

const NotFound = (props) => <h1>The page your looking for is not found!</h1>

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/challenges/*" element={<Challenges />} />
            <Route
              path='/user/:username'
              element={(props) => {
                return (
                    <User
                        {...props}
                        isLoggedIn={this.state.isLoggedIn}
                        handleLogin={this.handleLogin}
                    />
                )
              }}
            />
            <Route 
                path='/login'
                element={(props) => {
                    return (
                        <Welcome 
                            {...props}
                            isLoggedIn={this.state.isLoggedIn}
                            handleLogin={this.handleLogin}
                        />
                    )
                }}
            />
            <Route
                path='/challenges'
                element={(props) => {
                    return this.state.isLoggedIn ? (
                        <>
                            <Challenges {...props} />
                        </>
                        ) : (
                        <>
                            {useNavigate('/user/asabeneh')}
                        </>
                    )
                }}
            />
            <Route path="*" element={<NotFound />} />     
        </Routes>
    );
}

class App extends Component {
    state = {
        isLoggedIn: false,
        firstName: 'Jaylou',
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true,
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div className='app-container'>
                    <NavBar />

                    <Routing />
                </div>
            </BrowserRouter>
        )
    }   
}

export default App;