import React, { Component } from 'react';
import getCountry from '../../backend/getCountry.jsx';

class RenderCountries extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        data: [],
    }

    componentDidMount() {
        getCountry()
          .then((response) => {
            this.setState({
                data: response,
            })
          })
          .catch((error) => {
            console.log(error);
          });
    }

    handleClick = (country) => {
        this.props.onButtonClick(country);
    }

    render() {
        const data = this.state.data;

        const countries = Object.entries(data).map(([key, value]) => ({
            name: value.name.common,
            flags: value.flags,
            population: value.population,
            languages:  value.languages,
            key: key,
            capital: value.capital,
            postalCode: value.postalCode,
            subRegion: value.subRegion,
            coatOfArms : value.coatOfArms.png,
            timezone: value.timezones,
        }));

        return countries.map((country) => {

            const languageEntries = Object.entries(country.languages).map(([key, value]) => {
                return value;
            })
            
            const formattedLanguage = languageEntries
                .map((name) => name)
                .join(', ');

            return (
                <div 
                    key={country.key} className='country-wrapper'
                    onClick={() => this.handleClick(country)}>
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
}

export default RenderCountries;