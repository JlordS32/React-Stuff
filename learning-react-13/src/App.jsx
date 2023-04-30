import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    Navigate,
    useNavigate,
} from "react-router-dom";
import { NavBar } from './NavBar';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Challenges } from './Challenges.1';
import { Welcome } from './Welcome';

const NotFound = () => <h1>The page you're looking for is not found!</h1>

class App extends Component {
    state = {
        isLoggedIn: false,
        username: 'Jaylou',
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this.state.isLoggedIn)
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-container'>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path='/challenges/*'
                            element={
                                this.state.isLoggedIn ? (
                                    <Challenges logout={this.handleLogout}/>
                                ) : (
                                    <Navigate to='/login' replace />
                                )
                            }
                        /> 
                        <Route 
                            path='/login'
                            element={
                                this.state.isLoggedIn ? (
                                    <Navigate to='/challenges' replace />
                                ) : (
                                    <Welcome 
                                    isLoggedIn={this.state.isLoggedIn}
                                    handleLogin={this.handleLogin}
                                    handleLogout={this.handleLogout}
                                />
                                )
                            }
                        />
                        <Route path="*" element={<NotFound />} />     
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }   
}

export default App;
