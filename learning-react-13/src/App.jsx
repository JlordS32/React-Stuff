import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
    state = {
        title: 'Hello World!'
    }
    render() {
        return (
            <Router>
                <div className='app-container'>
                    <h1>
                        {this.state.title}
                    </h1>
                </div>
            </Router>
        )
    }   
}

export default App;