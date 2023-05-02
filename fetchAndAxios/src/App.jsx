import React, { Component } from 'react';
import axios from 'axios';
import { Country } from './Country';

class App extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.fetchCountryData();
    }

    fetchCountryData = async () => {
        const url = 'https://restcountries.com/v3.1/region/asia';
        try {
            const response = axios.get(url);
            const data = (await response).data;
            this.setState({
                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className='app'>
            <h1>Asian</h1>
            <h1>Countries</h1>
            <div>
                <p>There are currently {this.state.data.length} in asia</p>
                <div className='countries-wrapper'>
                    <Country data={data}/>
                </div>
            </div>
            </div>
        )
    }
}

export default App;