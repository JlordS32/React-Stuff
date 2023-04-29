import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import '../styles/styles.scss';

class App extends Component{
    state = {
        data: []
    }

    componentDidMount() {
        const API_URL = 'https://restcountries.com/v3.1/region/europe';

        axios
            .get(API_URL)
            .then((response) => {
                this.setState({
                    data: response.data,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    renderCountries = () => {
        const data = this.state.data;

        const countries = Object.entries(data).map(([key, value]) => ({
            name: value.name.common,
            flags: value.flags,
            population: value.population,
            languages:  value.languages,
            key: key,
        }));

        return countries.map((country) => {

            const languageEntries = Object.entries(country.languages).map(([key, value]) => {
                return value;
            })
            
            const formattedLanguage = languageEntries
                .map((name) => name)
                .join(', ');

            return (
                <div key={country.key} className='country-wrapper'>
                    <div className='box'>
                        {' '}
                        <img src={country.flags.png} alt={country.flags.alt}/>
                    </div>
                    <div className='box'>
                        <h1>{country.name}</h1>
                        <p>
                            Language: {formattedLanguage}
                        </p>
                        <p>Population: {country.population.toLocaleString()} </p>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <div className='container'>
                    {this.renderCountries()}
                </div>
            </div>
        )
    }
}

export default App;