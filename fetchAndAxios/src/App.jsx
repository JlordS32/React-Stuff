import React, { Component } from 'react';
import axios from 'axios';
import { Country } from './Country';

class App extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://restcountries.com/v3.1/region/asia')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    render() {
        <div className='app'>
            <h1>React Component Life Cycle</h1>
            <h1>Calling API</h1>
            <div>
                <p>There are {this.state.data.length} countries in the api</p>
                <div className='countries-wrapper'>
                    {this.state.data.map((country) => (
                    <Country country={country} />
                    ))}
                </div>
            </div>
        </div>
    }
}

export default App;